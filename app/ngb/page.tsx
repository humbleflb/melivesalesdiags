import type { Metadata } from "next";
import { SlideKeyboardNav } from "../components/SlideKeyboardNav";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proposta NGB Arquitetura — Melive",
  description:
    "Novo site institucional, portfólio autônomo e estratégia de aquisição digital para a NGB Arquitetura.",
};

const objectives = [
  {
    number: "01",
    title: "Reposicionar a presença digital",
    text: "Traduzir a ideia de que menos é mais em uma experiência visual sóbria, contemporânea e coerente com a arquitetura.",
  },
  {
    number: "02",
    title: "Organizar serviços e projetos",
    text: "Dar clareza às diferentes frentes de atuação da NGB e permitir que cada projeto seja apresentado com contexto próprio.",
  },
  {
    number: "03",
    title: "Criar autonomia",
    text: "Disponibilizar um acesso restrito para cadastro de imagens, título e descrição, atualizando o portfólio sem intervenção técnica.",
  },
  {
    number: "04",
    title: "Gerar oportunidades",
    text: "Preparar páginas adequadas para campanhas de Google Ads, mensuração de contatos e evolução contínua da comunicação.",
  },
  {
    number: "05",
    title: "Ampliar a encontrabilidade",
    text: "Aplicar fundamentos técnicos de SEO e GEO para melhorar a leitura do site por buscadores tradicionais e sistemas de IA.",
  },
];

const sitePages = [
  "Página inicial com posicionamento, serviços, projetos selecionados e chamadas para contato",
  "Página institucional do escritório, abordagem e diferenciais",
  "Páginas de serviços para contextualizar cada modalidade e direcionar campanhas",
  "Portfólio geral com organização visual dos projetos publicados",
  "Página individual por projeto, com galeria, título e descrição",
  "Página de contato com formulário, dados de atendimento e atalhos",
  "Páginas essenciais de privacidade e tratamento de dados",
];

const cmsFeatures = [
  "Cadastro de título do projeto",
  "Envio e ordenação das imagens",
  "Inclusão da descrição do projeto",
  "Associação a uma categoria ou tipo de serviço, quando aplicável",
  "Edição ou retirada de projetos já publicados",
];

const techDeliverables = [
  "Desenvolvimento e publicação do site em produção",
  "Configuração responsiva, certificado SSL e formulários de contato",
  "Configuração de métricas essenciais e eventos de conversão",
  "Treinamento de entrega para uso do painel de portfólio",
  "Até duas rodadas consolidadas de ajustes antes da publicação",
];

const seoItems = [
  "Endereços de página claros e estrutura lógica de navegação",
  "Títulos, descrições e hierarquia de conteúdo por página principal",
  "Otimização básica de imagens, textos alternativos, sitemap e indexação",
  "Configuração para acompanhamento em ferramentas de busca e análise",
];

const geoItems = [
  "Páginas específicas e semanticamente claras para cada serviço prioritário",
  "Descrições objetivas dos projetos, com contexto de especialidade",
  "Dados estruturados aplicáveis ao escritório, serviços e conteúdo",
  "Perguntas e respostas relevantes quando contribuírem para a decisão",
  "Coerência entre nome, localização, serviços e canais oficiais",
];

const adsFronts = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Análise dos serviços prioritários, regiões atendidas, diferenciais e estrutura atual da conta, quando existente.",
  },
  {
    number: "02",
    title: "Planejamento",
    text: "Definição de campanhas, grupos de anúncios, palavras-chave, termos negativos e páginas de destino.",
  },
  {
    number: "03",
    title: "Segmentação",
    text: "Configuração geográfica e de agenda conforme o público, a capacidade de atendimento e os objetivos comerciais.",
  },
  {
    number: "04",
    title: "Implementação",
    text: "Criação dos anúncios de pesquisa, extensões, parâmetros de acompanhamento e eventos de conversão.",
  },
  {
    number: "05",
    title: "Otimização",
    text: "Ajustes recorrentes de palavras-chave, lances, orçamento, anúncios e páginas de destino com base nos dados.",
  },
  {
    number: "06",
    title: "Acompanhamento",
    text: "Relatório mensal objetivo com investimento, alcance, cliques, contatos e aprendizados prioritários.",
  },
];

