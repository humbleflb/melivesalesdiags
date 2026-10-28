import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta comercial — Bangalô | Melive",
  description:
    "Landing page e gestão de tráfego pago no Google Ads e Meta Ads para o Bangalô. Condição especial de R$ 980,00 na landing page para contratação confirmada até 3 de novembro de 2026.",
};

const landingDeliverables = [
  "Planejamento da estrutura da página",
  "Organização da jornada de conversão",
  "Desenvolvimento visual responsivo",
  "Adaptação para computadores, tablets e celulares",
  "Apresentação dos principais diferenciais do Bangalô",
  "Seções de benefícios, informações e provas de confiança",
  "Chamadas estratégicas para contato",
  "Integração com WhatsApp ou outro canal comercial definido",
  "Configuração básica de rastreamento",
  "Revisão técnica antes da publicação",
  "Orientação para domínio e publicação",
];

const trafficDeliverables = [
  "Diagnóstico inicial do negócio",
  "Definição dos objetivos das campanhas",
  "Planejamento da estratégia de aquisição",
  "Estruturação das campanhas no Google e na Meta",
  "Definição de públicos e segmentações",
  "Pesquisa de palavras-chave",
  "Desenvolvimento de textos para anúncios",
  "Configuração de conversões e rastreamento",
  "Monitoramento recorrente",
  "Otimização de públicos, palavras-chave e anúncios",
  "Ajustes de orçamento entre campanhas",
  "Testes de mensagens e formatos",
  "Relatório periódico de desempenho",
  "Recomendações para os próximos ciclos",
];

const distributionCriteria = [
  "Objetivos comerciais",
  "Perfil do público",
  "Área geográfica",
  "Volume de busca",
  "Sazonalidade",
  "Capacidade de atendimento",
  "Resultados observados nas primeiras campanhas",
];

const clientDuties = [
  "Informações sobre o Bangalô",
  "Logotipo e identidade visual, quando existentes",
  "Fotografias e vídeos disponíveis",
  "Diferenciais, serviços e condições comerciais",
  "Acessos às contas de anúncios ou autorização para configuração",
  "Domínio e hospedagem, quando existentes",
  "Aprovação dos materiais dentro dos prazos acordados",
  "Atendimento dos contatos gerados pelas campanhas",
];

const excludedItems = [
  "Produções fotográficas",
  "Vídeos profissionais",
  "Domínio",
  "Hospedagem",
  "Ferramentas externas",
];

const nextSteps = [
  "Confirmação da contratação",
  "Reunião ou envio do briefing",
  "Coleta dos materiais e acessos",
  "Planejamento da landing page",
  "Desenvolvimento e aprovação",
  "Configuração do rastreamento",
  "Planejamento das campanhas",
  "Publicação da página e ativação dos anúncios",
  "Monitoramento e otimização dos resultados",
];

