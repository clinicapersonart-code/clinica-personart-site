import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@shared/const";
import { User, Baby, Users, ArrowRight, CheckCircle, Brain, Puzzle, ClipboardCheck, Scale, Briefcase } from "lucide-react";

export default function Servicos() {
  const iconMap: Record<string, any> = {
    user: User,
    baby: Baby,
    users: Users,
    brain: Brain,
    puzzle: Puzzle,
    "clipboard-check": ClipboardCheck,
    scale: Scale,
    briefcase: Briefcase,
  };

  const serviceDetails = [
    {
      ...SERVICES[0], // Terapia Individual
      benefits: [
        "Atendimento personalizado e individual",
        "Modalidade presencial ou online",
        "Flexibilidade de horários",
        "Sigilo e confidencialidade garantidos",
        "Abordagem focada em resultados"
      ],
      steps: [
        {
          title: "1. Acolhimento Inicial",
          description: "Entendimento profundo das suas queixas, história de vida e objetivos pessoais em um ambiente seguro."
        },
        {
          title: "2. Planejamento Terapêutico",
          description: "Definição conjunta de metas claras e estratégias personalizadas para suas necessidades específicas."
        },
        {
          title: "3. Processo de Mudança",
          description: "Sessões regulares focadas no desenvolvimento de autoconhecimento e novas habilidades de enfrentamento."
        }
      ]
    },
    {
      ...SERVICES[1], // Terapia Infantil
      benefits: [
        "Técnicas lúdicas adaptadas à idade",
        "Ambiente acolhedor e seguro",
        "Acompanhamento do desenvolvimento emocional",
        "Orientação aos pais e responsáveis",
        "Intervenções comportamentais e cognitivas"
      ],
      steps: [
        {
          title: "1. Entrevista com os Pais",
          description: "Coleta detalhada da história de desenvolvimento da criança e compreensão das preocupações familiares."
        },
        {
          title: "2. Avaliação Lúdica",
          description: "Sessões iniciais com a criança utilizando brincadeiras para criar vínculo e compreender seu mundo interno."
        },
        {
          title: "3. Intervenção e Orientação",
          description: "Trabalho direto com a criança e sessões periódicas de orientação parental para suporte integral."
        }
      ]
    },
    {
      ...SERVICES[2], // Avaliação Neuropsicológica
      benefits: [
        "Mapeamento detalhado das funções cognitivas",
        "Identificação de potenciais e dificuldades",
        "Auxílio no diagnóstico diferencial",
        "Planejamento de reabilitação personalizado",
        "Relatório técnico completo e devolutiva"
      ],
      steps: [
        {
          title: "1. Anamnese Detalhada",
          description: "Entrevista inicial abrangente para mapear histórico clínico, escolar e queixas atuais."
        },
        {
          title: "2. Aplicação de Testes",
          description: "Sessões para aplicação de instrumentos padronizados que avaliam memória, atenção, linguagem e outras funções."
        },
        {
          title: "3. Devolutiva e Relatório",
          description: "Entrega de laudo técnico detalhado com resultados, conclusão diagnóstica e encaminhamentos necessários."
        }
      ]
    },
    {
      ...SERVICES[3], // Terapia ABA
      benefits: [
        "Ensino de novas habilidades",
        "Redução de comportamentos desafiadores",
        "Programas individualizados e intensivos",
        "Envolvimento da família no processo",
        "Foco na autonomia e qualidade de vida"
      ],
      steps: [
        {
          title: "1. Avaliação Comportamental",
          description: "Análise funcional dos comportamentos e identificação de barreiras e marcos do desenvolvimento."
        },
        {
          title: "2. Plano de Ensino Individualizado (PEI)",
          description: "Criação de um currículo personalizado com objetivos de curto, médio e longo prazo."
        },
        {
          title: "3. Intervenção e Análise de Dados",
          description: "Aplicação consistente dos programas com registro contínuo de dados para monitorar a evolução."
        }
      ]
    },
    {
      ...SERVICES[4], // Avaliação Bariátrica/Vasectomia/Laqueadura
      benefits: [
        "Avaliação obrigatória exigida por lei",
        "Entrevista clínica presencial",
        "Aplicação de testes psicológicos validados",
        "Emissão de laudo técnico",
        "Orientação pré-cirúrgica"
      ],
      steps: [
        {
          title: "1. Entrevista Clínica",
          description: "Avaliação da saúde mental, motivações, histórico de transtornos alimentares e rede de apoio familiar."
        },
        {
          title: "2. Avaliação Psicológica",
          description: "Aplicação de testes para avaliar estado emocional, adesão ao tratamento e compreensão do procedimento."
        },
        {
          title: "3. Laudo e Orientação",
          description: "Emissão de laudo técnico e sessões de aconselhamento pré-cirúrgico quando necessário."
        }
      ]
    },
    {
      ...SERVICES[5], // Perícia Psicológica
      benefits: [
        "Atuação em processos judiciais e extrajudiciais",
        "Laudos técnicos especializados",
        "Varas criminais, cíveis, família e trabalho",
        "Entrevistas e testes psicológicos forenses",
        "Pareceres técnicos fundamentados"
      ],
      steps: [
        {
          title: "1. Análise do Processo",
          description: "Revisão detalhada da documentação judicial e identificação dos quesitos a serem respondidos."
        },
        {
          title: "2. Avaliação Pericial",
          description: "Entrevistas clínicas, aplicação de testes psicológicos e vistorias quando necessário."
        },
        {
          title: "3. Elaboração do Laudo",
          description: "Redação de laudo pericial técnico com conclusões fundamentadas em evidências científicas."
        }
      ]
    },
    {
      ...SERVICES[6], // Avaliação NR1
      benefits: [
        "Conformidade com NR-1 do Ministério do Trabalho",
        "Identificação de riscos psicossociais",
        "Questionários validados (COPSOQ II)",
        "Laudo técnico completo",
        "Plano de ação para mitigação de riscos"
      ],
      steps: [
        {
          title: "1. Diagnóstico Organizacional",
          description: "Aplicação de questionários validados, entrevistas e análise de indicadores (absenteísmo, rotatividade)."
        },
        {
          title: "2. Avaliação dos Riscos",
          description: "Identificação e mensuração de fatores como sobrecarga, assédio, burnout e clima organizacional."
        },
        {
          title: "3. Laudo e Plano de Ação",
          description: "Elaboração de laudo técnico e plano de ação com medidas preventivas e corretivas para a empresa."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              Oferecemos atendimento psicológico especializado e humanizado para todas as idades
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => {
              const Icon = iconMap[service.icon] || User;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`${isEven ? "md:order-1" : "md:order-2"} animate-in slide-in-from-bottom-10 fade-in duration-700`}>
                    <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8 shadow-sm">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                            <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-muted-foreground text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${isEven ? "md:order-2" : "md:order-1"} animate-in slide-in-from-bottom-10 fade-in duration-700 delay-200`}>
                    <Card className="border-none shadow-xl bg-card overflow-hidden relative">
                      {/* Removed gradient background that caused low contrast issues */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                      
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-primary flex items-center gap-3">
                          <Brain className="h-6 w-6" />
                          Como Funciona?
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-8 pt-6">
                        {service.steps.map((step, i) => (
                          <div key={i} className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card shadow-sm"></div>
                            <h4 className="font-bold text-lg mb-2 text-primary">{step.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende sua primeira consulta e dê o primeiro passo em direção ao bem-estar emocional
          </p>
          <Link href="/agendar">
            <Button size="lg" className="h-14 px-10 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Agendar Consulta
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
