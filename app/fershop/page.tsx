import type { Metadata } from "next";
import { SlideKeyboardNav } from "../components/SlideKeyboardNav";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Escopo estratégico Fershop — Melive",
  description:
    "Gestão de mídia paga para aumentar visitas à nova loja da Fershop em Campinas.",
};

const outcomes = [
  "Aumentar a descoberta da nova loja por pessoas com potencial real de compra em Campinas e região",
  "Gerar mais solicitações de rota, ligações, conversas no WhatsApp e visitas qualificadas",
  "Transformar categorias, marcas, estoque, atendimento e conveniência em motivos recorrentes de visita",
  "Criar uma base de mensuração que aproxime mídia, atendimento e venda no ponto físico",
];

const assets = [
  {
    title: "História desde 1990",
    text: "Confiança, conhecimento de categoria e presença consolidada na região.",
  },
  {
    title: "Amplitude de categorias",
    text: "Campanhas específicas para fixação, ferramentas, elétrica, hidráulica, pintura e acabamento.",
  },
  {
    title: "Atendimento consultivo",
    text: "Demonstração de ajuda prática para escolher produtos e resolver necessidades.",
  },
  {
    title: "Loja física e e-commerce",
    text: "Integração entre pesquisa, catálogo, contato e visita à unidade.",
  },
  {
    title: "Marcas reconhecidas",
    text: "Conteúdo de produto e campanhas cooperadas quando houver autorização e disponibilidade.",
  },
];

const audiences = [
  {
    title: "Profissionais de obra",
    need: "Reposição rápida, ferramenta adequada, disponibilidade e confiança.",
    action: "Variedade, marcas e atendimento. Direcionar para rota, ligação ou WhatsApp.",
  },
  {
    title: "Manutenção e empresas",
    need: "Compra recorrente, solução de imprevistos e agilidade operacional.",
    action: "Conveniência local, estoque e suporte para orçamento.",
  },
  {
    title: "Consumidor residencial",
    need: "Reparo, melhoria, instalação ou acabamento sem domínio técnico.",
    action: "Ajuda para escolher corretamente e resolver sem complicação.",
  },
  {
    title: "Hobbistas e ferramentas",
    need: "Descoberta de equipamentos, novidades e comparação entre opções.",
    action: "Demonstração, aplicação, benefício e visita para conhecer.",
  },
];

const journey = [
  {
    number: "01",
    title: "Descoberta",
    text: "Meta Ads apresenta a nova loja, as categorias e situações de uso para públicos locais.",
  },
  {
    number: "02",
    title: "Intenção",
    text: "Google Ads intercepta pesquisas por produto, categoria, marca, necessidade e loja próxima.",
  },
  {
    number: "03",
    title: "Decisão",
    text: "Anúncios e ativos locais facilitam rota, ligação, WhatsApp e consulta ao site.",
  },
  {
    number: "04",
    title: "Visita",
    text: "Oferta, disponibilidade, localização e atendimento reduzem a fricção para ir até a loja.",
  },
  {
    number: "05",
    title: "Aprendizado",
    text: "Dados de mídia e sinais da operação mostram quais campanhas geram procura e vendas mais qualificadas.",
  },
];

const googleFronts = [
  {
    title: "Pesquisa por categoria",
    text: "Capturar procura por famílias de produtos: ferramentas, parafusos, elétrica, hidráulica, pintura e acabamento.",
  },
  {
    title: "Pesquisa por necessidade",
    text: "Aparecer quando o cliente descreve um problema ou aplicação: reparo, instalação, item de fixação.",
  },
  {
    title: "Pesquisa por marca",
    text: "Converter demanda já especificada por linhas, modelos e marcas disponíveis.",
  },
  {
    title: "Pesquisa local",
    text: "Ser encontrado por proximidade: loja de ferramentas perto, ferragens em Campinas, rota e horário.",
  },
  {
    title: "Performance Max para loja",
    text: "Ampliar ações locais no Google, quando a conta estiver apta: rota, ligação, visita e Perfil da Empresa.",
  },
];

