import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CLINIC_INFO } from "@shared/const";
import {
  ArrowRight,
  Brain,
  Briefcase,
  CheckCircle,
  ClipboardList,
  Gavel,
  MessageCircle,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export default function NR1() {
  const atuacao = [
    {
      icon: Brain,
      title: "Psicologia Clínica",
      description:
        "Saúde mental integral para todas as idades, unindo rigor técnico e acolhimento.",
    },
    {
      icon: Briefcase,
      title: "Psicologia Organizacional",
      description:
        "Leitura técnica dos fatores humanos que atravessam o trabalho e o clima da empresa.",
    },
    {
      icon: Gavel,
      title: "Psicologia Jurídica",
      description:
        "Experiência em laudos e pareceres técnicos com validade documental e pericial.",
    },
  ];

  const ferramentas = [
    {
      icon: ClipboardList,
      title: "Inventário de Riscos",
      description:
        "Levantamento técnico dos fatores psicossociais presentes em cada setor e função da empresa.",
    },
    {
      icon: ShieldCheck,
      title: "Plano de Ação",
      description:
        "Medidas preventivas estruturadas, com responsáveis, prazos e indicadores de acompanhamento.",
    },
  ];

  const valores = [
    {
      icon: Scale,
      title: "Conformidade",
      description:
        "A ausência de uma análise psicológica técnica no PGR pode tornar o documento vulnerável em auditorias ou perícias trabalhistas.",
    },
    {
      icon: TrendingUp,
      title: "Desempenho",
      description:
        "A gestão científica dos fatores psicossociais reduz custos ocultos com rotatividade e queda de produtividade.",
    },
    {
      icon: Users,
      title: "Diferencial",
      description:
        "A presença de um profissional da Psicologia assegura que as ações de saúde mental não sejam apenas pontuais, como palestras, mas sim estruturais.",
    },
  ];

  const etapas = [
    {
      title: "1. Diagnóstico Organizacional",
      description:
        "Aplicação de questionários validados, entrevistas e análise de indicadores como absenteísmo e rotatividade.",
    },
    {
      title: "2. Avaliação dos Riscos",
      description:
        "Identificação e mensuração de fatores como sobrecarga, assédio, burnout e clima organizacional.",
    },
    {
      title: "3. Laudo e Plano de Ação",
      description:
        "Elaboração de laudo técnico e plano de ação com medidas preventivas e corretivas para a empresa.",
    },
  ];

  const riscos = ["Estresse ocupacional", "Burnout", "Assédio", "Sobrecarga de trabalho"];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary mb-8 animate-in fade-in duration-700">
              <Briefcase className="h-4 w-4" />
              Para Empresas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Prevenção e intervenção de riscos psicossociais
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              Metodologia dinâmica para a segurança emocional corporativa, com a
              adequação da sua empresa à NR-1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-200">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-10 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Falar com a equipe
                </Button>
              </a>
              <Link href="/contato">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg w-full sm:w-auto">
                  Solicitar proposta
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Quem somos */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Quem conduz o projeto
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Localizada em {CLINIC_INFO.address.city}, a Personart nasceu com a missão de
              oferecer uma psicologia humanizada e ética. Atuamos com foco na saúde mental
              integral, unindo rigor técnico e acolhimento para todas as idades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {atuacao.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-none shadow-lg bg-card h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <blockquote className="max-w-4xl mx-auto mt-16 border-l-4 border-primary pl-8">
            <p className="text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
              &ldquo;Na aplicação da NR-1, risco psicossocial não se improvisa: identifica-se
              com rigor técnico e transforma-se em plano de ação estruturado pelas mãos de quem
              compreende saúde mental &mdash; o psicólogo.&rdquo;
            </p>
            <footer className="mt-4 font-semibold text-primary">{CLINIC_INFO.name}</footer>
          </blockquote>
        </div>
      </section>

      {/* O que muda na NR-1 */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                O que muda com a atualização da NR-1
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A atualização da norma inclui a identificação e a intervenção dos riscos
                psicossociais. A NR-1 utiliza o <strong className="text-foreground">GRO</strong>{" "}
                (Gerenciamento de Riscos Ocupacionais) como estratégia de gestão, enquanto o{" "}
                <strong className="text-foreground">PGR</strong> (Programa de Gerenciamento de
                Riscos) é a ferramenta prática para mapear e intervir nesses riscos.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Por meio de um Inventário de Riscos e de um Plano de Ação, o programa
                operacionaliza medidas preventivas que garantem a saúde emocional e o bem-estar
                no ambiente de trabalho.
              </p>
              <div className="flex flex-wrap gap-3">
                {riscos.map((risco) => (
                  <span
                    key={risco}
                    className="rounded-full bg-background px-4 py-2 text-sm font-medium text-muted-foreground border"
                  >
                    {risco}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {ferramentas.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-none shadow-xl bg-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-primary flex items-center gap-3">
                        <Icon className="h-6 w-6" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Valor estratégico */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Valor estratégico e segurança jurídica
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Muito além do cumprimento da norma, a gestão dos fatores psicossociais protege a
              empresa e as pessoas que a sustentam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-none shadow-lg bg-card h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como conduzimos */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Como conduzimos o projeto
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Um processo estruturado, do diagnóstico ao documento técnico que integra o PGR
                da sua empresa.
              </p>
              <div className="space-y-4">
                {[
                  "Questionários validados e entrevistas com os times",
                  "Análise de indicadores de absenteísmo e rotatividade",
                  "Laudo técnico assinado por psicólogo",
                  "Plano de ação com medidas preventivas e corretivas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-none shadow-xl bg-card overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Brain className="h-6 w-6" />
                  Etapas do trabalho
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {etapas.map((etapa) => (
                  <div key={etapa.title} className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card shadow-sm"></div>
                    <h4 className="font-bold text-lg mb-2 text-primary">{etapa.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{etapa.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Vamos conversar?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            A saúde mental sob a ótica da NR-1 é um componente indissociável da segurança do
            trabalho moderna. Fale com a nossa equipe e entenda como adequar a sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-10 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                {CLINIC_INFO.phone}
              </Button>
            </a>
            <Link href="/contato">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-10 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto"
              >
                Enviar mensagem
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
