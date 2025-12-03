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