const googleDeliverables = [
  "Diagnóstico da conta, histórico, conversões, termos de pesquisa e estrutura existente",
  "Vinculação e revisão do Perfil da Empresa: localização, horários, fotos e ativos de local",
  "Pesquisa de palavras-chave, organização por intenção e inclusão contínua de termos negativos",
  "Campanhas, grupos, anúncios, extensões, mensagens e páginas de destino",
  "Ações locais: rota, ligação e site; visitas à loja quando a conta for elegível",
  "Ajustes de orçamento, lances, horários, dispositivos, geografia e ativos",
  "Leitura por categoria para identificar procura, eficiência e potencial comercial",
];

const metaCampaigns = [
  {
    title: "Presença local",
    text: "Apresentar a nova unidade: fachada, interior, endereço, horário, variedade e acesso.",
  },
  {
    title: "Categorias e soluções",
    text: "Associar a Fershop a ferramentas, fixação, elétrica, hidráulica, pintura e acabamento.",
  },
  {
    title: "Produtos e marcas",
    text: "Demonstrações, novidades, comparações, kits e linhas disponíveis.",
  },
  {
    title: "Ofertas e calendário",
    text: "Campanhas, eventos de loja, semanas temáticas e condições autorizadas.",
  },
  {
    title: "Remarketing",
    text: "Reimpactar quem visitou o site, interagiu ou iniciou contato — rota ou WhatsApp.",
  },
];

const metaDeliverables = [
  "Planejamento por objetivo, público, categoria e momento comercial",
  "Públicos geográficos, interesses, sinais comportamentais e remarketing",
  "Textos, chamadas e variações a partir dos materiais aprovados",
  "Adaptação dos ativos para feed, Stories e Reels dentro do escopo criativo",
  "Testes controlados de mensagem, formato, categoria e público",
  "Otimização por qualidade das ações, frequência, saturação e capacidade de atendimento",
];

const territories = [
  {
    title: "Encontre o item certo",
    text: "Amplitude para resolver diferentes etapas da compra: corredores, categorias, estoque e busca no site.",
  },
  {
    title: "Resolva com orientação",
    text: "Atendimento que entende a necessidade: equipe, balcão, demonstração e perguntas frequentes.",
  },
  {
    title: "Compre perto e com agilidade",
    text: "Unidade acessível: fachada, mapa, horário e acesso, quando confirmados.",
  },
  {
    title: "Escolha marcas confiáveis",
    text: "Produtos reconhecidos para trabalho, manutenção e casa: marcas autorizadas e aplicações.",
  },
  {
    title: "Tenha um motivo para voltar",
    text: "Novidades, eventos e campanhas: calendário, demonstrações, kits e ativações na loja.",
  },
];

const library = [
  "Fotos horizontais e verticais da fachada, entrada, corredores e categorias",
  "Vídeos curtos da loja, equipe, demonstrações e aplicações de produto",
  "Logotipo, identidade, condições comerciais e regras das marcas parceiras",
  "Lista de categorias prioritárias, produtos, campanhas e eventuais rupturas",
  "Endereço, horários, contatos e informações práticas revisados em todos os canais",
];

const plan = [
  {
    phase: "Preparação",
    time: "Semanas 1 e 2",
    text: "Acessos, mensuração, Perfil da Empresa, públicos, palavras-chave, ativos e calendário. Base técnica pronta para ir ao ar.",
  },
  {
    phase: "Aprendizado",
    time: "Dias 1 a 30",
    text: "Ativar pesquisa local, categorias prioritárias e presença regional na Meta. Identificar termos, públicos e mensagens com maior aderência.",
  },
  {
    phase: "Otimizar",
    time: "Dias 31 a 60",
    text: "Redistribuir verba, negativar buscas, ampliar vencedores e iniciar remarketing. Melhorar custo e qualidade das ações que aproximam da loja.",
  },
  {
    phase: "Escala",
    time: "Dias 61 a 90",
    text: "Expandir categorias e geografia com evidência, integrar calendário e medir venda offline. Rotina previsível de demanda local.",
  },
];

