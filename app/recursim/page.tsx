import type { Metadata } from "next";
import { SlideKeyboardNav } from "../components/SlideKeyboardNav";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proposta RecurSIM — Melive",
  description:
    "POC de 90 dias para transformar tráfego qualificado em recursos pagos.",
};

const diagnosisAssets = [
  "Promessa clara e fácil de compreender",
  "Entrada pelo WhatsApp, sem outro aplicativo",
  "Análise inicial gratuita",
  "Preço acessível e transparente",
  "Explicação objetiva do funcionamento",
  "Depoimentos, FAQ e confiança",
  "Tags de mensuração das principais plataformas",
];

const partnershipQuestions = [
  "Quais públicos possuem maior intenção de compra?",
  "Quais pesquisas geram casos realmente elegíveis?",
  "Qual mensagem produz mais análises iniciadas?",
  "Qual oferta gera maior conversão em pagamento?",
  "Qual é o custo de aquisição de um cliente?",
  "Quais canais podem receber mais investimento?",
  "Quais ajustes de produto ou oferta vêm antes da escala?",
];

const funnel = [
  "Acesso ao site",
  "Clique para o WhatsApp",
  "Conversa iniciada",
  "Foto ou documento enviado",
  "Análise concluída",
  "Caso considerado elegível",
  "Pagamento iniciado",
  "Recurso adquirido",
  "Documento entregue",
  "Nova compra, indicação ou recompra",
];

const fronts = [
  {
    number: "01",
    title: "Captura de demanda",
    text: "Google para quem já pesquisa multa, defesa prévia e recurso administrativo.",
  },
  {
    number: "02",
    title: "Geração de demanda",
    text: "Conteúdos e anúncios para quem recebeu a multa e ainda não sabe se pode recorrer.",
  },
  {
    number: "03",
    title: "Recuperação",
    text: "Remarketing para quem acessou, conversou ou enviou a multa e não concluiu.",
  },
  {
    number: "04",
    title: "Demanda orgânica",
    text: "Páginas e conteúdos para as dúvidas mais pesquisadas pelos motoristas.",
  },
];

const googleQueries = [
  "Como recorrer de uma multa",
  "Defesa prévia de trânsito",
  "Recurso para JARI",
  "Multa durante a CNH provisória",
  "Multa com possível erro de notificação",
  "Conversão de multa em advertência",
  "Prazos e documentação",
];

const socialThemes = [
  "Nem toda multa possui argumento para recurso",
  "Como identificar possíveis erros em uma autuação",
  "Etapas de um recurso administrativo",
  "O que acontece depois que o usuário envia a multa",
  "Diferença entre uma IA genérica e uma solução especializada",
  "Por que análise não é garantia de deferimento",
];

const siteMoves = [
  "Mensagens diferentes no WhatsApp por origem de campanha",
  "Padronização de UTMs",
  "Ajustes de título, argumento e CTA",
  "Testes de oferta",
  "Reforço de confiança e transparência",
  "Conexão anúncio → página → conversa",
  "Eventos essenciais do funil",
  "Estrutura de remarketing",
  "Painel de acompanhamento",
];

const compliance = [
  "Revisão jurídica dos Termos de Uso",
  "Validação de cancelamento e arrependimento",
  "Padronização das alegações comerciais",
  "Revisão de depoimentos e autorizações",
  "Políticas de publicidade das plataformas",
  "Clareza sobre quais multas a RecurSIM pode analisar",
];

const pocMonths = [
  {
    month: "Mês 1",
    title: "Fundação",
    items: [
      "Levantamento dos dados",
      "Economia unitária",
      "Mapeamento do funil",
      "Mensuração",
      "Planejamento de mídia",
      "Palavras-chave",
      "Ajustes na página",
      "Campanhas e criativos",
    ],
  },
  {
    month: "Mês 2",
    title: "Validação",
    items: [
      "Ativação das campanhas",
      "Testes de público, palavra e mensagem",
      "Comparação de ofertas",
      "Fluxo para o WhatsApp",
      "Casos elegíveis e pagos",
      "Primeiro remarketing",
    ],
  },
  {
    month: "Mês 3",
    title: "Consolidação",
    items: [
      "Investimento nas melhores combinações",
      "Pausa do que não retorna",
      "Variações dos criativos vencedores",
      "Custo de aquisição",
      "Oportunidades de escala",
      "Plano do próximo ciclo",
    ],
  },
];

