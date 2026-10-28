-- Shared checklist marks for every Melive gestão page.
-- Applied on the existing sa-east-1 project because the free plan
-- already has two active projects. The gate token is generated in the
-- database and is not stored in this file.

create schema if not exists melive_private;

revoke all on schema melive_private from public;
revoke all on schema melive_private from anon, authenticated;

create table if not exists melive_private.gestao_gate (
  id integer primary key,
  token text not null,
  constraint gestao_gate_singleton check (id = 1)
);

insert into melive_private.gestao_gate (id, token)
values (1, replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', ''))
on conflict (id) do nothing;

create or replace function melive_private.gestao_gate_ok()
returns boolean
language sql
stable
security definer
set search_path = melive_private, pg_temp
as $$
  select coalesce(
    current_setting('request.headers', true)::json->>'x-melive-gate',
    ''
  ) = (select token from melive_private.gestao_gate where id = 1);
$$;

revoke all on function melive_private.gestao_gate_ok() from public;
grant usage on schema melive_private to anon, authenticated;
grant execute on function melive_private.gestao_gate_ok() to anon, authenticated;

create table if not exists public.melive_gestao_checks (
  project_slug text not null,
  task_id text not null,
  updated_at timestamptz not null default now(),
  primary key (project_slug, task_id),
  constraint melive_gestao_checks_project_slug_check
    check (project_slug ~ '^[a-z0-9][a-z0-9-]{0,39}$'),
  constraint melive_gestao_checks_task_id_check
    check (task_id ~ '^s[1-9][0-9]{0,3}-t[1-9][0-9]{0,3}$')
);

comment on table public.melive_gestao_checks is
  'Shared checklist marks for the Melive proposal portal. A row means the task is checked. Access requires the portal gate header.';

alter table public.melive_gestao_checks enable row level security;

revoke all on table public.melive_gestao_checks from public, anon, authenticated;
grant select, insert, update, delete on table public.melive_gestao_checks to anon, authenticated, service_role;

drop policy if exists melive_gestao_checks_gate on public.melive_gestao_checks;
create policy melive_gestao_checks_gate
  on public.melive_gestao_checks
  for all
  to anon, authenticated
  using (melive_private.gestao_gate_ok())
  with check (melive_private.gestao_gate_ok());