const adsPremises = [
  "O orçamento de mídia não está incluído na mensalidade e será pago diretamente pela NGB à plataforma",
  "A ativação das campanhas ocorrerá após a publicação das páginas necessárias e a configuração da mensuração",
  "A mensalidade contempla a gestão de Google Ads; outros canais ou novas páginas serão orçados separadamente",
  "Resultados dependem de investimento, demanda regional, concorrência, oferta e atendimento — sem garantia de volume",
];

const exclusions = [
  "Investimento de mídia nas plataformas de anúncios",
  "Taxas anuais de domínio, hospedagem ou serviços de terceiros",
  "Produção de fotografias, vídeos, maquetes, renders ou textos técnicos extensos",
  "Migração de e-mails, integrações não descritas ou manutenção evolutiva após a entrega",
];

const timeline = [
  {
    phase: "Etapa 1",
    title: "Imersão e arquitetura",
    time: "Semana 1",
    text: "Organização de serviços, páginas, referências e materiais.",
  },
  {
    phase: "Etapa 2",
    title: "Direção visual",
    time: "Semanas 1 e 2",
    text: "Proposta visual e validação da experiência principal.",
  },
  {
    phase: "Etapa 3",
    title: "Desenvolvimento",
    time: "Semanas 2 a 4",
    text: "Construção das páginas e do painel de portfólio.",
  },
  {
    phase: "Etapa 4",
    title: "Conteúdo e testes",
    time: "Semanas 4 e 5",
    text: "Subida inicial, revisão responsiva, domínio e mensuração.",
  },
  {
    phase: "Etapa 5",
    title: "Publicação e mídia",
    time: "Após aprovação",
    text: "Site no ar e ativação das campanhas de Google Ads.",
  },
];

const ngbDuties = [
  "Enviar logotipo, textos, imagens, informações de serviços, dados de contato e projetos selecionados",
  "Fornecer ou viabilizar acessos a domínio, hospedagem, análise e conta de anúncios quando necessário",
  "Consolidar devolutivas e aprovações dentro dos prazos acordados",
  "Garantir autorização de uso dos materiais e correção das informações técnicas publicadas",
];

const meliveDuties = [
  "Conduzir estratégia, design, desenvolvimento, configuração técnica e publicação do site",
  "Preservar a titularidade dos ativos em nome da NGB sempre que a plataforma permitir",
  "Configurar e administrar as campanhas contratadas, com resultados e recomendações",
  "Entregar o acesso ao painel e orientar a equipe responsável pelo portfólio",
];

const nextSteps = [
  "Confirmar por escrito a opção de pagamento escolhida",
  "Realizar o pagamento da primeira parcela",
  "Agendar a reunião de abertura e organizar os acessos e materiais iniciais",
];

