import React from "react";
import { Droplet, Scale, Lightbulb, ChevronDown } from "lucide-react";
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
        {/* TÓPICO 1: Nutrientes Essenciais */}
        <AccordionItem value="item-1" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-between p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center">
                <Droplet size={20} className="text-eatclean-primary-green" />
              </div>
              <span>Nutrientes Essenciais</span>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>
              <strong className="text-eatclean-gray-text">Proteínas:</strong> Essenciais para construir e reparar tecidos, enzimas e hormônios.
            </p>
            <p>
              <strong className="text-eatclean-gray-text">Carboidratos:</strong> Fonte de energia para o corpo, encontrados em grãos, frutas e vegetais.
            </p>
            <p>
              <strong className="text-eatclean-gray-text">Gorduras:</strong> Importantes para a absorção de vitaminas e produção de hormônios.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* TÓPICO 2: Porções Recomendadas */}
        <AccordionItem value="item-2" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-between p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center">
                <Scale size={20} className="text-eatclean-primary-green" />
              </div>
              <span>Porções Recomendadas</span>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
            <p>
              <strong className="text-eatclean-gray-text">Proteínas:</strong> Consuma 2-3 porções por dia, incluindo carnes magras, peixes, ovos e leguminosas.
            </p>
            <p>
              <strong className="text-eatclean-gray-text">Carboidratos:</strong> Inclua 3-5 porções diárias, priorizando grãos integrais, frutas e vegetais.
            </p>
            <p>
              <strong className="text-eatclean-gray-text">Gorduras:</strong> Limite a 1-2 porções por dia, optando por fontes saudáveis como azeite, abacate e oleaginosas.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* TÓPICO 3: Dicas para uma Alimentação Equilibrada */}
        <AccordionItem value="item-3" className="bg-eatclean-white rounded-xl shadow-sm border-none">
          <AccordionTrigger className="flex items-center justify-between p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center">
                <Lightbulb size={20} className="text-eatclean-primary-green" />
              </div>
              <span>Dicas para uma Alimentação Equilibrada</span>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>Varie os alimentos para garantir a ingestão de diferentes nutrientes.</li>
              <li>Priorize alimentos naturais e minimize processados.</li>
              <li>Mantenha-se hidratado bebendo água ao longo do dia.</li>
              <li>Planeje suas refeições com antecedência.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Guia;