import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params ? params.slug : null;

  // Dados dos posts (idealmente viriam de uma API ou arquivo compartilhado)
  const posts = [
    {
      slug: "importancia-psicologia-dia-a-dia",
      title: "A Importância da Psicologia no Dia a Dia",
      date: "28 Nov 2024",
      author: "Psi. Janaína Mendes",
      category: "Bem-estar",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          A saúde mental é um componente essencial do bem-estar geral. Muitas vezes, focamos apenas na saúde física, esquecendo que a mente e o corpo estão intrinsecamente conectados. Cuidar da mente não é apenas tratar doenças, mas cultivar hábitos que promovam equilíbrio e resiliência.
        </p>
        
        <h2 class="text-2xl font-bold text-primary mb-4 mt-8">O que é Saúde Mental?</h2>
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          Saúde mental inclui nosso bem-estar emocional, psicológico e social. Afeta como pensamos, sentimos e agimos. Também ajuda a determinar como lidamos com o estresse, nos relacionamos com os outros e fazemos escolhas. A saúde mental é importante em todas as fases da vida, desde a infância e adolescência até a idade adulta.
        </p>

        <h2 class="text-2xl font-bold text-primary mb-4 mt-8">Dicas para o Dia a Dia</h2>
        <ul class="list-disc pl-6 mb-6 space-y-3 text-lg text-muted-foreground">
          <li><strong>Pratique o autocuidado:</strong> Reserve um tempo para fazer coisas que você gosta.</li>
          <li><strong>Mantenha conexões sociais:</strong> Converse com amigos e familiares.</li>
          <li><strong>Exercite-se regularmente:</strong> A atividade física libera endorfinas que melhoram o humor.</li>
          <li><strong>Durma bem:</strong> O sono é fundamental para a regulação emocional.</li>
          <li><strong>Busque ajuda profissional:</strong> Não hesite em procurar um psicólogo se sentir necessidade.</li>
        </ul>

        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          Lembre-se: cuidar da sua saúde mental não é egoísmo, é uma necessidade. Pequenos passos diários podem fazer uma grande diferença na sua qualidade de vida.
        </p>
      `
    },
    {
      slug: "ansiedade-sintomas",
      title: "Ansiedade: Sintomas e Como Lidar",
      date: "25 Nov 2024",
      author: "Psi. Bruno Alexandre",
      category: "Saúde Mental",
      image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          A ansiedade é uma reação natural do corpo ao estresse, mas quando se torna excessiva e persistente, pode interferir na vida diária. É importante reconhecer os sinais e saber como gerenciá-los.
        </p>
        
        <h2 class="text-2xl font-bold text-primary mb-4 mt-8">Sintomas Comuns</h2>
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          Os sintomas podem variar de pessoa para pessoa, mas geralmente incluem:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-3 text-lg text-muted-foreground">
          <li>Preocupação excessiva e difícil de controlar.</li>
          <li>Inquietação ou sensação de estar "no limite".</li>
          <li>Fadiga e dificuldade de concentração.</li>
          <li>Irritabilidade e tensão muscular.</li>
          <li>Perturbações do sono.</li>
        </ul>

        <h2 class="text-2xl font-bold text-primary mb-4 mt-8">Estratégias de Enfrentamento</h2>
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          Existem várias técnicas que podem ajudar a reduzir a ansiedade, como a respiração diafragmática, a meditação mindfulness e a prática regular de exercícios físicos. No entanto, a terapia cognitivo-comportamental (TCC) é uma das abordagens mais eficazes para tratar transtornos de ansiedade.
        </p>
      `
    },
    {
      slug: "psicologia-infantil",
      title: "Psicologia Infantil: Entendendo o Desenvolvimento",
      date: "20 Nov 2024",
      author: "Psi. Stephanie Magon",
      category: "Infantil",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          A infância é uma fase crucial de desenvolvimento, onde as bases emocionais e sociais são formadas. A psicologia infantil busca compreender e apoiar as crianças em seus desafios e conquistas.
        </p>
        
        <h2 class="text-2xl font-bold text-primary mb-4 mt-8">Quando Procurar Ajuda?</h2>
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          Os pais devem ficar atentos a mudanças bruscas de comportamento, dificuldades escolares, isolamento social ou regressão em marcos de desenvolvimento (como voltar a fazer xixi na cama).
        </p>

        <h2 class="text-2xl font-bold text-primary mb-4 mt-8">O Papel da Terapia ABA</h2>
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
          Para crianças com transtornos do desenvolvimento, como o autismo, a Análise do Comportamento Aplicada (ABA) é uma intervenção baseada em evidências que ajuda a desenvolver habilidades sociais, comunicativas e de vida diária, promovendo maior autonomia e qualidade de vida.
        </p>
      `
    }
  ];

  // Encontrar o post correspondente ao slug
  const post = posts.find(p => p.slug === slug) || posts[0]; // Fallback para o primeiro post se não encontrar

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 text-white container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4 text-sm md:text-base font-medium">
              <span className="bg-primary px-3 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <User className="h-5 w-5" />
              <span>Por {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Button>
          </Link>

          <article 
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-secondary prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t mt-12 pt-8 flex justify-between items-center">
            <div className="text-muted-foreground font-medium">
              Gostou deste artigo?
            </div>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}