import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CLINIC_INFO } from "@shared/const";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contato() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              Estamos aqui para ouvir você. Tire suas dúvidas ou agende uma visita.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12 animate-in slide-in-from-left-10 fade-in duration-700">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Informações de Contato</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Sinta-se à vontade para entrar em contato conosco pelos canais abaixo ou visite nossa clínica pessoalmente.
                </p>
              </div>

              <div className="grid gap-8">
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Endereço</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {CLINIC_INFO.address.street}<br />
                        {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}<br />
                        CEP: {CLINIC_INFO.address.zip}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Telefone & WhatsApp</h3>
                      <p className="text-muted-foreground leading-relaxed mb-1">
                        <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-primary transition-colors">
                          {CLINIC_INFO.phone}
                        </a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        <a 
                          href={`https://wa.me/${CLINIC_INFO.whatsapp}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline"
                        >
                          Enviar mensagem no WhatsApp
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-primary transition-colors">
                          {CLINIC_INFO.email}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Horário de Atendimento</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Segunda a Sexta: 08:00 - 20:00<br />
                        Sábado: 08:00 - 13:00
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in slide-in-from-right-10 fade-in duration-700 delay-200">
              <Card className="border-none shadow-xl bg-white overflow-hidden">
                <div className="h-2 w-full bg-primary"></div>
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome" {...field} className="h-12 bg-background/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} className="h-12 bg-background/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} className="h-12 bg-background/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Como podemos ajudar?" 
                                className="min-h-[150px] bg-background/50 resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                        Enviar Mensagem
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.66987654321!2d-47.456789!3d-23.501234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzA0LjQiUyA0N8KwMjcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da Clínica"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
}
