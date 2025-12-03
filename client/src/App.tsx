import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Servicos from "@/pages/Servicos";
import Equipe from "@/pages/Equipe";
import Contato from "@/pages/Contato";
import Agendar from "@/pages/Agendar";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/contato" component={Contato} />
        <Route path="/agendar" component={Agendar} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;