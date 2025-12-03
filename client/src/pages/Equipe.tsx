import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CLINIC_INFO } from "@shared/const";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Equipe() {
  // Dados da equipe atualizados
  const team = [
    {
      name: "Psi. Janaína Mendes",
      role: "Psicóloga Clínica",
      crp: "", // CRP não fornecido, deixando vazio ou removendo se preferir
      bio: "Psicóloga com abordagem em Terapia Cognitiva Comportamental, com foco em autoestima e terapia com idosos.",
      image: "/_MG_8645.jpg", // Janaína (blusa branca)
      social: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Psi. Bruno Alexandre",
      role: "Psicólogo",
      crp: "",
      bio: "Psicólogo com abordagem em Terapia Cognitiva Comportamental e Pós-Graduando em PBE na Prática Clínica.",
      image: "/_MG_8524.jpg", // Bruno (homem)
      social: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Psi. Stephanie Magon",
      role: "Psicóloga Clínica e ABA",
      crp: "",
      bio: "Psicóloga especialista em Terapia Cognitiva Comportamental e em Análise do Comportamento Aplicada (ABA).",
      image: "/_MG_8520-2.jpg", // Stephanie (blusa bege, óculos)
      social: {
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Nossa Equipe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              Profissionais qualificados e dedicados ao seu bem-estar emocional
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-card">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                    {/* Removendo links sociais temporariamente se não houver URLs reais */}
                    {/* 
                    <a href={member.social.instagram} className="p-3 bg-white rounded-full text-primary hover:text-secondary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Instagram className="h-5 w-5" />
                    </a>
                    */}
                  </div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-secondary-foreground/80">{member.role}</CardDescription>
                  {member.crp && <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">CRP: {member.crp}</p>}
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-24 bg-secondary/10 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Junte-se à Nossa Equipe
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Estamos sempre em busca de profissionais apaixonados por psicologia e saúde mental. 
                Se você se identifica com nossos valores, envie seu currículo.
              </p>
              <a 
                href={`mailto:${CLINIC_INFO.email}`} 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Currículo
              </a>
            </div>
            
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
