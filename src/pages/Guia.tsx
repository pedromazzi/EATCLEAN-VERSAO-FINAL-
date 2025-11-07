import React from "react";
import {
  Leaf,
  Droplet,
  Droplets,
  ClipboardList,
  Scale,
  TrendingUp,
} from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import ScrollToTop from "@/components/ScrollToTop";
import GuiaSectionWrapper from "@/components/guia/GuiaSectionWrapper";
import FundamentosContent from "@/components/guia/FundamentosContent";
import MacronutrientesContent from "@/components/guia/MacronutrientesContent";
import MicronutrientesHidratacaoContent from "@/components/guia/MicronutrientesHidratacaoContent";
import PlanejamentoAlimentarContent from "@/components/guia/PlanejamentoAlimentarContent";
import ControleCaloriasMacrosContent from "@/components/guia/ControleCaloriasMacrosContent";
import HabitosConsistenciaContent from "@/components/guia/HabitosConsistenciaContent";

const Guia = () => {
  return (
    <div className="p-4 bg-eatclean-light-gray min-h-screen">
      {/* 1. CABEÇALHO DA TELA */}
      <div className="relative mb-6 rounded-xl overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          alt="Guia Nutricional"
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eatclean-white">
            Guia Nutricional
          </h1>
        </div>
      </div>

      {/* 2. CONTEÚDO EM ACCORDIONS */}
      <Accordion type="multiple" className="w-full space-y-4">
        <GuiaSectionWrapper
          value="item-1"
          icon={Leaf}
          title="Alimentação Saudável — Fundamentos"
        >
          <FundamentosContent />
        </GuiaSectionWrapper>

        <GuiaSectionWrapper
          value="item-2"
          icon={Droplet}
          title="Macronutrientes: Proteínas, Carboidratos e Gorduras"
        >
          <MacronutrientesContent />
        </GuiaSectionWrapper>

        <GuiaSectionWrapper
          value="item-3"
          icon={Droplets}
          title="Micronutrientes e Hidratação"
        >
          <MicronutrientesHidratacaoContent />
        </GuiaSectionWrapper>

        <GuiaSectionWrapper
          value="item-4"
          icon={ClipboardList}
          title="Planejamento Alimentar"
        >
          <PlanejamentoAlimentarContent />
        </GuiaSectionWrapper>

        <GuiaSectionWrapper
          value="item-5"
          icon={Scale}
          title="Controle de Calorias e Macros"
        >
          <ControleCaloriasMacrosContent />
        </GuiaSectionWrapper>

        <GuiaSectionWrapper
          value="item-6"
          icon={TrendingUp}
          title="Hábitos e Consistência"
        >
          <HabitosConsistenciaContent />
        </GuiaSectionWrapper>
      </Accordion>
      <ScrollToTop />
    </div>
  );
};

export default Guia;