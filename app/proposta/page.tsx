import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proposta Comercial — Melive + Zetti",
  description:
    "Landing page estratégica de conversão: da força do ecossistema à clareza da conversão.",
};

const deliverables = [
  {
    title: "Estratégia de conversão",
    text: "Definição do público, intenção de entrada, oferta, argumentos prioritários, objeções, provas e ação esperada.",
  },
  {
    title: "Arquitetura da página",
    text: "Construção da jornada completa, organizando a informação na sequência mais adequada para conduzir o visitante até a conversão.",
  },
  {
    title: "Copywriting",
    text: "Headlines, argumentos, benefícios, provas, CTAs, tratamento de objeções e microcopy do formulário.",
  },
  {
    title: "UI Design",
    text: "Interface exclusiva, alinhada à identidade visual e ao ecossistema digital da Zetti, com versões desktop e mobile.",
  },
  {
    title: "Desenvolvimento",
    text: "Implementação responsiva, otimizada para velocidade, experiência e diferentes dispositivos.",
  },
  {
    title: "Conversão e mensuração",
    text: "Formulário contextualizado, integração com a jornada definida e configuração dos principais eventos de performance.",
  },
];

const process = [
  {
    step: "01",
    title: "Imersão",
    text: "Kickoff com marketing para definir solução prioritária, público, campanha, materiais, provas e objetivos.",
  },
  {
    step: "02",
    title: "Estratégia",
    text: "Arquitetura da jornada, proposta de valor, argumentos, CTAs e estrutura de conversão.",
  },
  {
    step: "03",
    title: "Copy + UI",
    text: "Construção da comunicação e desenvolvimento da experiência visual.",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    text: "Implementação responsiva e integração dos pontos de conversão.",
  },
  {
    step: "05",
    title: "Tracking + QA",
    text: "Configuração dos eventos acordados, testes em dispositivos e validação técnica.",
  },
  {
    step: "06",
    title: "Publicação",
    text: "Entrega da página pronta para receber tráfego e iniciar a coleta de dados.",
  },
];

const packageItems = [
  "01 landing page estratégica completa",
  "Arquitetura de conversão",
  "Copywriting integral",
  "UI personalizada",
  "Versão desktop e mobile",
  "Desenvolvimento responsivo",
  "Formulário de captação",
  "Integração com ferramenta definida no kickoff",
  "Configuração de GTM/GA4 e eventos essenciais",
  "Implementação de UTMs",
  "QA pré-publicação",
  "Publicação",
  "02 rodadas consolidadas de ajustes",
  "30 dias de suporte técnico pós-publicação",
];

const trackingEvents = [
  "Visualização da página",
  "Interação com CTAs",
  "Início do formulário",
  "Envio do formulário",
  "Conversões de campanhas",
  "Origem e parâmetros UTM",
];

const formFields = [
  "Perfil da operação",
  "Porte ou número de unidades",
  "Solução de interesse",
  "Principal desafio",
  "Informações para preparar o próximo contato",
];

const futureLenses = [
  {
    title: "Site institucional",
    text: "Posiciona o ecossistema.",
  },
  {
    title: "Conteúdo",
    text: "Gera descoberta e educação.",
  },
  {
    title: "Landing pages",
    text: "Transformam intenções específicas em oportunidades comerciais.",
  },
  {
    title: "Dados",
    text: "Mostram quais mensagens, soluções e jornadas devem receber mais investimento.",
  },
];

const scaleUses = [
  "Outras soluções",
  "Campanhas de mídia",
  "Lançamentos",
  "Segmentos específicos",
  "Conteúdos de alta intenção",
  "Diferentes estágios da jornada comercial",
];