const deliverables = [
  "Estratégia de aquisição",
  "Planejamento de mídia",
  "Gestão de Google Ads e Meta Ads",
  "Pesquisa de palavras-chave",
  "Públicos e remarketing",
  "Copies para anúncios",
  "Direcionamento de criativos",
  "Até 6 peças estáticas por mês",
  "Até 4 roteiros mensais para vídeos curtos",
  "Otimizações pontuais na landing",
  "Mensuração básica e UTMs",
  "Dashboard de acompanhamento",
  "Reunião quinzenal de performance",
  "Relatório executivo mensal",
  "Relatório final da POC com recomendações de escala",
];

const metrics = [
  "Custo por clique qualificado",
  "Taxa de acesso ao WhatsApp",
  "Custo por conversa iniciada",
  "Taxa de envio da multa",
  "Custo por multa analisada",
  "Percentual de casos elegíveis",
  "Conversão de elegível em pagamento",
  "Custo por recurso pago",
  "Receita gerada",
  "Retorno sobre investimento em mídia",
  "Recompra e indicação",
];

const clientDuties = [
  "Acessos às contas de mídia e mensuração",
  "Acesso técnico ao site, quando necessário",
  "Dados de conversas, análises e pagamentos",
  "Informações de custos, margem e recompra",
  "Retorno sobre a qualidade dos casos",
  "Gravação de vídeos orientados pela Melive",
  "Aprovação das campanhas e materiais",
  "Suporte técnico para integrações",
];

const exclusions = [
  "Verba de mídia",
  "WhatsApp, CRM ou ferramentas externas",
  "Desenvolvimento estrutural da plataforma",
  "Integrações complexas de backend",
  "Produção audiovisual presencial",
  "Influenciadores",
  "Consultoria ou revisão jurídica",
  "Garantia de aprovação dos anúncios",
  "Garantia de volume específico de vendas",
];

const outcomes = [
  "Funil de aquisição estruturado",
  "Base real de custos e conversões",
  "Clareza sobre os públicos com maior potencial",
  "Mensagens e ofertas testadas",
  "Campanhas organizadas para gerar clientes",
  "Evidências para escalar, ajustar ou reposicionar",
  "Plano de crescimento baseado em dados",
];

