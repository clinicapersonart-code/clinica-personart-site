export const COOKIE_NAME = "personart_session";
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
export const AXIOS_TIMEOUT_MS = 30000;
export const NOT_ADMIN_ERR_MSG = "Você não tem permissão para acessar este recurso. Apenas administradores podem executar esta ação.";
export const UNAUTHED_ERR_MSG = "Você precisa estar autenticado para acessar este recurso.";

// Informações da clínica
export const CLINIC_INFO = {
  name: "Clínica Personart",
  tagline: "Transformando vidas com ciência, cuidado e bem-estar emocional.",
  phone: "(15) 3329-7084",
  whatsapp: "551533297084",
  email: "clinicapersonart@gmail.com",
  instagram: "https://instagram.com/clinicapersonart",
  address: {
    street: "R. Fernão Sales, 672 - Vila Hortência",
    city: "Sorocaba",
    state: "SP",
    zip: "18020-260"
  },
  social: {
    instagram: "https://instagram.com/clinicapersonart"
  },
  mission: "Oferecer psicoterapia humanizada para promover saúde mental e bem-estar.",
  vision: "Ser referência em psicoterapia, impactando positivamente a vida de nossos clientes.",
  values: "Compaixão, respeito, ética, profissionalismo e compromisso com a excelência."
};

// Serviços oferecidos
export const SERVICES = [
  {
    id: "terapia-individual",
    title: "Terapia Individual Presencial ou Online",
    description: "Atendimento personalizado para tratar ansiedade, depressão, estresse, relacionamentos, entre outros desafios.",
    icon: "user"
  },
  {
    id: "terapia-infantil",
    title: "Terapia Infantil",
    description: "Intervenção psicológica direcionada a crianças, com o objetivo de ajudá-las a enfrentar dificuldades emocionais, comportamentais ou sociais. Utiliza técnicas como jogos, desenhos, histórias e brincadeiras, adaptadas à idade e desenvolvimento da criança.",
    icon: "baby"
  },
  {
    id: "avaliacao-neuropsicologica",
    title: "Avaliação Neuropsicológica",
    description: "Investigação clínica minuciosa e de alto rigor técnico das funções cognitivas (memória, atenção, linguagem, etc.). Utilizamos protocolos validados cientificamente para diagnósticos precisos e detalhados, indo muito além de triagens superficiais.",
    icon: "brain"
  },
  {
    id: "terapia-aba",
    title: "Terapia ABA (Análise do Comportamento Aplicada)",
    description: "Intervenção baseada em evidências científicas para o desenvolvimento de habilidades e redução de comportamentos desafiadores, especialmente indicada para autismo e outros transtornos do desenvolvimento.",
    icon: "puzzle"
  },
  {
    id: "avaliacao-bariatrica",
    title: "Avaliação Psicológica para Cirurgia Bariátrica, Vasectomia e Laqueadura",
    description: "Avaliação psicológica obrigatória para procedimentos cirúrgicos. Verificamos se você está preparado emocionalmente, avaliamos motivações, saúde mental, adesão ao tratamento e rede de apoio. Processo inclui entrevista clínica, testes psicológicos e emissão de laudo técnico.",
    icon: "clipboard-check"
  },
  {
    id: "pericia-psicologica",
    title: "Perícia Psicológica",
    description: "Investigação técnica e científica das condições psicológicas para processos judiciais e extrajudiciais. Atuamos como peritos em varas criminais, cíveis, de família e trabalho, elaborando laudos, perícias e pareceres técnicos que servem como prova em processos.",
    icon: "scale"
  },
  {
    id: "avaliacao-nr1",
    title: "Avaliação dos Riscos Psicossociais da NR1",
    description: "Avaliação obrigatória para empresas conforme NR-1 do Ministério do Trabalho. Identificamos e avaliamos riscos psicossociais no ambiente de trabalho (sobrecarga, assédio, burnout, etc.), elaboramos laudo técnico e plano de ação para proteção da saúde mental dos colaboradores.",
    icon: "briefcase"
  }
];

// Constantes de erro
export const ADMIN_ERR_MSG = "Erro ao processar requisição de administrador.";

// Convênios
export const CONVENIOS = [
  { name: "FUNSERV", logo: "/convenios/funserv.png" },
  { name: "Gama Saúde", logo: "/convenios/gama.png" },
  { name: "Particular/Reembolso", logo: "/convenios/particular.png" },
  { name: "Doutor Saúde", logo: "/convenios/doutor-saude.png" },
  { name: "OSSEL Assistência", logo: "/convenios/ossel.png" }
];