const measureLayers = [
  {
    title: "Negócio",
    text: "Vendas atribuídas, cupons no caixa, ticket e categorias vendidas.",
  },
  {
    title: "Visita e intenção",
    text: "Visitas à loja quando elegíveis, rota, ligações e WhatsApp.",
  },
  {
    title: "Demanda",
    text: "Termos de pesquisa, cliques por categoria, visitas ao site e páginas vistas.",
  },
  {
    title: "Comunicação",
    text: "Alcance local, frequência, visualizações, engajamento e taxa de clique.",
  },
];

const instruments = [
  "Google Analytics e Tag Manager para eventos prioritários",
  "Perfil da Empresa e ativos de local vinculados ao Google Ads",
  "Pixel da Meta e API de Conversões quando a estrutura permitir",
  "UTMs padronizadas em campanhas e links de WhatsApp",
  "Pergunta no caixa: como conheceu a nova loja?",
  "Código ou oferta identificável para ações específicas",
  "Registro mensal de categorias e vendas influenciadas, quando possível",
];

const meliveDuties = [
  "Planejamento, configuração técnica e funil de mídia",
  "Pesquisa de demanda, públicos e estrutura das campanhas",
  "Textos e adaptação dos materiais fornecidos",
  "Monitoramento, otimização, orçamento e testes",
  "Relatório mensal com leitura, aprendizados e recomendações",
];

const fershopDuties = [
  "Acessos às contas, ao site, ao Perfil da Empresa e aos ativos sociais",
  "Prioridades comerciais, estoque, margens, campanhas, datas e restrições",
  "Imagens e vídeos reais da loja, produtos e equipe",
  "Resposta a contatos e atualização de endereço, horários e canais",
  "Sinais do ponto físico, vendas influenciadas e qualidade dos contatos",
];

const included = [
  "Gestão de Google Ads e Meta Ads",
  "Planejamento, setup, acompanhamento, otimização e relatório",
  "Textos de anúncios e adaptações simples dos materiais",
  "Recomendações para páginas de destino, Perfil da Empresa e mensuração",
];

const excluded = [
  "Verba de mídia, licenças, ferramentas e custos das plataformas",
  "Produção fotográfica, captação de vídeo, motion e peças complexas",
  "Criação ou reconstrução de site, landing pages, e-commerce e integrações com ERP ou PDV",
  "Gestão diária de redes sociais, influenciadores, atendimento e ações presenciais",
];

const startConditions = [
  {
    title: "Contas de anúncio",
    text: "Acesso administrativo ao Google Ads, Meta Business e formas de pagamento válidas.",
  },
  {
    title: "Presença local",
    text: "Perfil da Empresa revisado: endereço, horário, telefone, fotos e localização aprovada.",
  },
  {
    title: "Mensuração",
    text: "Acesso ao site, Analytics, Tag Manager e possibilidade de instalar eventos.",
  },
  {
    title: "Atendimento",
    text: "WhatsApp e telefone operacionais, responsáveis definidos e tempo de resposta compatível.",
  },
  {
    title: "Calendário",
    text: "Categorias prioritárias, marcas autorizadas, estoque, campanhas e datas relevantes.",
  },
  {
    title: "Materiais",
    text: "Logotipo, identidade, fotos, vídeos e informações de produtos disponíveis para uso.",
  },
];

const decisions = [
  "Definir a verba mensal e o limite por plataforma",
  "Priorizar de três a cinco categorias para o primeiro ciclo",
  "Confirmar bairros, cidades próximas e áreas que já geram vendas",
  "Definir como rota, ligação, WhatsApp e venda no caixa serão registrados",
  "Reunir imagens, vídeos, marcas, ofertas e informações atualizadas da loja",
];

