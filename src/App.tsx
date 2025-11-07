import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import FooterNavigation from "./components/FooterNavigation";
import Explorar from "./pages/Explorar";
import Favoritos from "./pages/Favoritos";
import MealPrep from "./pages/MealPrep";
import Guia from "./pages/Guia";
import PlanoSemanal from "./pages/PlanoSemanal";
import ListaCompras from "./pages/ListaCompras";
import ReceitaDetalhe from "./pages/ReceitaDetalhe";
import GuiaMealPrepIniciantes from "@/pages/GuiaMealPrepIniciantes";
import ReceitasMealPrepAlmoco from "@/pages/ReceitasMealPrepAlmoco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-eatclean-white">
    <Header />
    <main className="flex-grow pt-16 pb-16 overflow-auto">
      <Outlet />
    </main>
    <FooterNavigation />
  </div>
);

const App = () => {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Rotas que usam seu próprio header/navegação */}
              <Route path="/receita/:id" element={<ReceitaDetalhe />} />
              <Route path="/guia-meal-prep-iniciantes" element={<GuiaMealPrepIniciantes />} />
              <Route path="/receitas-meal-prep-almoco" element={<ReceitasMealPrepAlmoco />} />

              {/* Rotas que usam o Layout padrão (Header e Footer) */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Explorar />} />
                <Route path="explorar" element={<Explorar />} />
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="meal-prep" element={<MealPrep />} />
                <Route path="guia" element={<Guia />} />
                <Route path="plano-semanal" element={<PlanoSemanal />} />
                <Route path="lista-compras" element={<ListaCompras />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;