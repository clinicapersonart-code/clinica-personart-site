import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CLINIC_INFO } from "@shared/const";
import { Brain, Target, Eye } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Sobre a {CLINIC_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              {CLINIC_INFO.tagline}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-secondary/20 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/5 opacity-50"></div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group h-full">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Target className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CLINIC_INFO.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group h-full">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Eye className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CLINIC_INFO.vision}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group h-full">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Brain className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CLINIC_INFO.values}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nossa História */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative inline-block">
                    Nossa História
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-secondary rounded-full"></span>
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="leading-relaxed mb-6">
                    A Clínica Personart nasceu do desejo de oferecer um atendimento psicológico 
                    diferenciado, que coloca o indivíduo no centro do cuidado. Nosso nome reflete 
                    essa filosofia: "Person" (pessoa) + "Art" (arte), representando a arte de cuidar 
                    de cada pessoa de forma única e personalizada.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Desde o início, nossa missão tem sido promover a saúde mental e o bem-estar 
                    emocional através de uma abordagem humanizada e baseada em evidências científicas. 
                    Acreditamos que cada pessoa tem uma jornada única, e nosso papel é acompanhá-la 
                    nesse processo de autoconhecimento e transformação.
                  </p>

                  <p className="leading-relaxed">
                    Nossa equipe é formada por profissionais qualificados e comprometidos com a 
                    excelência no atendimento. Trabalhamos com a Terapia Cognitivo-Comportamental 
                    (TCC) e outras abordagens contemporâneas, sempre respeitando a individualidade 
                    de cada cliente.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/therapy-session-art.png" 
                    alt="Sessão de Terapia Artística" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no cuidado com a sua saúde mental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-none shadow-sm hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Atendimento Humanizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cada pessoa é única e merece um cuidado personalizado e acolhedor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-none shadow-sm hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Baseado em Evidências</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos técnicas e abordagens comprovadas cientificamente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-none shadow-sm hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Equipe Qualificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Profissionais especializados e em constante atualização.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-none shadow-sm hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Flexibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Atendimento presencial e online para sua comodidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
