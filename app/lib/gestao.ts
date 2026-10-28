export const PROJECT_SLUG = /^[a-z0-9][a-z0-9-]{0,39}$/;
export const TASK_ID = /^s[1-9]\d{0,3}-t[1-9]\d{0,3}$/;

export function parseGestaoProject(value: unknown, allowed: readonly string[]) {
  if (typeof value !== "string" || !PROJECT_SLUG.test(value) || !allowed.includes(value)) {
    return null;
  }
  return value;
}

export function parseTaskId(value: unknown) {
  if (typeof value !== "string" || !TASK_ID.test(value)) return null;
  return value;
}

export function parseSeed(value: unknown) {
  if (!Array.isArray(value) || value.length === 0 || value.length > 400) return null;
  const ids: string[] = [];
  for (const item of value) {
    const id = parseTaskId(item);
    if (!id) return null;
    ids.push(id);
  }
  return [...new Set(ids)];
}
