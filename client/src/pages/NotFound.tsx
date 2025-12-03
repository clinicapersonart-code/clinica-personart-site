import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Página Não Encontrada</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto">
            Voltar para o Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
