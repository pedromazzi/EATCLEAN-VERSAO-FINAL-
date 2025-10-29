import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import FooterNavigation from "./components/FooterNavigation";
import Explorar from "./pages/Explorar";
import Favoritos from "./pages/Favoritos";
import MealPrep from "./pages/MealPrep";
import Guia from "./pages/Guia";
import PlanoSemanal from "./pages/PlanoSemanal";
import ListaCompras from "./pages/ListaCompras";
import ReceitaDetalhe from "./pages/ReceitaDetalhe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Componente de Layout para envolver as rotas com Header e Footer fixos
const Layout = () => (
  <div className="min-h-screen flex flex-col bg-eatclean-white">
    <Header />
    <main className="flex-grow pt-16 pb-16 overflow-auto"> {/* Padding para evitar sobreposição com header/footer */}
      <Outlet /> {/* Renderiza o conteúdo da rota atual */}
    </main>
    <FooterNavigation />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rota para ReceitaDetalhe que usa seu próprio header */}
          <Route path="/receita/:id" element={<ReceitaDetalhe />} />

          {/* Rotas que usam o Layout padrão (Header e Footer) */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Explorar />} /> {/* Rota padrão para '/' */}
            <Route path="explorar" element={<Explorar />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="meal-prep" element={<MealPrep />} />
            <Route path="guia" element={<Guia />} />
            <Route path="plano-semanal" element={<PlanoSemanal />} />
            <Route path="lista-compras" element={<ListaCompras />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;