export default function NgbPage() {
  return (
    <main className="deck ngb">
      <SlideKeyboardNav />

      <section className="deck-slide deck-cover" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Proposta comercial</span> NGB Arquitetura + Melive
          </p>
          <h1>
            Novo site e estratégia
            <br />
            <strong>de aquisição digital.</strong>
          </h1>
          <p className="hero-lead">
            Uma presença digital mais clara, atual e independente para
            apresentar projetos, organizar os serviços do escritório e
            transformar campanhas de busca em oportunidades comerciais.
          </p>
          <div className="deck-cover-meta">
            <article>
              <small>DATA</small>
              <b>21 out 2026</b>
            </article>
            <article>
              <small>VALIDADE</small>
              <b>10 dias</b>
            </article>
            <article>
              <small>PRAZO SITE</small>
              <b>4–5 semanas</b>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="contexto">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">01 / O PONTO DE PARTIDA</p>
            <h2>
              O site atual deixou de
              <em> representar a NGB.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <p>
              Além da estética já não corresponder ao posicionamento desejado, a
              estrutura apresenta problemas de navegação, como links quebrados, e
              limita o uso do site como destino para campanhas de tráfego pago.
            </p>
            <p>
              Propomos substituir essa estrutura por um site institucional
              completo, minimalista e orientado a portfólio — com páginas
              próprias para os serviços, navegação objetiva e um painel simples
              para a equipe publicar projetos sem depender de agência.
            </p>
            <blockquote>
              A entrega será conectada a uma estratégia de aquisição por Google
              Ads e a fundamentos de GEO, para tornar o conteúdo mais
              compreensível também por mecanismos de busca baseados em IA.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="objetivos">
        <div className="deck-inner">
          <p className="section-index light">02 / OBJETIVOS DO PROJETO</p>
          <h2>
            Cinco resultados
            <em> esperados.</em>
          </h2>
          <div className="deck-mosaic">
            {objectives.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="escopo">
        <div className="deck-inner">
          <p className="section-index">03 / ESCOPO DO NOVO SITE</p>
          <h2>
            Ambientes previstos.
            <em> Arquitetura validada com a NGB.</em>
          </h2>
          <ul className="deck-check two-col">
            {sitePages.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            A arquitetura final de páginas será validada após a organização dos
            materiais enviados pela NGB.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="visual">
        <div className="deck-inner deck-question">
          <p className="section-index">04 / DIREÇÃO VISUAL</p>
          <h2>
            Minimalista, editorial
            <br />
            e centrada nas imagens.
          </h2>
          <p className="hero-lead">
            Tipografia bem resolvida, uso intencional de espaços, protagonismo
            das imagens e poucos elementos concorrendo pela atenção. O projeto
            será responsivo para computador, tablet e celular.
          </p>
          <blockquote>
            Menos é mais — traduzido em uma experiência sóbria, contemporânea e
            coerente com a arquitetura da NGB.
          </blockquote>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="autonomia">
        <div className="deck-inner">
          <p className="section-index">05 / PUBLICAÇÃO AUTÔNOMA</p>
          <h2>
            Painel para a NGB
            <em> atualizar o portfólio.</em>
          </h2>
          <p className="hero-lead">
            A NGB receberá um link de acesso restrito. Por esse ambiente, será
            possível cadastrar um novo projeto preenchendo as informações
            combinadas e enviando as imagens. Após a publicação, o conteúdo
            aparecerá automaticamente no portfólio e em sua página individual.
          </p>
          <ul className="deck-check two-col">
            {cmsFeatures.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="entregas">
        <div className="deck-inner">
          <p className="section-index light">06 / ENTREGAS TÉCNICAS</p>
          <h2>
            Do desenvolvimento
            <em> à publicação.</em>
          </h2>
          <ul className="deck-check light two-col">
            {techDeliverables.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="dominio">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">07 / DOMÍNIO E HOSPEDAGEM</p>
            <h2>
              Registro, DNS, SSL
              <em> e publicação.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <p>
              A Melive conduzirá o registro do novo domínio .com.br, a
              configuração de DNS, a preparação da hospedagem, a ativação do SSL
              e a publicação do site.
            </p>
            <p>
              O domínio deverá ser registrado em nome da NGB Arquitetura,
              preservando a titularidade do ativo. Caso a NGB disponibilize o
              acesso ao domínio .com existente, também poderemos configurar o
              redirecionamento para o novo endereço.
            </p>
            <blockquote>
              Custos de registradores, hospedagem ou outros fornecedores não
              integram os honorários desta proposta. Migração de contas de
              e-mail não está incluída.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="seo">
        <div className="deck-inner">
          <p className="section-index">08 / SEO</p>
          <h2>
            Fundamentos técnicos
            <em> de encontrabilidade.</em>
          </h2>
          <ul className="deck-check two-col">
            {seoItems.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="geo">
        <div className="deck-inner">
          <p className="section-index light">09 / GEO · MECANISMOS DE IA</p>
          <h2>
            Conteúdo compreensível
            <em> também por sistemas generativos.</em>
          </h2>
          <p className="hero-lead cream-text">
            GEO é a organização do conteúdo para que mecanismos generativos
            compreendam a empresa, seus serviços, sua área de atuação e as
            evidências apresentadas no site.
          </p>
          <ul className="deck-check light two-col">
            {geoItems.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot cream-text">
            SEO e GEO aumentam a capacidade de interpretação e descoberta do
            site, mas não representam garantia de posição, citação ou volume de
            acessos.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="ads">
        <div className="deck-inner">
          <p className="section-index">10 / GESTÃO DE TRÁFEGO PAGO</p>
          <h2>
            Google Ads como
            <em> canal principal.</em>
          </h2>
          <p className="hero-lead">
            Aproveitando buscas de pessoas que já demonstram intenção
            relacionada aos serviços oferecidos pela NGB Arquitetura.
          </p>
          <div className="deck-mosaic">
            {adsFronts.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="premissas">
        <div className="deck-inner">
          <p className="section-index">11 / PREMISSAS DA GESTÃO</p>
          <h2>
            O que precisa estar
            <em> claro antes de ativar.</em>
          </h2>
          <ul className="deck-check two-col">
            {adsPremises.map((item, index) => (
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
          <p className="section-index light">12 / INVESTIMENTO</p>
          <h2>
            Site + primeiro mês
            <em> de gestão.</em>
          </h2>
          <div className="deck-price-row">
            <article>
              <small>DESENVOLVIMENTO · ÚNICO</small>
              <p>
                R$ <b>1.800</b>
              </p>
              <span>novo site institucional</span>
            </article>
            <article>
              <small>GOOGLE ADS · 1º MÊS</small>
              <p>
                R$ <b>400</b>
              </p>
              <span>gestão promocional</span>
            </article>
            <article className="media-price">
              <small>TOTAL INICIAL</small>
              <p>
                R$ <b>2.200</b>
              </p>
              <span>site + primeiro mês</span>
            </article>
          </div>
          <p className="deck-foot cream-text">
            A partir do segundo mês: R$ 400/mês de gestão. Valor padrão do
            serviço: R$ 900 mensais — condição especial de R$ 500 de redução por
            mês para este projeto.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="pagamento">
        <div className="deck-inner">
          <p className="section-index">13 / FORMAS DE PAGAMENTO</p>
          <h2>
            Duas opções para
            <em> o valor inicial.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>OPÇÃO A</small>
              <h3>Três parcelas</h3>
              <p>
                Sem acréscimo, com vencimentos na assinatura, na aprovação do
                layout e na publicação do site.
              </p>
            </article>
            <article>
              <small>OPÇÃO B</small>
              <h3>50% + 50%</h3>
              <p>
                Cinquenta por cento na assinatura e cinquenta por cento na
                entrega — duas parcelas de R$ 1.100.
              </p>
            </article>
          </div>
          <p className="deck-foot">
            A mensalidade de R$ 400 passa a ser cobrada separadamente a partir
            do segundo mês de gestão. O primeiro mês começa na data de ativação
            das campanhas.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="exclusoes">
        <div className="deck-inner">
          <p className="section-index">14 / O QUE NÃO ESTÁ INCLUÍDO</p>
          <h2>
            Premissas de
            <em> escopo.</em>
          </h2>
          <ul className="deck-check two-col">
            {exclusions.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="cronograma">
        <div className="deck-inner">
          <p className="section-index">15 / CRONOGRAMA</p>
          <h2>
            Quatro a cinco semanas
            <em> após materiais e acessos.</em>
          </h2>
          <div className="deck-months">
            {timeline.map((item) => (
              <article key={item.phase}>
                <small>
                  {item.phase} · {item.time}
                </small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="deck-foot">
            O calendário poderá ser revisto se houver atraso no envio de
            conteúdo ou nas devolutivas de aprovação.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="responsabilidades">
        <div className="deck-inner">
          <p className="section-index">16 / RESPONSABILIDADES</p>
          <h2>
            NGB e Melive
            <em> lado a lado.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>NGB ARQUITETURA</small>
              <h3>Materiais e acessos</h3>
              <ul className="deck-mini-list">
                {ngbDuties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>MELIVE</small>
              <h3>Estratégia e execução</h3>
              <ul className="deck-mini-list">
                {meliveDuties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cover deck-close" data-slide id="proximo">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Próximos passos</span> NGB Arquitetura + Melive
          </p>
          <h2 className="close-title">
            Aceite, primeira parcela
            <br />
            <strong>e reunião de abertura.</strong>
          </h2>
          <p className="hero-lead">
            O aceite desta proposta confirma a concordância com o escopo, os
            valores, as premissas e as responsabilidades. O início do projeto
            ocorre após a confirmação da primeira parcela e o agendamento da
            reunião de abertura.
          </p>
          <ul className="deck-outcomes">
            {nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="button dark whatsapp-cta"
            href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20proposta%20NGB%20Arquitetura%20%2B%20Melive."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-cta-label">Conversar com a Melive</span>
            <span aria-hidden="true">↗</span>
          </a>
          <p className="deck-foot deck-block-gap">
            Proposta válida por 10 dias corridos · 21 de outubro de 2026
          </p>
        </div>
      </section>

      <SiteFooter caption="Proposta comercial • NGB Arquitetura • Outubro de 2026" />
    </main>
  );
}