export default function PropostaPage() {
  return (
    <main className="proposta">
      {/* 01 — Capa */}
      <section className="slide slide-cover" id="capa">
        <div className="slide-bg-lines" aria-hidden="true" />
        <div className="slide-inner cover-inner">
          <p className="slide-kicker">
            <span>Proposta comercial</span> Lâmina 01
          </p>
          <h1>
            Da força do ecossistema
            <br />
            <strong>à clareza da conversão.</strong>
          </h1>
          <p className="slide-lead">
            Uma nova camada de experiência digital para transformar interesse em
            oportunidades comerciais mais contextualizadas.
          </p>
          <div className="cover-brand">
            <img src="/melive-logo.png" alt="Melive" />
            <span aria-hidden="true">+</span>
            <b>Zetti</b>
          </div>
        </div>
        <a className="slide-next" href="#partida">
          Continuar <span>↓</span>
        </a>
      </section>

      {/* 02 — Ponto de partida */}
      <section className="slide slide-paper" id="partida">
        <div className="slide-inner two-col">
          <div>
            <p className="slide-index">02 / PONTO DE PARTIDA</p>
            <h2>
              A Zetti já construiu um ecossistema forte.
              <em> O próximo passo são jornadas igualmente fortes.</em>
            </h2>
          </div>
          <div className="slide-copy">
            <p>
              Hoje, Tech, Automation, AI Suite e TechFin convivem dentro de uma
              narrativa integrada de marca.
            </p>
            <p>
              Essa amplitude fortalece o posicionamento da Zetti, mas também cria
              um novo desafio: visitantes com necessidades diferentes precisam
              encontrar caminhos específicos até a conversão.
            </p>
            <blockquote>
              A oportunidade não está em substituir o site atual. Está em criar
              uma camada complementar de páginas orientadas a campanhas, produtos
              e intenções comerciais específicas.
            </blockquote>
          </div>
        </div>
      </section>

      {/* 03 — A oportunidade */}
      <section className="slide slide-ink" id="oportunidade">
        <div className="slide-inner">
          <p className="slide-index light">03 / A OPORTUNIDADE</p>
          <h2 className="slide-wide">
            Uma marca integrada não precisa converter
            <em> todas as intenções pelo mesmo caminho.</em>
          </h2>
          <p className="bridge-label">Nossa proposta aproxima três pontos:</p>
          <div className="bridge-row" aria-label="Origem → Argumento → Conversão">
            <article>
              <small>01</small>
              <h3>Origem do interesse</h3>
            </article>
            <span aria-hidden="true">→</span>
            <article>
              <small>02</small>
              <h3>Argumento da solução</h3>
            </article>
            <span aria-hidden="true">→</span>
            <article>
              <small>03</small>
              <h3>Conversão</h3>
            </article>
          </div>
          <p className="slide-footnote">
            O objetivo é reduzir a distância entre “essa solução parece
            interessante” e “quero entender como isso se aplica à minha
            operação.”
          </p>
        </div>
      </section>

      {/* 04 — O projeto */}
      <section className="slide slide-yellow" id="projeto">
        <div className="slide-inner project-inner">
          <p className="slide-index">04 / O PROJETO</p>
          <p className="project-tag">Projeto-piloto</p>
          <h2>
            Landing Page Estratégica
            <br />
            de Conversão
          </h2>
          <p className="slide-lead">
            Vamos desenvolver uma primeira jornada direcionada a uma solução ou
            campanha prioritária definida junto à equipe Zetti.
          </p>
          <div className="project-promise">
            <p>
              A entrega será construída do zero, combinando estratégia,
              copywriting, design e desenvolvimento. Não partiremos de um
              template.
            </p>
            <blockquote>
              A página nascerá da pergunta: o que esse visitante precisa
              entender, acreditar e encontrar antes de avançar para uma conversa
              com a Zetti?
            </blockquote>
          </div>
        </div>
      </section>

      {/* 05 — O que vamos construir */}
      <section className="slide slide-paper" id="construir">
        <div className="slide-inner">
          <p className="slide-index">05 / O QUE VAMOS CONSTRUIR</p>
          <h2>
            Seis frentes.
            <em> Uma jornada.</em>
          </h2>
          <div className="build-grid">
            {deliverables.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Marketing + Comercial */}
      <section className="slide slide-green" id="comercial">
        <div className="slide-inner two-col">
          <div>
            <p className="slide-index light">06 / MARKETING + COMERCIAL</p>
            <h2>
              Pensada para o marketing.
              <em> Preparada para o comercial.</em>
            </h2>
            <p className="slide-lead cream-text">
              A página não termina no preenchimento do formulário. Vamos pensar
              também na qualidade da informação que chega ao time comercial.
            </p>
          </div>
          <div>
            <p className="bridge-label cream-text">Quando fizer sentido, o formulário poderá captar:</p>
            <ul className="check-list">
              {formFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
            <blockquote className="on-green">
              Equilibrar duas forças: não criar fricção desnecessária para o
              visitante e não entregar um lead sem contexto para o comercial.
            </blockquote>
          </div>
        </div>
      </section>

      {/* 07 — Mensuração */}
      <section className="slide slide-paper" id="mensuracao">
        <div className="slide-inner two-col">
          <div>
            <p className="slide-index">07 / MENSURAÇÃO</p>
            <h2>
              Mensuração
              <em> desde o lançamento.</em>
            </h2>
            <p className="slide-lead">
              A primeira página também funcionará como um ponto de aprendizado.
              Estruturaremos eventos essenciais para entender a jornada.
            </p>
            <blockquote>
              A página deixa de ser apenas uma entrega visual e passa a ser um
              ativo mensurável de aquisição.
            </blockquote>
          </div>
          <div className="event-grid">
            {trackingEvents.map((event, index) => (
              <article key={event}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{event}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Processo */}
      <section className="slide slide-ink" id="processo">
        <div className="slide-inner">
          <p className="slide-index light">08 / PROCESSO DE TRABALHO</p>
          <h2>
            Do kickoff
            <em> à publicação.</em>
          </h2>
          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Entregáveis */}
      <section className="slide slide-cream" id="entregaveis">
        <div className="slide-inner">
          <p className="slide-index">09 / ENTREGÁVEIS</p>
          <h2>
            Ao final do projeto,
            <em> a Zetti recebe:</em>
          </h2>
          <ul className="deliverable-list">
            {packageItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10 — Prazo */}
      <section className="slide slide-yellow" id="prazo">
        <div className="slide-inner timeline-inner">
          <p className="slide-index">10 / PRAZO</p>
          <p className="big-number">18–22</p>
          <h2>dias úteis</h2>
          <p className="slide-lead">
            O cronograma começa após o kickoff e recebimento dos acessos,
            materiais e informações necessárias. As etapas de validação com a
            Zetti serão incorporadas ao cronograma do projeto.
          </p>
        </div>
      </section>

      {/* 11 — Investimento */}
      <section className="slide slide-ink" id="investimento">
        <div className="slide-inner investment-inner">
          <p className="slide-index light">11 / INVESTIMENTO</p>
          <p className="project-tag light-tag">Projeto-piloto de conversão</p>
          <p className="price">
            R$ <b>7.800</b>
          </p>
          <p className="slide-lead cream-text">
            Incluindo estratégia, arquitetura de conversão, copywriting, UI
            Design, desenvolvimento, formulário, integrações essenciais,
            tracking, QA e publicação.
          </p>
          <div className="payment-box">
            <small>CONDIÇÃO DE PAGAMENTO</small>
            <div>
              <p>
                <b>50%</b> na aprovação do projeto
              </p>
              <p>
                <b>50%</b> na conclusão e aprovação para publicação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 — Escalabilidade */}
      <section className="slide slide-paper" id="escala">
        <div className="slide-inner two-col">
          <div>
            <p className="slide-index">12 / ESCALABILIDADE</p>
            <h2>
              Validamos uma jornada.
              <em> Depois, transformamos o aprendizado em sistema.</em>
            </h2>
            <p className="slide-lead">
              A primeira landing page será construída também como referência para
              futuras experiências da Zetti. A partir dela, novas páginas podem
              ser criadas para:
            </p>
            <div className="scale-price">
              <small>VALOR DE REFERÊNCIA · NOVAS LPs</small>
              <p>
                a partir de <b>R$ 3.500</b> por página
              </p>
              <span>
                Escopo definido conforme necessidade de nova estratégia, copy,
                funcionalidades ou integrações.
              </span>
            </div>
          </div>
          <ul className="scale-list">
            {scaleUses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 — Visão de futuro */}
      <section className="slide slide-green" id="futuro">
        <div className="slide-inner">
          <p className="slide-index light">13 / VISÃO DE FUTURO</p>
          <h2>
            O objetivo não é criar páginas isoladas.
            <em> É construir uma arquitetura de aquisição.</em>
          </h2>
          <p className="slide-lead cream-text">
            Progressivamente, cada intenção encontra a experiência mais adequada
            para avançar.
          </p>
          <div className="future-grid">
            {futureLenses.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — Próximo passo */}
      <section className="slide slide-cover slide-close" id="proximo">
        <div className="slide-bg-lines" aria-hidden="true" />
        <div className="slide-inner cover-inner">
          <p className="slide-kicker">
            <span>Próximo passo</span> Lâmina 14
          </p>
          <h2 className="close-title">
            Vamos transformar a primeira hipótese
            <br />
            <strong>em uma jornada real e mensurável.</strong>
          </h2>
          <p className="slide-lead">
            Começamos escolhendo uma solução prioritária, conectamos estratégia,
            comunicação, experiência e conversão e colocamos a página em
            operação. Depois, os dados mostram o próximo passo.
          </p>
          <a
            className="button dark whatsapp-cta"
            href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20proposta%20comercial%20Melive%20%2B%20Zetti."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-cta-label">
              <svg
                className="whatsapp-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Conversar sobre a proposta
            </span>
            <span aria-hidden="true">↗</span>
          </a>
          <div className="cover-brand close-brand">
            <img src="/melive-logo.png" alt="Melive" />
            <span aria-hidden="true">+</span>
            <b>Zetti</b>
          </div>
          <p className="close-tagline">
            Estratégia, experiência e conversão trabalhando na mesma direção.
          </p>
        </div>
      </section>

      <nav className="proposta-nav" aria-label="Navegação da proposta">
        <Link href="/">Diagnóstico</Link>
        <a href="#capa">Capa</a>
        <a href="#investimento">Investimento</a>
        <a href="#proximo">Próximo passo</a>
      </nav>
    </main>
  );
}