export default function RecursimPage() {
  return (
    <main className="deck recursim">
      <SlideKeyboardNav />

      <section className="deck-slide deck-cover" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Proposta · 90 dias</span> RecurSIM + Melive
          </p>
          <h1>
            Aquisição com
            <br />
            <strong>validação de crescimento.</strong>
          </h1>
          <p className="hero-lead">
            Uma estratégia para transformar tráfego qualificado em análises
            iniciadas, casos elegíveis e recursos pagos.
          </p>
          <div className="deck-cover-meta">
            <article>
              <small>PRAZO</small>
              <b>90 dias</b>
            </article>
            <article>
              <small>MODELO</small>
              <b>POC</b>
            </article>
            <article>
              <small>NORTE</small>
              <b>Custo por recurso pago</b>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="contexto">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">01 / CONTEXTO</p>
            <h2>
              Uma solução simples
              <em> para um problema urgente.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <p>
              O usuário envia a foto ou o PDF de uma multa pelo WhatsApp, recebe
              uma análise gratuita e, quando existem argumentos aplicáveis, pode
              adquirir o recurso fundamentado no CTB e em jurisprudências.
            </p>
            <p>
              A experiência elimina etapas, reduz a complexidade e torna o
              acesso à informação mais rápido.
            </p>
            <blockquote>
              O desafio atual não está na existência da solução. Está em
              construir um processo previsível de aquisição de clientes.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="diagnostico">
        <div className="deck-inner">
          <p className="section-index light">02 / DIAGNÓSTICO</p>
          <h2>
            A base digital já é consistente.
            <em> Não começamos reconstruindo o site.</em>
          </h2>
          <ul className="deck-check">
            {diagnosisAssets.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            A principal oportunidade está em conectar aquisição, oferta,
            WhatsApp e pagamento em um único funil mensurável.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="desafio">
        <div className="deck-inner deck-question">
          <p className="section-index">03 / O DESAFIO REAL</p>
          <p className="deck-kicker">Produto de entrada R$ 39,90 · cupom no 1º recurso</p>
          <h2>
            Gerar cliques ou conversas
            <br />
            não significa gerar receita.
          </h2>
          <p className="hero-lead">
            Se as campanhas forem otimizadas só para visitas ou contatos, a
            RecurSIM pode aumentar o movimento sem descobrir se existe um modelo
            sustentável de aquisição.
          </p>
          <blockquote>
            Quanto custa conquistar um cliente que efetivamente compra um
            recurso?
          </blockquote>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="objetivo">
        <div className="deck-inner">
          <p className="section-index">04 / OBJETIVO DA PARCERIA</p>
          <h2>
            Validar, em 90 dias,
            <em> um modelo que aprende e vende.</em>
          </h2>
          <ol className="deck-questions">
            {partnershipQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="funil">
        <div className="deck-inner">
          <p className="section-index light">05 / O FUNIL</p>
          <h2>
            Da visita
            <em> ao recurso pago.</em>
          </h2>
          <ol className="deck-funnel">
            {funnel.map((item, index) => (
              <li key={item}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="deck-foot cream-text">
            O principal indicador não será só o custo por clique ou por
            conversa. Será o <strong>custo por recurso pago</strong>, com as
            taxas de cada etapa.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="frentes">
        <div className="deck-inner">
          <p className="section-index">06 / ESTRATÉGIA DE AQUISIÇÃO</p>
          <h2>
            Quatro frentes.
            <em> Um sistema.</em>
          </h2>
          <div className="deck-mosaic">
            {fronts.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="google">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index light">07 / GOOGLE</p>
            <h2>
              Primeiro canal
              <em> de validação.</em>
            </h2>
            <p className="hero-lead cream-text">
              Porque alcança quem já demonstrou intenção concreta. Prioridade:
              qualidade, não volume indiscriminado. Palavras negativas evitam
              pesquisas fora da solução ou casos que a plataforma ainda não
              atende.
            </p>
          </div>
          <ul className="deck-pills">
            {googleQueries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="social">
        <div className="deck-inner">
          <p className="section-index">08 / META, INSTAGRAM E CONTEÚDO</p>
          <h2>
            Confiança, processo
            <em> e recuperação.</em>
          </h2>
          <div className="deck-theme-grid">
            {socialThemes.map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
          <p className="deck-foot">
            TikTok entra depois dos primeiros aprendizados criativos e
            comerciais — sem dividir cedo demais um orçamento ainda em
            validação.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="oferta">
        <div className="deck-inner">
          <p className="section-index">09 / ESTRATÉGIA DE OFERTA</p>
          <h2>A oferta de mídia.</h2>
          <blockquote className="deck-offer">
            Envie sua multa e descubra gratuitamente se existem argumentos para
            um recurso. Só pague se houver um recurso a ser elaborado.
          </blockquote>
          <p>
            O cupom do primeiro recurso gratuito deve ser testado de forma
            controlada — campanhas específicas, indicações, recuperação,
            públicos estratégicos e testes com prazo limitado — para comparar
            gratuidade integral com análise gratuita + recurso pago.
          </p>
          <p className="deck-aside">
            Depois, ofertas como pacotes familiares, planos para motoristas
            profissionais e soluções para pequenas frotas podem aumentar a
            receita por cliente.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="otimizacoes">
        <div className="deck-inner">
          <p className="section-index">10 / SITE E WHATSAPP</p>
          <h2>
            Otimizações de aquisição.
            <em> Sem reconstruir tudo.</em>
          </h2>
          <ul className="deck-check two-col">
            {siteMoves.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            Eventos internos do sistema, checkout ou API do WhatsApp dependem
            da disponibilidade técnica da plataforma.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="prontidao">
        <div className="deck-inner">
          <p className="section-index light">11 / PRONTIDÃO PARA MÍDIA</p>
          <h2>
            Conformidade antes
            <em> de ampliar investimento.</em>
          </h2>
          <p className="hero-lead cream-text">
            Preservar em todas as campanhas: assessoria privada, sem vínculo com
            órgãos públicos e sem garantia de resultado do recurso.
          </p>
          <ul className="deck-check light">
            {compliance.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="poc">
        <div className="deck-inner">
          <p className="section-index">12 / POC · 90 DIAS</p>
          <h2>
            Fundação, validação,
            <em> consolidação.</em>
          </h2>
          <div className="deck-months">
            {pocMonths.map((month) => (
              <article key={month.month}>
                <small>{month.month}</small>
                <h3>{month.title}</h3>
                <ul>
                  {month.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="entregas">
        <div className="deck-inner">
          <p className="section-index light">13 / ENTREGAS DA MELIVE</p>
          <h2>
            O que a RecurSIM
            <em> recebe na POC.</em>
          </h2>
          <ul className="deck-check two-col light">
            {deliverables.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="indicadores">
        <div className="deck-inner">
          <p className="section-index">14 / INDICADORES</p>
          <h2>
            O norte é o
            <em> custo por recurso pago.</em>
          </h2>
          <div className="deck-metric-grid">
            {metrics.map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
          <p className="deck-foot">
            O teto aceitável de CAC será definido com a RecurSIM após o
            levantamento de margem e valor médio por cliente.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="responsabilidades">
        <div className="deck-inner">
          <p className="section-index">15 / RESPONSABILIDADES</p>
          <h2>
            O que a RecurSIM
            <em> precisa disponibilizar.</em>
          </h2>
          <ul className="deck-check two-col">
            {clientDuties.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="investimento">
        <div className="deck-inner">
          <p className="section-index light">16 / INVESTIMENTO</p>
          <h2>
            POC de aquisição
            <em> por 90 dias.</em>
          </h2>
          <div className="deck-price-row">
            <article>
              <small>MELIVE · MENSAL</small>
              <p>
                R$ <b>2.800</b>
              </p>
              <span>por mês</span>
            </article>
            <article>
              <small>MELIVE · TOTAL POC</small>
              <p>
                R$ <b>8.400</b>
              </p>
              <span>implantação e mensuração inclusas</span>
            </article>
            <article className="media-price">
              <small>MÍDIA · PLATAFORMAS</small>
              <p>
                R$ <b>2–3 mil</b>
              </p>
              <span>pago direto às plataformas · ajustável</span>
            </article>
          </div>
          <p className="deck-foot cream-text">
            Nos primeiros ciclos, a maior parte da verba concentra no Google,
            com uma parcela para testes e remarketing nas redes sociais.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="premissas">
        <div className="deck-inner">
          <p className="section-index">17 / PREMISSAS</p>
          <h2>
            O que não está
            <em> incluído.</em>
          </h2>
          <ul className="deck-check two-col">
            {exclusions.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            A Melive cuida de estratégia, implementação, gestão e otimização.
            Resultados também dependem da oferta, da plataforma e da conversão
            da operação.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cover deck-close" data-slide id="proximo">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Próximo passo</span> RecurSIM + Melive
          </p>
          <h2 className="close-title">
            Ao final dos 90 dias,
            <br />
            <strong>clareza para crescer.</strong>
          </h2>
          <ul className="deck-outcomes">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hero-lead">
            Reunião de alinhamento técnico e comercial para validar os dados
            disponíveis, confirmar o escopo da POC e definir a data de início.
          </p>
          <a
            className="button dark whatsapp-cta"
            href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20proposta%20RecurSIM%20%2B%20Melive."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-cta-label">Agendar alinhamento</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter caption="Proposta de aquisição e validação de crescimento • RecurSIM • 2026" />
    </main>
  );
}