export default function FershopPage() {
  return (
    <main className="deck fershop">
      <SlideKeyboardNav />

      <section className="deck-slide deck-cover" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Escopo estratégico</span> Fershop + Melive
          </p>
          <h1>
            Gestão de mídia paga
            <br />
            <strong>para a nova loja.</strong>
          </h1>
          <p className="hero-lead">
            Plano para transformar a nova unidade em uma escolha recorrente para
            consumidores, profissionais e empresas da região de Campinas.
          </p>
          <div className="deck-cover-meta">
            <article>
              <small>OBJETIVO</small>
              <b>Fluxo qualificado</b>
            </article>
            <article>
              <small>PERÍODO</small>
              <b>90 dias</b>
            </article>
            <article>
              <small>UNIDADE</small>
              <b>Baden Powell, 447</b>
            </article>
          </div>
          <p className="deck-foot">
            Google Ads · Meta Ads · Ativação local · Campinas, SP · Outubro de
            2026
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="direcao">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">01 / DIREÇÃO ESTRATÉGICA</p>
            <h2>
              Depois da inauguração,
              <em> sustentar o fluxo.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <p>
              A inauguração apresentou o novo endereço. O próximo desafio é
              sustentar o fluxo depois do efeito de novidade: aparecer quando
              alguém precisa resolver uma compra e permanecer presente antes
              dessa necessidade surgir.
            </p>
            <p>
              Google Ads captura uma procura já formada por produtos, categorias
              e lojas próximas. Meta Ads constrói lembrança e apresenta
              variedade, atendimento e motivos concretos para visitar a unidade.
            </p>
            <blockquote>
              Os dois canais convergem para ações locais mensuráveis: solicitar
              rota, ligar, iniciar conversa no WhatsApp e comprar na loja.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="resultado">
        <div className="deck-inner">
          <p className="section-index">02 / RESULTADO ESPERADO</p>
          <h2>
            O que o trabalho
            <em> deve produzir.</em>
          </h2>
          <ul className="deck-check two-col">
            {outcomes.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="tese">
        <div className="deck-inner">
          <p className="section-index light">03 / TESE CENTRAL</p>
          <h2>
            Não competir só por preço.
            <em> Ser o lugar certo.</em>
          </h2>
          <p className="hero-lead cream-text">
            A vantagem da Fershop está em combinar variedade, marcas
            reconhecidas, orientação de compra e disponibilidade local. A mídia
            deve fazer a loja ser lembrada como o lugar onde o cliente encontra
            o item certo e recebe ajuda para concluir o serviço.
          </p>
          <div className="deck-mosaic">
            {assets.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="publicos">
        <div className="deck-inner">
          <p className="section-index">04 / PÚBLICOS E JORNADAS</p>
          <h2>
            Necessidades diferentes.
            <em> Mensagens diferentes.</em>
          </h2>
          <div className="deck-mosaic">
            {audiences.map((item) => (
              <article key={item.title}>
                <small>{item.title}</small>
                <h3>{item.need}</h3>
                <p>{item.action}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="jornada">
        <div className="deck-inner">
          <p className="section-index light">05 / JORNADA INTEGRADA</p>
          <h2>
            Da descoberta
            <em> ao aprendizado.</em>
          </h2>
          <ol className="deck-funnel">
            {journey.map((item) => (
              <li key={item.number}>
                <b>{item.number}</b>
                <span>
                  <strong>{item.title}.</strong> {item.text}
                </span>
              </li>
            ))}
          </ol>
          <p className="deck-foot cream-text">
            A geografia parte da unidade na Av. Baden Powell, 447. O raio não é
            regra fixa: amplia ou reduz conforme a qualidade das ações locais e
            das vendas atribuídas.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="google">
        <div className="deck-inner">
          <p className="section-index">06 / GOOGLE ADS</p>
          <h2>
            Captura de demanda
            <em> já formada.</em>
          </h2>
          <div className="deck-mosaic">
            {googleFronts.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="google-entregas">
        <div className="deck-inner">
          <p className="section-index">07 / GOOGLE · ENTREGAS</p>
          <h2>
            Conta, local
            <em> e leitura por categoria.</em>
          </h2>
          <ul className="deck-check two-col">
            {googleDeliverables.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            O site funciona como catálogo e prova de amplitude. O Perfil da
            Empresa reduz a distância entre pesquisa e visita: endereço, horário,
            telefone, avaliações e imagens precisam permanecer corretos.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="meta">
        <div className="deck-inner">
          <p className="section-index light">08 / META ADS</p>
          <h2>
            Presença local
            <em> antes da pesquisa.</em>
          </h2>
          <div className="deck-mosaic">
            {metaCampaigns.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="meta-entregas">
        <div className="deck-inner">
          <p className="section-index">09 / META · ENTREGAS</p>
          <h2>
            Parecer Fershop,
            <em> não varejo genérico.</em>
          </h2>
          <ul className="deck-check two-col">
            {metaDeliverables.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            Prioridade: loja, equipe, estoque, produtos e aplicações reais.
            Pessoas aparecem quando demonstram uso ou atendimento. Promoções
            entram como gatilho pontual, não como única proposta de valor.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="comunicacao">
        <div className="deck-inner">
          <p className="section-index">10 / SISTEMA DE COMUNICAÇÃO</p>
          <h2>
            Cinco territórios
            <em> recorrentes.</em>
          </h2>
          <div className="deck-mosaic">
            {territories.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="teste">
        <div className="deck-inner">
          <p className="section-index">11 / ATIVOS E MÉTODO DE TESTE</p>
          <h2>
            Uma hipótese.
            <em> Uma métrica de decisão.</em>
          </h2>
          <ul className="deck-check two-col">
            {library.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            Cada teste tem hipótese, controle e métrica. Exemplos: categoria,
            gancho, formato, público ou destino. Alcance, clique barato ou
            engajamento isolado não bastam para declarar um vencedor.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="plano">
        <div className="deck-inner">
          <p className="section-index light">12 / PLANO DE 90 DIAS</p>
          <h2>
            Preparar, aprender,
            <em> otimizar e escalar.</em>
          </h2>
          <div className="deck-months">
            {plan.map((item) => (
              <article key={item.phase}>
                <small>{item.time}</small>
                <h3>{item.phase}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="mensuracao">
        <div className="deck-inner">
          <p className="section-index">13 / MENSURAÇÃO</p>
          <h2>
            Aproximar mídia
            <em> e movimento de loja.</em>
          </h2>
          <div className="deck-mosaic">
            {measureLayers.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <ul className="deck-check two-col deck-block-gap">
            {instruments.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            Um anúncio vencedor é lido pelo conjunto oferta, público, criativo,
            momento e conversão. A decisão usa a etapa mais próxima do negócio
            que estiver disponível e confiável.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="rotina">
        <div className="deck-inner">
          <p className="section-index">14 / ROTINA E RESPONSABILIDADES</p>
          <h2>
            Melive opera.
            <em> Fershop alimenta a loja.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>MELIVE</small>
              <h3>Gestão</h3>
              <ul className="deck-mini-list">
                {meliveDuties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>FERSHOP</small>
              <h3>Operação</h3>
              <ul className="deck-mini-list">
                {fershopDuties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="deck-foot">
            Cadência: monitoramento recorrente, otimizações semanais, alinhamento
            mensal de calendário e estoque, e relatório mensal com hipóteses e
            decisões do próximo ciclo.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="escopo">
        <div className="deck-inner">
          <p className="section-index">15 / ESCOPO</p>
          <h2>
            O que entra
            <em> e o que fica de fora.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>INCLUÍDO</small>
              <h3>Escopo base</h3>
              <ul className="deck-mini-list">
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>SEPARADO</small>
              <h3>Fora deste escopo</h3>
              <ul className="deck-mini-list">
                {excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="condicoes">
        <div className="deck-inner">
          <p className="section-index">16 / CONDIÇÕES PARA INICIAR</p>
          <h2>
            Sem destino, mensuração
            <em> ou resposta, não ativa.</em>
          </h2>
          <div className="deck-mosaic">
            {startConditions.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cover deck-close" data-slide id="proximo">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Próximo passo</span> Fershop + Melive
          </p>
          <h2 className="close-title">
            Reunião de implantação
            <br />
            <strong>para fechar o plano.</strong>
          </h2>
          <ul className="deck-outcomes">
            {decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hero-lead">
            A partir dessa validação, a Melive entrega a arquitetura final das
            campanhas e inicia a preparação técnica.
          </p>
          <a
            className="button dark whatsapp-cta"
            href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20o%20escopo%20estrat%C3%A9gico%20da%20Fershop%20%2B%20Melive."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-cta-label">Conversar com a Melive</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter caption="Escopo estratégico de mídia paga • Fershop • Outubro de 2026" />
    </main>
  );
}
