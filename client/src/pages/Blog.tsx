import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      slug: "importancia-psicologia-dia-a-dia",
      title: "A Importância da Psicologia no Dia a Dia",
      excerpt: "Descubra como o acompanhamento psicológico pode transformar sua qualidade de vida, autoconhecimento e bem-estar emocional.",
      date: "28 Nov 2024",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop",
      category: "Bem-estar",
      author: "Psi. Janaína Mendes"
    },
    {
      id: 2,
      slug: "ansiedade-sintomas",
      title: "Ansiedade: Sintomas e Como Lidar",
      excerpt: "Entenda os sinais da ansiedade e conheça estratégias eficazes para gerenciá-la no cotidiano, com uma abordagem prática.",
      date: "25 Nov 2024",
      image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=600&auto=format&fit=crop",
      category: "Saúde Mental",
      author: "Psi. Bruno Alexandre"
    },
    {
      id: 3,
      slug: "psicologia-infantil",
      title: "Psicologia Infantil: Entendendo o Desenvolvimento",
      excerpt: "Como a psicoterapia e a análise do comportamento podem ajudar no desenvolvimento emocional e social das crianças.",
      date: "20 Nov 2024",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
      category: "Infantil",
      author: "Psi. Stephanie Magon"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
              Blog Personart
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
              Artigos, dicas e novidades sobre saúde mental e bem-estar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-card flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider z-10">
                      {post.category}
                    </div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/80 mt-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="text-base line-clamp-3 mb-6">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Ler artigo completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