function number(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function PropostaBangalo() {
  return (
    <main className="proposal">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Melive — início da proposta">
          <img src="/melive-logo.png" alt="Melive" />
        </a>
        <nav aria-label="Seções da proposta">
          <a href="#objetivo">Objetivo</a>
          <a href="#landing">Entregas</a>
          <a href="#investimento">Investimento</a>
          <a className="nav-cta" href="#condicao">Condição especial</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Proposta comercial</span> Bangalô — Oziel
          </p>
          <h1>
            Do anúncio ao contato.
            <br />
            <strong>Uma jornada só.</strong>
          </h1>
          <p className="hero-lead">
            Uma landing page planejada para conversão e campanhas no Google Ads
            e na Meta Ads para encontrar potenciais clientes e levá-los até a
            ação comercial.
          </p>
          <dl className="hero-figures">
            <div>
              <dt>Landing page promocional</dt>
              <dd>R$ 980,00</dd>
            </div>
            <div>
              <dt>Gestão mensal dos dois canais</dt>
              <dd>R$ 1.150,00</dd>
            </div>
          </dl>
          <div className="hero-actions">
            <a className="button dark" href="#investimento">
              Ver investimento <span>↓</span>
            </a>
            <p>
              <b>30%</b> na landing page
              <br />
              até 3 de novembro
            </p>
          </div>
        </div>
        <div
          className="hero-stamp"
          role="img"
          aria-label="Desconto de 30% para contratação confirmada até 3 de novembro de 2026"
        >
          <span>MELIVE • ATÉ • 03.11 •</span>
          <b>30%</b>
          <small>DESCONTO</small>
        </div>
      </section>

      <section className="doc-meta" aria-label="Identificação da proposta">
        <p>
          <span>Cliente</span>
          <b>Bangalô — Oziel</b>
        </p>
        <p>
          <span>Proponente</span>
          <b>Melive</b>
        </p>
        <p>
          <span>Data</span>
          <b>
            <time dateTime="2026-10-28">28 de outubro de 2026</time>
          </b>
        </p>
        <p>
          <span>Proposta</span>
          <b>Landing page e gestão de tráfego pago</b>
        </p>
      </section>

      <section className="section proposal-objective" id="objetivo">
        <div className="section-index">01 / OBJETIVO</div>
        <div className="summary-grid">
          <h2>
            Apresentar o Bangalô
            <br />
            e transformar visita
            <br />
            <em>em contato.</em>
          </h2>
          <div className="summary-copy">
            <p>
              Desenvolver uma estrutura digital capaz de apresentar o Bangalô
              com clareza, despertar interesse e transformar visitantes em
              contatos comerciais.
            </p>
            <blockquote>
              A landing page será o destino central das campanhas. A mídia paga
              encontra potenciais clientes, desperta interesse e conduz até a
              ação comercial.
            </blockquote>
          </div>
        </div>
        <ol className="journey" aria-label="Jornada integrada">
          <li>
            <span>01</span>
            <b>Anúncio</b>
            <small>Google Ads e Meta Ads</small>
          </li>
          <li>
            <span>02</span>
            <b>Landing page</b>
            <small>destino das campanhas</small>
          </li>
          <li>
            <span>03</span>
            <b>Interesse</b>
            <small>proposta com clareza</small>
          </li>
          <li>
            <span>04</span>
            <b>Contato</b>
            <small>ação comercial</small>
          </li>
        </ol>
      </section>

      <section className="proposal-landing" id="landing">
        <div className="proposal-landing-copy">
          <div className="section-index light">02 / LANDING PAGE</div>
          <h2>Uma página exclusiva para o Bangalô.</h2>
          <p>
            Criação de uma página desenvolvida para comunicar a proposta do
            negócio, destacar seus diferenciais e facilitar o contato do
            interessado.
          </p>
          <ul className="deliver-list">
            {landingDeliverables.map((item, index) => (
              <li key={item}>
                <span>{number(index)}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="briefing-note">
            A estrutura definitiva será definida após o briefing e a análise
            dos materiais fornecidos pelo cliente.
          </p>
        </div>

        <aside className="offer" id="condicao" aria-label="Condição especial da landing page">
          <p className="offer-kicker">Condição especial</p>
          <p className="offer-deadline">
            Para contratação confirmada até{" "}
            <time dateTime="2026-11-03">terça-feira, 3 de novembro de 2026</time>
            , desconto de 30%.
          </p>
          <div className="offer-lines">
            <p>
              <span>Valor padrão</span>
              <s>R$ 1.400,00</s>
            </p>
            <p>
              <span>Desconto de 30%</span>
              <strong>− R$ 420,00</strong>
            </p>
          </div>
          <div className="offer-now">
            <small>Landing page — valor promocional</small>
            <strong>R$ 980,00</strong>
            <span>condição pontual, só dentro deste prazo</span>
          </div>
          <p className="offer-note">
            Essa é uma condição comercial pontual, válida somente para a
            confirmação do projeto dentro do prazo indicado.
          </p>
        </aside>
      </section>

      <section className="section proposal-traffic" id="trafego">
        <div className="section-index">03 / GESTÃO DE TRÁFEGO PAGO</div>
        <div className="traffic-head">
          <div>
            <h2>Google Ads e Meta Ads para gerar oportunidades.</h2>
            <p>
              Planejamento, configuração e gestão de campanhas direcionadas à
              geração de oportunidades para o Bangalô.
            </p>
          </div>
          <div className="fee">
            <small>Gestão mensal dos dois canais</small>
            <strong>R$ 1.150,00</strong>
            <span>
              O valor corresponde à gestão estratégica e operacional. A verba
              de mídia não está incluída.
            </span>
          </div>
        </div>

        <div className="channels">
          <article>
            <small>Google Ads</small>
            <h3>Quem já está buscando</h3>
            <p>
              Campanhas voltadas a pessoas que já demonstram intenção de busca
              relacionada à solução, localização ou experiência oferecida pelo
              Bangalô.
            </p>
          </article>
          <article>
            <small>Meta Ads</small>
            <h3>Alcance no Instagram e Facebook</h3>
            <p>
              Campanhas para ampliar o alcance, apresentar a proposta
              visualmente e estimular visitas à landing page ou contatos
              diretos.
            </p>
          </article>
        </div>

        <h3 className="list-title">Entregas previstas</h3>
        <ul className="deliver-list deliver-list-light">
          {trafficDeliverables.map((item, index) => (
            <li key={item}>
              <span>{number(index)}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section proposal-media" id="midia">
        <div className="section-index">04 / INVESTIMENTO EM MÍDIA</div>
        <div className="media-layout">
          <div>
            <h2>A verba dos anúncios fica fora dos honorários.</h2>
            <p>
              Além da gestão, será necessário reservar um orçamento mensal para
              veiculação dos anúncios.
            </p>
            <p className="media-note">
              O valor será pago diretamente às plataformas de publicidade e não
              está incluído nos honorários da Melive.
            </p>
          </div>
          <div className="media-range">
            <small>Faixa inicial recomendada</small>
            <strong>
              R$ 1.000,00 <span>a</span> R$ 2.000,00
            </strong>
            <em>por mês</em>
          </div>
        </div>
        <div className="criteria-block">
          <h3>Distribuição entre Google Ads e Meta Ads</h3>
          <p>
            Será definida pelo diretor de marketing após o diagnóstico do
            negócio, considerando:
          </p>
          <ul className="criteria">
            {distributionCriteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="media-note">
            A verba poderá ser redistribuída ao longo do trabalho conforme os
            canais demonstrarem maior potencial de resultado.
          </p>
        </div>
      </section>

      <section className="section proposal-invest" id="investimento">
        <div className="section-index light">05 / RESUMO DO INVESTIMENTO</div>
        <div className="priority-head">
          <h2>O que entra em cada valor.</h2>
          <p>Landing page, gestão e mídia aparecem separados de propósito.</p>
        </div>
        <table className="invest-table">
          <caption className="visually-hidden">Resumo do investimento</caption>
          <thead>
            <tr>
              <th scope="col">Entrega</th>
              <th scope="col">Investimento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Landing page — valor padrão</th>
              <td>R$ 1.400,00</td>
            </tr>
            <tr>
              <th scope="row">Desconto para fechamento até 03/11/2026</th>
              <td>− R$ 420,00</td>
            </tr>
            <tr className="is-promo">
              <th scope="row">Landing page — valor promocional</th>
              <td>R$ 980,00</td>
            </tr>
            <tr>
              <th scope="row">Gestão mensal de Google Ads e Meta Ads</th>
              <td>R$ 1.150,00</td>
            </tr>
            <tr>
              <th scope="row">Investimento mensal em mídia</th>
              <td>R$ 1.000,00 a R$ 2.000,00</td>
            </tr>
          </tbody>
        </table>

        <div className="total-pair">
          <article>
            <small>Investimento estimado no primeiro mês</small>
            <strong>
              R$ 3.130,00 <em>a</em> R$ 4.130,00
            </strong>
            <p>
              Considerando a landing page promocional, a gestão e a verba de
              mídia.
            </p>
          </article>
          <article>
            <small>Investimento recorrente após a entrega da página</small>
            <strong>
              R$ 2.150,00 <em>a</em> R$ 3.150,00
            </strong>
            <p>Gestão de tráfego mais investimento em mídia, por mês.</p>
          </article>
        </div>
      </section>

      <section className="section proposal-scope" id="responsabilidades">
        <div className="section-index">06 / RESPONSABILIDADES</div>
        <div className="scope-grid">
          <div>
            <h2>O que o cliente disponibiliza.</h2>
            <p>
              Para o desenvolvimento da página e a operação das campanhas.
            </p>
            <ul className="duty-list">
              {clientDuties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="excluded">
            <h3>Fora deste escopo</h3>
            <ul>
              {excludedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Não estão incluídos, salvo contratação adicional.</p>
          </aside>
        </div>
      </section>

      <section className="next-section" id="proximos-passos">
        <div className="next-shape" aria-hidden="true" />
        <div className="next-copy">
          <div className="section-index">07 / PRÓXIMOS PASSOS</div>
          <h2>Uma jornada integrada.</h2>
          <p>
            O objetivo não é apenas publicar uma nova página ou colocar
            anúncios no ar. Com uma apresentação mais clara e campanhas
            direcionadas, o Bangalô terá uma estrutura digital preparada para
            alcançar o público certo e transformar investimento em oportunidades
            mensuráveis.
          </p>
          <p className="journey-line">
            anúncio → landing page → interesse → contato comercial
          </p>
          <p>
            Após a aprovação desta proposta:
          </p>
          <ol>
            {nextSteps.map((step, index) => (
              <li key={step}>
                <span>{number(index)}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="closing-offer">
            Condição especial: landing page por <b>R$ 980,00</b> para
            contratação confirmada até{" "}
            <time dateTime="2026-11-03">3 de novembro de 2026</time>.
          </p>
          <a
            className="button cream"
            href="mailto:contato@melive.com.br?subject=Proposta%20Bangal%C3%B4%20%E2%80%94%20contrata%C3%A7%C3%A3o"
          >
            Confirmar a contratação <span>↗</span>
          </a>
        </div>
        <div className="next-mark">
          <img src="/melive-logo.png" alt="" />
          <p>
            Anúncio, página e contato
            <br />
            trabalhando juntos.
          </p>
        </div>
      </section>

      <footer>
        <img src="/melive-logo.png" alt="Melive" />
        <p>Proposta comercial • Bangalô — Oziel • 28 de outubro de 2026</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
