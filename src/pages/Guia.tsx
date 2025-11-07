import React from "react";
import {
  Leaf,
  Droplet,
  Droplets,
  ClipboardList,
  Scale,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition"; // Importação do PageTransition

const Guia = () => {
  return (
    <PageTransition> {/* PageTransition envolvendo todo o conteúdo */}
      <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)]">
        {/* 1. CABEÇALHO DA TELA */}
        <div className="relative mb-6 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" // URL da imagem atualizada
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
          {/* ACCORDION 1: Alimentação Saudável — Fundamentos */}
          <AccordionItem value="item-1" className="bg-eatclean-white rounded-xl shadow-sm border-none">
            <AccordionTrigger className="flex items-center justify-start gap-3 p-4 text-eatclean-gray-text font-bold text-lg hover:no-underline">
              <div className="w-8 h-8 rounded-full bg-eatclean-primary-green/10 flex items-center justify-center flex-shrink-0">
                <Leaf size={20} className="text-eatclean-primary-green" />
              </div>
              <span className="flex-grow text-left">Alimentação Saudável — Fundamentos</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-eatclean-gray-text space-y-3">
              <div className="space-y-4">
                <p>A alimentação saudável é a base para alcançar seus objetivos, seja emagrecer, ganhar massa muscular ou simplesmente ter mais energia no dia a dia.</p>

                <h4 className="font-bold text-lg mt-4">PRINCÍPIOS BÁSICOS:</h4>
                <ul className="space-y-2 ml-4">
                  <li><strong>• Coma comida de verdade:</strong> Priorize alimentos in natura ou minimamente processados. Frutas, vegetais, proteínas magras, grãos integrais e gorduras saudáveis devem ser a base da sua alimentação.</li>
                  <li><strong>• Variedade é fundamental:</strong> Quanto mais colorido o prato, melhor. Cada cor representa diferentes nutrientes essenciais para o corpo.</li>
                  <li><strong>• Hidratação:</strong> Água é vida! Beba pelo menos 2-3 litros por dia. A sede já é sinal de desidratação.</li>
                  <li><strong>• Horários regulares:</strong> Comer em horários consistentes ajuda a regular o metabolismo e controlar a fome.</li>
                  <li><strong>• Mastigação consciente:</strong> Coma devagar, saboreie os alimentos. Isso melhora a digestão e aumenta a saciedade.</li>
                </ul>

                <h4 className="font-bold text-lg mt-4">ALIMENTOS PARA PRIORIZAR:</h4>
                <ul className="space-y-1 ml-4">
                  <li>✓ Proteínas magras: frango, peixe, ovos, carne vermelha magra</li>
                  <li>✓ Carboidratos complexos: batata doce, arroz integral, aveia, quinoa</li>
                  <li>✓ Vegetais variados: brócolis, couve, espinafre, tomate, cenoura</li>
                  <li>✓ Frutas da estação: banana, maçã, morango, laranja, mamão</li>
                  <li>✓ Gorduras boas: azeite, abacate, castanhas, sementes</li>
                </ul>

                <h4 className="font-bold text-lg mt-4">ALIMENTOS PARA MODERAR:</h4>
                <ul className="space-y-1 ml-4">
                  <li>⚠ Açúcar refinado e doces</li>
                  <li>⚠ Produtos ultraprocessados</li>
                  <li>⚠ Frituras e fast food</li>
                  <li>⚠ Refrigerantes e bebidas açucaradas</li>
                  <li>⚠ Excesso de sódio</li>
                </ul>

                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg mt-4">
                  <p className="font-semibold">DICA DE OURO:</p>
                  <p>A regra 80/20 funciona! 80% do tempo, coma alimentos nutritivos e saudáveis. Os 20% restantes podem ser mais flexíveis. Isso torna a alimentação saudável sustentável a longo prazo.</p>
                </div>
              </div>
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
              <div className="space-y-4">
                <p>Os macronutrientes (vitaminas e minerais) são necessários em pequenas quantidades, mas são fundamentais para o funcionamento do corpo.</p>

                <h4 className="font-bold text-lg mt-4">🥩 PROTEÍNAS</h4>
                <p><strong>Função:</strong> Construção e reparação muscular, produção de hormônios e enzimas.</p>
                
                <p className="mt-2"><strong>Quantidade recomendada:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Sedentário: 0,8-1g por kg de peso corporal</li>
                  <li>• Ativo/Fitness: 1,6-2,2g por kg de peso corporal</li>
                  <li>• Atletas: 2-2,5g por kg de peso corporal</li>
                </ul>

                <p className="mt-2"><strong>Melhores fontes:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Frango (26g proteína/100g)</li>
                  <li>✓ Ovos (13g proteína/100g)</li>
                  <li>✓ Peixe (20-25g proteína/100g)</li>
                  <li>✓ Carne vermelha magra (26g proteína/100g)</li>
                  <li>✓ Iogurte grego (10g proteína/100g)</li>
                  <li>✓ Leguminosas (feijão, lentilha, grão de bico)</li>
                </ul>

                <p className="italic mt-2">Dica: Distribua a proteína em todas as refeições (20-30g por refeição) para melhor absorção.</p>

                <h4 className="font-bold text-lg mt-6">🍠 CARBOIDRATOS</h4>
                <p><strong>Função:</strong> Principal fonte de energia, combustível para treinos e funções cerebrais.</p>
                
                <p className="mt-2"><strong>Quantidade recomendada:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Emagrecimento: 2-3g por kg de peso</li>
                  <li>• Manutenção: 3-5g por kg de peso</li>
                  <li>• Ganho de massa: 5-7g por kg de peso</li>
                </ul>

                <p className="mt-2"><strong>Carboidratos complexos (preferir):</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Batata doce</li>
                  <li>✓ Arroz integral</li>
                  <li>✓ Aveia</li>
                  <li>✓ Quinoa</li>
                  <li>✓ Mandioca</li>
                  <li>✓ Frutas inteiras</li>
                </ul>

                <p className="mt-2"><strong>Carboidratos simples (moderar):</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>⚠ Açúcar</li>
                  <li>⚠ Pão branco</li>
                  <li>⚠ Doces</li>
                  <li>⚠ Refrigerantes</li>
                </ul>

                <p className="italic mt-2">Dica: Consuma carboidratos principalmente no café da manhã e ao redor do treino (pré e pós). À noite, reduza a quantidade.</p>

                <h4 className="font-bold text-lg mt-6">🥑 GORDURAS</h4>
                <p><strong>Função:</strong> Produção hormonal, absorção de vitaminas, energia de longa duração.</p>
                
                <p className="mt-2"><strong>Quantidade recomendada:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• 20-35% das calorias totais</li>
                  <li>• Aproximadamente 0,8-1,2g por kg de peso</li>
                </ul>

                <p className="mt-2"><strong>Gorduras boas (insaturadas):</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Azeite extra virgem</li>
                  <li>✓ Abacate</li>
                  <li>✓ Castanhas e amêndoas</li>
                  <li>✓ Peixes gordos (salmão, sardinha)</li>
                  <li>✓ Sementes (chia, linhaça)</li>
                  <li>✓ Pasta de amendoim natural</li>
                </ul>

                <p className="mt-2"><strong>Gorduras a evitar (trans e saturadas em excesso):</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✗ Margarina</li>
                  <li>✗ Frituras</li>
                  <li>✗ Produtos industrializados</li>
                  <li>✗ Fast food</li>
                </ul>

                <p className="italic mt-2">Dica: Não tenha medo da gordura! Ela é essencial para hormônios e saciedade. Apenas escolha as fontes certas.</p>

                <h4 className="font-bold text-lg mt-6">⚖️ DISTRIBUIÇÃO BALANCEADA</h4>
                <p>Exemplo para uma dieta de 2000 kcal:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Proteínas: 30% (150g) = 600 kcal</li>
                  <li>• Carboidratos: 40% (200g) = 800 kcal</li>
                  <li>• Gorduras: 30% (67g) = 600 kcal</li>
                </ul>

                <p className="italic mt-2">Lembre-se: Esses valores são referências. Cada pessoa tem necessidades diferentes baseadas em idade, sexo, atividade física e objetivos.</p>
              </div>
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
              <div className="space-y-4">
                <p>Os micronutrientes (vitaminas e minerais) são necessários em pequenas quantidades, mas são fundamentais para o funcionamento do corpo.</p>

                <h4 className="font-bold text-lg mt-4">💊 VITAMINAS ESSENCIAIS</h4>
                
                <div className="mt-3">
                  <p><strong>Vitamina A (Visão e imunidade):</strong></p>
                  <p className="ml-4">✓ Cenoura, abóbora, batata doce, espinafre</p>
                </div>

                <div className="mt-3">
                  <p><strong>Vitaminas do Complexo B (Energia e metabolismo):</strong></p>
                  <p className="ml-4">✓ Ovos, carnes, grãos integrais, vegetais verdes</p>
                </div>

                <div className="mt-3">
                  <p><strong>Vitamina C (Imunidade e absorção de ferro):</strong></p>
                  <p className="ml-4">✓ Laranja, limão, morango, brócolis, pimentão</p>
                </div>

                <div className="mt-3">
                  <p><strong>Vitamina D (Ossos e imunidade):</strong></p>
                  <p className="ml-4">✓ Sol (15-20 min/dia), peixes gordos, ovos</p>
                  <p className="ml-4 italic text-sm">Dica: A maioria dos brasileiros tem deficiência. Considere suplementação.</p>
                </div>

                <div className="mt-3">
                  <p><strong>Vitamina E (Antioxidante):</p>
                  <p className="ml-4">✓ Castanhas, sementes, azeite, abacate</p>
                </div>

                <div className="mt-3">
                  <p><strong>Vitamina K (Coagulação sanguínea):</strong></p>
                  <p className="ml-4">✓ Vegetais verde-escuros, brócolis, couve</p>
                </div>

                <h4 className="font-bold text-lg mt-6">⚡ MINERAIS IMPORTANTES</h4>
                
                <div className="mt-3">
                  <p><strong>Ferro (Transporte de oxigênio):</strong></p>
                  <p className="ml-4">✓ Carnes vermelhas, feijão, lentilha, espinafre</p>
                  <p className="ml-4 italic text-sm">Dica: Combine com vitamina C para melhor absorção.</p>
                </div>

                <div className="mt-3">
                  <p><strong>Cálcio (Ossos e contração muscular):</strong></p>
                  <p className="ml-4">✓ Laticínios, vegetais verde-escuros, sardinha</p>
                </div>

                <div className="mt-3">
                  <p><strong>Magnésio (Energia e recuperação muscular):</strong></p>
                  <p className="ml-4">✓ Castanhas, abacate, banana, cacau, vegetais verdes</p>
                </div>

                <div className="mt-3">
                  <p><strong>Potássio (Equilíbrio hídrico e cãibras):</strong></p>
                  <p className="ml-4">✓ Banana, batata doce, abacate, feijão</p>
                </div>

                <div className="mt-3">
                  <p><strong>Zinco (Imunidade e testosterona):</strong></p>
                  <p className="ml-4">✓ Carnes, ovos, castanhas, leguminosas</p>
                </div>

                <div className="mt-3">
                  <p><strong>Sódio (Equilíbrio hídrico):</strong></p>
                  <p className="ml-4">✓ Necessário, mas brasileiro consome em excesso</p>
                  <p className="ml-4 italic text-sm">Limite: Máximo 2.300mg/dia (1 colher de chá de sal)</p>
                </div>

                <h4 className="font-bold text-lg mt-6">💧 HIDRATAÇÃO</h4>
                <p>A água é o nutriente mais importante! Representa 60% do seu corpo.</p>

                <p className="mt-2"><strong>Quantidade recomendada:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Mínimo: 35ml x seu peso (kg)</li>
                  <li>• Exemplo: 70kg x 35ml = 2.450ml (≈ 2,5 litros/dia)</li>
                  <li>• Treina? Adicione +500ml a 1L</li>
                </ul>

                <p className="mt-2"><strong>Sinais de desidratação:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>⚠ Urina amarelo-escura</li>
                  <li>⚠ Dor de cabeça</li>
                  <li>⚠ Cansaço</li>
                  <li>⚠ Tontura</li>
                  <li>⚠ Pele seca</li>
                </ul>

                <p className="mt-2"><strong>Dicas práticas:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Comece o dia com 500ml de água</li>
                  <li>✓ Beba um copo antes de cada refeição</li>
                  <li>✓ Tenha sempre uma garrafa com você</li>
                  <li>✓ Adicione limão ou frutas se achar a água "sem graça"</li>
                  <li>✓ Estabeleça lembretes no celular</li>
                </ul>

                <p className="mt-2"><strong>Água x outras bebidas:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Água de coco: hidrata e tem eletrólitos</li>
                  <li>✓ Chás sem açúcar: contam como hidratação</li>
                  <li>✗ Refrigerantes: desidratam e têm muito açúcar</li>
                  <li>✗ Sucos industrializados: muito açúcar</li>
                  <li>✗ Bebidas alcoólicas: desidratam</li>
                </ul>

                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg mt-4">
                  <p className="font-semibold">🍎 DICA IMPORTANTE</p>
                  <p>A melhor forma de garantir todos os micronutrientes é comer uma grande VARIEDADE de alimentos coloridos. Quanto mais cores no prato, melhor!</p>
                  <p className="mt-2">Faça exames regulares e consulte um nutricionista para verificar se há necessidade de suplementação.</p>
                </div>
              </div>
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
              <div className="space-y-4">
                <p className="italic">"Quem falha em planejar, planeja em falhar." O planejamento é a chave para manter a consistência e alcançar resultados.</p>

                <h4 className="font-bold text-lg mt-4">📋 ESTRUTURA DAS REFEIÇÕES</h4>
                
                <div className="mt-3">
                  <p><strong>Café da Manhã (25% das calorias):</strong></p>
                  <ul className="ml-4">
                    <li>✓ Proteína + Carboidrato + Gordura boa</li>
                    <li className="italic text-sm">Exemplo: Ovos mexidos + pão integral + abacate</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p><strong>Lanche da Manhã (10%):</strong></p>
                  <ul className="ml-4">
                    <li>✓ Proteína + Fruta</li>
                    <li className="italic text-sm">Exemplo: Iogurte grego + banana</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p><strong>Almoço (35%):</strong></p>
                  <ul className="ml-4">
                    <li>✓ Proteína + Carboidrato + Vegetais</li>
                    <li className="italic text-sm">Exemplo: Frango grelhado + arroz integral + salada</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p><strong>Lanche da Tarde (10%):</strong></p>
                  <ul className="ml-4">
                    <li>✓ Proteína + Fruta ou Carboidrato</li>
                    <li className="italic text-sm">Exemplo: Pasta de amendoim + maçã</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p><strong>Jantar (20%):</strong></p>
                  <ul className="ml-4">
                    <li>✓ Proteína + Vegetais (pode incluir carboidrato)</li>
                    <li className="italic text-sm">Exemplo: Peixe + legumes assados + batata doce</li>
                  </ul>
                </div>

                <h4 className="font-bold text-lg mt-6">🗓️ MEAL PREP (PREPARAÇÃO ANTECIPADA)</h4>
                
                <p className="mt-2"><strong>Benefícios:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Economiza tempo durante a semana</li>
                  <li>✓ Evita "furo na dieta" por falta de opção</li>
                  <li>✓ Economiza dinheiro</li>
                  <li>✓ Controle total dos ingredientes</li>
                <li>✓ Controle de porções: Ajuda a manter o foco nos seus objetivos</li>
                </ul>

                <p className="mt-2"><strong>Como fazer:</strong></p>
                <ol className="space-y-1 ml-4 list-decimal">
                  <li>Escolha um dia (domingo geralmente funciona bem)</li>
                  <li>Defina as refeições da semana</li>
                  <li>Faça a lista de compras</li>
                  <li>Cozinhe em quantidade (proteínas, arroz, legumes)</li>
                  <li>Distribua em potes (vidro ou plástico sem BPA)</li>
                  <li>Identifique e refrigere/congele</li>
                </ol>

                <p className="mt-2"><strong>Alimentos que duram bem:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>✓ Arroz integral: 5 dias na geladeira</li>
                  <li>✓ Batata doce: 5 dias na geladeira</li>
                  <li>✓ Frango cozido: 4-5 dias na geladeira</li>
                  <li>✓ Ovos cozidos: 7 dias na geladeira</li>
                  <li>✓ Carne moída: 3-4 dias na geladeira</li>
                  <li>✓ Vegetais cozidos: 3-5 dias</li>
                </ul>

                <h4 className="font-bold text-lg mt-6">🛒 LISTA DE COMPRAS INTELIGENTE</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="font-semibold">Proteínas:</p>
                    <ul className="ml-4">
                      <li>□ Frango (peito e coxa)</li>
                      <li>□ Ovos</li>
                      <li>□ Peixe (tilápia, salmão)</li>
                      <li>□ Carne moída magra</li>
                      <li>□ Iogurte grego</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Carboidratos:</p>
                    <ul className="ml-4">
                      <li>□ Batata doce</li>
                      <li>□ Arroz integral</li>
                      <li>□ Aveia</li>
                      <li>□ Pão integral</li>
                      <li>□ Tapioca</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Vegetais:</p>
                    <ul className="ml-4">
                      <li>□ Brócolis</li>
                      <li>□ Couve</li>
                      <li>□ Tomate</li>
                      <li>□ Alface</li>
                      <li>□ Cenoura</li>
                      <li>□ Abobrinha</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Frutas:</p>
                    <ul className="ml-4">
                      <li>□ Banana</li>
                      <li>□ Maçã</li>
                      <li>□ Morango</li>
                      <li>□ Laranja</li>
                      <li>□ Mamão</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Gorduras boas:</p>
                    <ul className="ml-4">
                      <li>□ Azeite extra virgem</li>
                      <li>□ Abacate</li>
                      <li>□ Castanhas</li>
                      <li>□ Pasta de amendoim</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Temperos:</p>
                    <ul className="ml-4">
                      <li>□ Alho</li>
                      <li>□ Cebola</li>
                      <li>□ Limão</li>
                      <li>□ Ervas frescas</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mt-6">💡 DICAS PRÁTICAS</h4>
                
                <ol className="space-y-2 ml-4 list-decimal">
                  <li>
                    <strong>Regra do Prato Saudável:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• 1/2 prato: vegetais</li>
                      <li>• 1/4 prato: proteína</li>
                      <li>• 1/4 prato: carboidrato</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cozinhe proteínas em grande quantidade:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Asse vários peitos de frango de uma vez</li>
                      <li>• Cozinhe uma panela grande de ovos</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Lave e pique vegetais antecipadamente:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Guarde em potes herméticos</li>
                      <li>• Duram 3-5 dias frescos</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Congele porções individuais:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Use sacos plásticos ou potes</li>
                      <li>• Identifique com data</li>
                      <li>• Duram até 3 meses</li>
                    </ul>
                  </li>
                </ol>
              </div>
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
              <div className="space-y-4">
                <p>Para emagrecer, ganhar massa ou manter o peso, você precisa entender o básico: a quantidade de energia (calorias) que você consome versus a quantidade que você gasta.</p>

                <h4 className="font-bold text-lg mt-4">🎯 ENTENDENDO O BÁSICO</h4>
                
                <p className="mt-2">Seu corpo gasta energia em 3 formas:</p>
                <ol className="space-y-1 ml-4 list-decimal">
                  <li><strong>Metabolismo basal:</strong> energia para funcionar (respirar, circular sangue, etc.)</li>
                  <li><strong>Atividades diárias:</strong> caminhar, trabalhar, tarefas do dia a dia</li>
                  <li><strong>Exercícios:</strong> treinos e atividades físicas</li>
                </ol>

                <p className="mt-3">Para mudar seu corpo:</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Emagrecer:</strong> comer menos calorias do que gasta</li>
                  <li>• <strong>Manter peso:</strong> comer a mesma quantidade que gasta</li>
                  <li>• <strong>Ganhar massa:</strong> comer um pouco mais do que gasta (+ treinar!)</li>
                </ul>

                <h4 className="font-bold text-lg mt-6">📊 DISTRIBUIÇÃO SIMPLES DOS MACROS</h4>
                
                <p className="mt-2">Pense no seu prato desta forma:</p>

                <div className="mt-3">
                  <p><strong>EMAGRECIMENTO:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Muita proteína (carnes, ovos, peixe)</li>
                    <li>• Carboidrato moderado (arroz, batata doce)</li>
                    <li>• Gordura boa (azeite, abacate, castanhas)</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p><strong>GANHO DE MASSA:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Muita proteína (construir músculo)</li>
                    <li>• Bastante carboidrato (energia para treinar)</li>
                    <li>• Gordura boa (produzir hormônios)</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p><strong>MANUTENÇÃO:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Equilíbrio entre todos os macronutrientes</li>
                  </ul>
                </div>

                <h4 className="font-bold text-lg mt-6">🍽️ PORÇÕES NA PRÁTICA (SEM BALANÇA)</h4>
                
                <div className="space-y-3 mt-3">
                  <div>
                    <p><strong>PROTEÍNA:</strong></p>
                    <ul className="ml-4">
                      <li>• Tamanho e espessura da palma da sua mão</li>
                      <li className="italic text-sm">Exemplo: 1 filé de frango do tamanho da palma</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>CARBOIDRATO:</strong></p>
                    <ul className="ml-4">
                      <li>• Tamanho do seu punho fechado</li>
                      <li className="italic text-sm">Exemplo: 1 punho de arroz cozido</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>VEGETAIS:</strong></p>
                    <ul className="ml-4">
                      <li>• 2 mãos em concha juntas</li>
                      <li className="italic text-sm">Coma à vontade! Difícil exagerar</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>GORDURAS:</strong></p>
                    <ul className="ml-4">
                      <li>• Tamanho do seu polegar</li>
                      <li className="italic text-sm">Exemplo: 1 colher de sopa de azeite</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mt-6">⏰ QUANDO COMER O QUÊ</h4>
                
                <div className="space-y-3 mt-3">
                  <div>
                    <p><strong>Carboidratos</strong> são sua energia. Priorize:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Café da manhã (começar o dia com disposição)</li>
                      <li>• Antes do treino (ter energia para treinar)</li>
                      <li>• Depois do treino (recuperar os músculos)</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>Proteínas</strong> em todas as refeições:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Ajuda a manter a saciedade</li>
                      <li>• Constrói e recupera músculos</li>
                      <li>• Acelera o metabolismo</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>Gorduras boas</strong> ao longo do dia:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Dão saciedade</li>
                      <li>• Ajudam na produção de hormônios</li>
                      <li>• Não tenha medo delas!</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mt-6">⚠️ ARMADILHAS COMUNS</h4>
                
                <ol className="space-y-3 ml-4 list-decimal mt-3">
                  <li>
                    <strong>Subestimar porções:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Use a mão como referência</li>
                      <li>• Cuidado com o "só um pouquinho" que vira muito</li>
                      <li>• Pratos menores ajudam a controlar</li>
                      <li>• "Provar" enquanto cozinha</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Esquecer "pequenas" coisas:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Óleo no cozimento conta!</li>
                      <li>• Molhos têm calorias</li>
                      <li>• Bebidas calóricas (sucos, refrigerantes)</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Não contar fins de semana:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• 5 dias certinho + 2 dias de exagero = zero resultado</li>
                      <li>• Use a regra 80/20: 80% certinho, 20% flexível</li>
                      <li>• Flexível não significa descontrole total</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Comparar com outras pessoas:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• "Meu amigo come muito e não engorda!"</li>
                      <li>• Cada metabolismo é único</li>
                      <li>• Foque no SEU corpo e progresso</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Ficar obcecado:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Alimentação saudável não é prisão</li>
                      <li>• Aprenda a fazer escolhas melhores</li>
                      <li>• Qualidade de vida importa!</li>
                    </ul>
                  </li>
                </ol>

                <h4 className="font-bold text-lg mt-6">🎯 SINAIS DE QUE ESTÁ INDO BEM</h4>
                
                <ul className="space-y-1 ml-4 mt-3">
                  <li>✓ Tem energia durante o dia</li>
                  <li>✓ Dorme bem</li>
                  <li>✓ Consegue treinar com intensidade</li>
                  <li>✓ Não tem fome extrema constante</li>
                  <li>✓ Vê progressão visual no espelho</li>
                  <li>✓ Consegue manter a rotina sem sofrimento</li>
                </ul>
              </div>
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
              <div className="space-y-4">
                <p>Resultados duradouros vêm de hábitos consistentes, não de perfeição temporária. <strong>"Consistência > Perfeição"</strong></p>

                <h4 className="font-bold text-lg mt-4">🎯 MINDSET CORRETO</h4>
                
                <ol className="space-y-3 ml-4 list-decimal mt-3">
                  <li>
                    <strong>Pense em processo, não apenas em resultado:</strong>
                    <ul className="ml-4 mt-1">
                      <li>✗ "Quero perder 10kg"</li>
                      <li>✓ "Vou treinar 4x/semana e seguir meu plano alimentar"</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Seja paciente:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Mudanças reais levam tempo</li>
                      <li>• Foco no progresso, não na perfeição</li>
                      <li>• 1% melhor a cada dia = 37x melhor em 1 ano</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Aceite os altos e baixos:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Dias ruins acontecem</li>
                      <li>• Um deslize não arruína tudo</li>
                      <li>• Volte no próximo dia, sem culpa</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Celebre pequenas vitórias:</strong>
                    <ul className="ml-4 mt-1">
                      <li>✓ Treinou quando não queria? Vitória!</li>
                      <li>✓ Escolheu água ao invés de refrigerante? Vitória!</li>
                      <li>✓ Preparou marmitas? Vitória!</li>
                    </ul>
                  </li>
                </ol>

                <h4 className="font-bold text-lg mt-6">🔄 CONSTRUINDO HÁBITOS DURADOUROS</h4>
                
                <p className="mt-2"><strong>Método dos Pequenos Passos:</strong></p>

                <div className="space-y-3 mt-3">
                  <div>
                    <p className="font-semibold">Semana 1-2:</p>
                    <ul className="ml-4">
                      <li>□ Beber 2L de água por dia</li>
                      <li>□ Comer proteína no café da manhã</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Semana 3-4:</p>
                    <ul className="ml-4">
                      <li>□ Adicionar vegetais no almoço e jantar</li>
                      <li>□ Dormir 7-8h por noite</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Semana 5-6:</p>
                    <ul className="ml-4">
                      <li>□ Meal prep nos domingos</li>
                      <li>□ Caminhar 10.000 passos/dia</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Semana 7-8:</p>
                    <ul className="ml-4">
                      <li>□ Começar exercícios 3x/semana</li>
                      <li>□ Reduzir açúcar adicionado</li>
                    </ul>
                  </div>
                </div>

                <p className="italic mt-3">Dica: Não tente mudar tudo de uma vez. Um hábito por vez!</p>

                <h4 className="font-bold text-lg mt-6">📅 ROTINA DIÁRIA IDEAL</h4>
                
                <div className="space-y-3 mt-3">
                  <div>
                    <p className="font-semibold">Manhã (6h-9h):</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Acorde no mesmo horário</li>
                      <li>✓ Beba 500ml de água ao acordar</li>
                      <li>✓ Café da manhã completo (30 min após acordar)</li>
                      <li>✓ Sol por 15 minutos (vitamina D)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Meio-dia (12h-13h):</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Almoço balanceado</li>
                      <li>✓ Não pule refeições!</li>
                      <li>✓ Mastigue devagar (20 minutos de refeição)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Tarde (15h-18h):</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Lanche nutritivo</li>
                      <li>✓ Hidratação constante</li>
                      <li>✓ Treino (se for seu horário)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Noite (18h-21h):</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Jantar leve mas nutritivo</li>
                      <li>✓ Jantar 2-3h antes de dormir</li>
                      <li>✓ Evite telas 1h antes de dormir</li>
                      <li>✓ Durma 7-8h</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mt-6">💪 LIDANDO COM DESAFIOS</h4>
                
                <div className="space-y-3 mt-3">
                  <div>
                    <p className="font-semibold">Falta de tempo:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Meal prep no fim de semana</li>
                      <li>✓ Refeições simples e rápidas</li>
                      <li>✓ Use o EatClean para receitas práticas!</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Viagens/eventos:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Planeje com antecedência</li>
                      <li>✓ Leve snacks saudáveis</li>
                      <li>✓ Aplique a regra 80/20</li>
                      <li>✓ Volte à rotina no dia seguinte</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Falta de motivação:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Tenha um "por quê" forte</li>
                      <li>✓ Acompanhe seu progresso (fotos, medidas)</li>
                      <li>✓ Encontre um parceiro de treino</li>
                      <li>✓ Varie as receitas para não enjoar</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Vontade de desistir:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Lembre-se de onde começou</li>
                      <li>✓ Foque no que já conquistou</li>
                      <li>✓ Um dia ruim não anula semanas de esforço</li>
                      <li>✓ Amanhã é um novo começo</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mt-6">🌟 DICAS DE OURO</h4>
                
                <ol className="space-y-3 ml-4 list-decimal mt-3">
                  <li>
                    <strong>Regra dos 3 dias:</strong>
                    <p className="ml-4">Nunca fique mais de 3 dias sem treinar ou comer bem. Mantém o hábito vivo.</p>
                  </li>

                  <li>
                    <strong>Prepare o ambiente:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Tenha sempre comida saudável em casa</li>
                      <li>• Remova tentações (ou deixe fora de vista)</li>
                      <li>• Deixe roupas de treino separadas</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Comunidade:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Siga perfis motivadores</li>
                      <li>• Compartilhe sua jornada</li>
                      <li>• Encontre pessoas com objetivos similares</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Auto-compaixão:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Seja gentil consigo mesmo</li>
                      <li>• Erros são parte do processo</li>
                      <li>• Progresso não é linear</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Foque no que você PODE fazer:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Não tem tempo para 1h de treino? Faça 20 min</li>
                      <li>• Não conseguiu meal prep? Faça refeições simples</li>
                      <li>• Saiu da dieta? Volte na próxima refeição</li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-lg">🏆 LEMBRE-SE</h4>
                  <p className="mt-2 italic text-center">"Não é sobre ser perfeito. É sobre ser melhor do que ontem."</p>
                  <p className="mt-3">Alimentação saudável não é punição, é autocuidado. Não é restrição, é nutrição. Não é temporário, é estilo de vida.</p>
                  <p className="mt-3 font-semibold text-center">Você consegue! Um passo de cada vez. 💪🥗</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default Guia;