import React from "react";
import {
  Leaf, // Para Alimentação Saudável — Fundamentos
  Droplet, // Para Macronutrientes
  Droplets, // Para Micronutrientes e Hidratação
  ClipboardList, // Para Planejamento Alimentar
  Scale, // Para Controle de Calorias e Macros
  TrendingUp, // Para Hábitos e Consistência
  // ChevronDown é incluído automaticamente pelo AccordionTrigger do shadcn/ui
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Guia = () => {
  return (
    <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)]">
      {/* 1. CABEÇALHO DA TELA */}
      <div className="relative mb-6 rounded-xl overflow-hidden shadow-md">
        <img
          src="https://via.placeholder.com/400x200/2D5F5D/FFFFFF?text=Guia+Nutricional"
          alt="Guia Nutricional"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-eatclean-white">
            Guia Nutricional
          </h1>
        </div>
      </div>

      {/* 2. CONTEÚDO EM ACCORDIONS */}
      <Accordion type="multiple" className="w-full space-y-4">
        {/* ACCORDION 1: Alimentação Saudável — Fundamentos */}
        <AccordionItem value="item-1" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
              <Leaf size={20} className="text-eatclean-primary-green" />
            </div>
            <span className="flex-grow text-left">Alimentação Saudável — Fundamentos</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>Texto sobre fundamentos da alimentação saudável será adicionado aqui.</p>
          </AccordionContent>
        </AccordionItem>

        {/* ACCORDION 2: Macronutrientes: Proteínas, Carboidratos e Gorduras */}
        <AccordionItem value="item-2" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
              <Droplet size={20} className="text-eatclean-primary-green" />
            </div>
            <span className="flex-grow text-left">Macronutrientes: Proteínas, Carboidratos e Gorduras</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>Texto sobre macronutrientes será adicionado aqui.</p>
          </AccordionContent>
        </AccordionItem>

        {/* ACCORDION 3: Micronutrientes e Hidratação */}
        <AccordionItem value="item-3" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
              <Droplets size={20} className="text-eatclean-primary-green" />
            </div>
            <span className="flex-grow text-left">Micronutrientes e Hidratação</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>Texto sobre micronutrientes e hidratação será adicionado aqui.</p>
          </AccordionContent>
        </AccordionItem>

        {/* ACCORDION 4: Planejamento Alimentar */}
        <AccordionItem value="item-4" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
              <ClipboardList size={20} className="text-eatclean-primary-green" />
            </div>
            <span className="flex-grow text-left">Planejamento Alimentar</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>Texto sobre planejamento alimentar será adicionado aqui.</p>
          </AccordionContent>
        </AccordionItem>

        {/* ACCORDION 5: Controle de Calorias e Macros */}
        <AccordionItem value="item-5" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
              <Scale size={20} className="text-eatclean-primary-green" />
            </div>
            <span className="flex-grow text-left">Controle de Calorias e Macros</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>Texto sobre controle de calorias e macros será adicionado aqui.</p>
          </AccordionContent>
        </AccordionItem>

        {/* ACCORDION 6: Hábitos e Consistência */}
        <AccordionItem value="item-6" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={20} className="text-eatclean-primary-green" />
            </div>
            <span className="flex-grow text-left">Hábitos e Consistência</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>Texto sobre hábitos e consistência será adicionado aqui.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Guia;