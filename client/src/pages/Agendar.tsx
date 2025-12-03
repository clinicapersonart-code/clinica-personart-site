import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { format } from "date-fns";
import { pt as ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const scheduleSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  service: z.string().min(1, "Selecione um serviço"),
  date: z.date(),
  time: z.string().min(1, "Selecione um horário"),
});

type ScheduleFormValues = z.infer<typeof scheduleSchema>;

export default function Agendar() {
  const [step, setStep] = useState(1);
  
  const form = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: new Date(),
      time: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setStep(2);
      toast.success("Solicitação de agendamento enviada com sucesso!");
    }, 1000);
  }

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Agende sua Consulta
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              Dê o primeiro passo para o seu bem-estar. Escolha o melhor horário para você.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {step === 1 ? (
            <Card className="border-none shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
              <div className="h-2 w-full bg-primary"></div>
              <CardHeader className="p-8 md:p-10 pb-0">
                <CardTitle className="text-2xl text-primary">Formulário de Agendamento</CardTitle>
                <CardDescription>Preencha seus dados e escolha o horário de sua preferência.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 md:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="font-semibold text-lg flex items-center gap-2 text-primary">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">1</span>
                          Seus Dados
                        </h3>
                        
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome Completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} className="h-11" />
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
                                <Input placeholder="seu@email.com" {...field} className="h-11" />
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
                              <FormLabel>Telefone / WhatsApp</FormLabel>
                              <FormControl>
                                <Input placeholder="(00) 00000-0000" {...field} className="h-11" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Serviço Desejado</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11">
                                    <SelectValue placeholder="Selecione um serviço" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="terapia-individual">Terapia Individual</SelectItem>
                                  <SelectItem value="terapia-infantil">Terapia Infantil</SelectItem>
                                  <SelectItem value="terapia-casal">Terapia de Casal</SelectItem>
                                  <SelectItem value="avaliacao">Avaliação Neuropsicológica</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-6">
                        <h3 className="font-semibold text-lg flex items-center gap-2 text-primary">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">2</span>
                          Data e Hora
                        </h3>

                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Data da Consulta</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal h-11",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP", { locale: ptBR })
                                      ) : (
                                        <span>Selecione uma data</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value instanceof Date ? field.value : undefined}
                                    onSelect={(date) => field.onChange(date)}
                                    disabled={(date) =>
                                      date < new Date() || date.getDay() === 0
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Horário Preferencial</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11">
                                    <SelectValue placeholder="Selecione um horário" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="bg-secondary/10 p-4 rounded-lg mt-8">
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-primary mt-0.5" />
                            <div className="text-sm text-muted-foreground">
                              <p className="font-medium text-primary mb-1">Importante:</p>
                              <p>Este é um pré-agendamento. Nossa equipe entrará em contato para confirmar a disponibilidade do horário escolhido.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px] h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                        Solicitar Agendamento
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-none shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-500 text-center py-16">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-in zoom-in duration-500 delay-200">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Solicitação Recebida!</h2>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-8">
                  Obrigado por escolher a Clínica Personart. Recebemos sua solicitação e entraremos em contato em breve pelo WhatsApp ou telefone para confirmar seu agendamento.
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => {
                    setStep(1);
                    form.reset();
                  }}
                >
                  Fazer novo agendamento
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}