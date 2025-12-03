import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CLINIC_INFO, SERVICES, CONVENIOS } from "@shared/const";
import { ArrowRight, Target, Eye, Users, Baby, User, Brain, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const iconMap: Record<string, any> = {
    user: User,
    baby: Baby,
    users: Users,
    brain: Brain,
    puzzle: Puzzle,
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {CLINIC_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                {CLINIC_INFO.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/agendar">
                  <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Agende sua Consulta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12 px-8 border-2 hover:bg-primary/5">
                    Conheça-nos
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-full bg-secondary/20 flex items-center justify-center relative">
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border border-primary/10 scale-110 animate-pulse duration-[3000ms]"></div>
                <div className="absolute inset-0 rounded-full border border-secondary/20 scale-125 animate-pulse duration-[4000ms]"></div>
                
                <div className="w-3/4 h-3/4 rounded-full border-4 border-primary/30 flex items-center justify-center bg-background/50 backdrop-blur-sm shadow-2xl">
                  <div className="w-2/3 h-2/3 rounded-full bg-primary/10 flex items-center justify-center p-8">
                    {/* Brain Icon Placeholder - replacing missing image with icon */}
                    <Brain className="w-full h-full text-primary/80 drop-shadow-md" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full pointer-events-none"></div>
      </section>

      {/* Sobre Nós - Missão, Visão, Valores */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conheça nossa missão, visão e valores que guiam nosso trabalho diário em busca do seu bem-estar.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: "Missão", icon: Target, text: CLINIC_INFO.mission },
              { title: "Visão", icon: Eye, text: CLINIC_INFO.vision },
              { title: "Valores", icon: Brain, text: CLINIC_INFO.values }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oferecemos atendimento personalizado e humanizado para todas as idades, com foco na sua saúde mental integral.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || User;
              return (
                <motion.div key={service.id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden group">
                    <div className="h-2 w-full bg-primary/0 group-hover:bg-primary transition-colors duration-300"></div>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-full bg-secondary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-16">
            <Link href="/servicos">
              <Button size="lg" variant="outline" className="border-2 px-8 h-12 text-lg hover:bg-primary hover:text-white transition-colors">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Convênios Atendidos
            </h2>
            <p className="text-lg text-muted-foreground">
              Trabalhamos com diversos convênios e também atendemos particular
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {CONVENIOS.map((convenio) => (
              <motion.div
                key={convenio.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full h-32 flex items-center justify-center p-6 border-2 rounded-xl hover:border-primary/50 hover:shadow-md transition-all bg-card group grayscale hover:grayscale-0 duration-300"
              >
                {/* Fallback to text if logo fails or is placeholder */}
                <span className="text-base font-semibold text-center text-muted-foreground group-hover:text-primary transition-colors">
                  {convenio.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pronto para Cuidar da Sua Saúde Mental?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Agende sua consulta hoje mesmo e dê o primeiro passo em direção ao bem-estar emocional com quem entende do assunto.
            </p>
            <Link href="/agendar">
              <Button size="lg" variant="secondary" className="text-primary font-bold text-lg h-14 px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Agendar Consulta Agora
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}