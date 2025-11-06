import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GuiaMealPrepIniciantes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Botão Voltar */}
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-eatclean-gray-text hover:text-eatclean-primary-green transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>
      </div>

      {/* Imagem de Capa */}
      <div className="relative mb-6">
        <img
          src="/images/meal-prep/meal-prep2.png"
          alt="Guia completo de meal prep para iniciantes"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h1 className="text-3xl md:text-4xl font-bold text-white p-6">
            Guia completo de meal prep para iniciantes
          </h1>
        </div>
      </div>

      {/* Conteúdo do Artigo */}
      <article className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
          
          <p className="text-lg text-eatclean-gray-text leading-relaxed">
            Aprenda os passos básicos para começar a preparar suas refeições com antecedência e economizar tempo durante a semana.
          </p>

          {/* O que é Meal Prep? */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">O que é Meal Prep?</h2>
            <p className="text-eatclean-gray-text leading-relaxed">
              Meal prep (preparação de refeições) é o processo de planejar e preparar suas refeições com antecedência, geralmente para a semana toda. É uma estratégia inteligente para quem busca manter uma alimentação saudável sem perder tempo durante os dias corridos.
            </p>
          </section>

          {/* Por que fazer Meal Prep? */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Por que fazer Meal Prep?</h2>
            <p className="font-semibold text-eatclean-gray-text mb-2">Benefícios principais:</p>
            <ul className="space-y-2 ml-4 text-eatclean-gray-text">
              <li>• <strong>Economia de tempo:</strong> Você cozinha uma vez e tem refeições prontas para vários dias</li>
              <li>• <strong>Economia de dinheiro:</strong> Compras planejadas evitam desperdício e gastos impulsivos</li>
              <li>• <strong>Alimentação mais saudável:</strong> Você controla os ingredientes e evita fast food</li>
              <li>• <strong>Menos estresse:</strong> Não precisa pensar "o que vou comer hoje?"</li>
              <li>• <strong>Controle de porções:</strong> Ajuda a manter o foco nos seus objetivos</li>
            </ul>
          </section>

          {/* Equipamentos essenciais */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Equipamentos essenciais</h2>
            <p className="text-eatclean-gray-text mb-2">Você não precisa de muito para começar:</p>
            <ul className="space-y-1 ml-4 text-eatclean-gray-text">
              <li>✓ <strong>Potes de vidro ou plástico sem BPA</strong> (diversos tamanhos)</li>
              <li>✓ <strong>Etiquetas adesivas</strong> (para datar e identificar)</li>
              <li>✓ <strong>Balança de cozinha</strong> (opcional, mas ajuda)</li>
              <li>✓ <strong>Assadeiras e panelas grandes</strong> (para cozinhar em quantidade)</li>
              <li>✓ <strong>Faca afiada e tábua de corte</strong></li>
            </ul>
          </section>

          {/* Organizando sua cozinha */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Organizando sua cozinha para meal prep</h2>
            <p className="text-eatclean-gray-text leading-relaxed mb-4">
              Uma cozinha bem organizada é essencial para tornar o meal prep mais eficiente e agradável. Veja como estruturar tudo:
            </p>

            {/* Área de armazenamento */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Área de armazenamento de potes</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Organização dos potes:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Separe os potes por tamanho em prateleiras ou gavetas específicas</li>
                <li>• Guarde tampas separadamente em um organizador vertical (evita bagunça)</li>
                <li>• Mantenha potes limpos e secos sempre prontos para uso</li>
                <li>• Reserve um espaço na geladeira só para as marmitas da semana</li>
                <li>• Use potes retangulares (aproveitam melhor o espaço que os redondos)</li>
              </ul>
              <p className="mt-2 text-eatclean-gray-text italic">
                <strong>Dica:</strong> Tenha pelo menos 10-15 potes de tamanhos variados: pequenos para lanches, médios para almoços e grandes para preparos.
              </p>
            </div>

            {/* Sistema de etiquetagem */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Sistema de etiquetagem</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Monte um kit de etiquetas:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Etiquetas adesivas removíveis (fáceis de tirar depois de lavar)</li>
                <li>• Caneta permanente ou marcador para vidro</li>
                <li>• Organize por cores se preferir (ex: verde = almoço, azul = lanche)</li>
              </ul>
              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">O que escrever nas etiquetas:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Data de preparo</li>
                <li>• Nome da refeição</li>
                <li>• Data de validade (opcional mas útil)</li>
                <li>• Exemplo: "Frango com batata doce - 10/11 - Validade: 14/11"</li>
              </ul>
            </div>

            {/* Estação de preparo */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Estação de preparo</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Organize sua bancada:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• <strong>Lado esquerdo:</strong> Tábuas de corte e facas</li>
                <li>• <strong>Centro:</strong> Área de trabalho livre para picar e preparar</li>
                <li>• <strong>Lado direito:</strong> Bowl ou recipiente para descarte (cascas, aparas)</li>
              </ul>

              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Tábuas de corte:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Tenha pelo menos 2 tábuas (uma para carnes, outra para vegetais)</li>
                <li>• Mantenha sempre higienizadas e secas</li>
                <li>• Use tábuas de plástico (mais higiênicas) ou vidro temperado</li>
                <li>• Tábua de madeira é bonita mas requer mais cuidado</li>
              </ul>

              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Facas essenciais:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• 1 faca de chef grande (para cortar vegetais e carnes)</li>
                <li>• 1 faca pequena (para descascar e trabalhos delicados)</li>
                <li>• Mantenha sempre afiadas (faca cega é perigosa!)</li>
                <li>• Guarde em um suporte na bancada ou em gaveta com divisórias</li>
              </ul>
            </div>

            {/* Área de cocção */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Área de cocção</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Durante o meal prep, organize assim:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Use todos os bocas do fogão simultaneamente</li>
                <li>• Forno pode assar vários alimentos ao mesmo tempo (em assadeiras separadas)</li>
                <li>• Panela elétrica ou slow cooker para arroz/feijão enquanto você faz outras coisas</li>
                <li>• Tenha panelas de tamanhos variados disponíveis</li>
              </ul>
            </div>

            {/* Zona de resfriamento */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Zona de resfriamento e montagem</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Após cozinhar:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Reserve uma bancada ou mesa para esfriar os alimentos</li>
                <li>• Não coloque comida quente direto nos potes (cria condensação)</li>
                <li>• Use pratos ou travessas para deixar esfriar 15-20 minutos</li>
                <li>• Só então monte as refeições nos potes</li>
              </ul>

              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Linha de montagem:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Disponha todos os alimentos preparados em bowls separados</li>
                <li>• Monte um pote de cada vez, como uma "linha de produção"</li>
                <li>• Garante que todas as porções fiquem uniformes</li>
              </ul>
            </div>

            {/* Organização da geladeira */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Organização da geladeira</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Prateleiras para meal prep:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Reserve uma prateleira inteira só para as marmitas da semana</li>
                <li>• Organize por dia (segunda na frente, sexta atrás)</li>
                <li>• Separe refeições diferentes em áreas distintas (almoços, lanches)</li>
                <li>• Deixe ingredientes frescos (que você vai adicionar na hora) em outra prateleira</li>
              </ul>

              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Congelador:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Use prateleiras ou cestos organizadores</li>
                <li>• Empilhe potes do mesmo tamanho</li>
                <li>• Etiquete SEMPRE (no freezer você não vê o que é dentro)</li>
                <li>• Deixe um espaço para novas preparações</li>
              </ul>
            </div>

            {/* Limpeza e manutenção */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Limpeza e manutenção</h3>
              <p className="font-semibold text-eatclean-gray-text mb-2">Após o meal prep:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Lave TUDO imediatamente (não deixe para depois!)</li>
                <li>• Seque e guarde os equipamentos em seus lugares</li>
                <li>• Deixe a cozinha organizada para o próximo meal prep</li>
                <li>• Faça um inventário rápido do que precisa repor (potes, etiquetas, etc.)</li>
              </ul>

              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Checklist semanal:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Verificar potes danificados ou com cheiro</li>
                <li>• Repor etiquetas se acabaram</li>
                <li>• Conferir se facas estão afiadas</li>
                <li>• Lavar tábuas com bicarbonato (remove odores)</li>
              </ul>
            </div>
          </section>

          {/* Passo a passo */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Passo a passo para começar</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-eatclean-gray-text mb-2">1. Planeje o cardápio</h3>
                <p className="text-eatclean-gray-text mb-2">Escolha 3-4 receitas para a semana. Comece simples:</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• 1 ou 2 proteínas (frango, carne, peixe)</li>
                  <li>• 2 ou 3 carboidratos (arroz, batata doce, macarrão integral)</li>
                  <li>• 4 ou 5 vegetais diferentes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-eatclean-gray-text mb-2">2. Faça a lista de compras</h3>
                <p className="text-eatclean-gray-text mb-2">Baseado no cardápio, liste TODOS os ingredientes necessários. Organize por seção do supermercado:</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• Proteínas</li>
                  <li>• Vegetais e frutas</li>
                  <li>• Grãos e carboidratos</li>
                  <li>• Temperos e condimentos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-eatclean-gray-text mb-2">3. Escolha o dia</h3>
                <p className="text-eatclean-gray-text">A maioria das pessoas prefere domingo, mas escolha o dia que funciona melhor para você. Reserve 2-3 horas.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-eatclean-gray-text mb-2">4. Prepare tudo</h3>
                <p className="font-semibold text-eatclean-gray-text mb-2">Ordem estratégica:</p>
                <ol className="space-y-1 ml-4 text-eatclean-gray-text list-decimal">
                  <li><strong>Comece com o que demora mais:</strong> Coloque arroz, feijão ou assados no forno</li>
                  <li><strong>Enquanto cozinha:</strong> Lave e pique vegetais</li>
                  <li><strong>Prepare as proteínas:</strong> Grelhe, asse ou cozinhe</li>
                  <li><strong>Monte as refeições:</strong> Distribua nos potes</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-eatclean-gray-text mb-2">5. Armazene corretamente</h3>
                <p className="font-semibold text-eatclean-gray-text mb-2">Geladeira (até 5 dias):</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• Refeições para segunda a sexta</li>
                  <li>• Vegetais crus picados</li>
                  <li>• Proteínas cozidas</li>
                </ul>
                <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Freezer (até 3 meses):</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• Refeições excedentes</li>
                  <li>• Sopas e ensopados</li>
                  <li>• Proteínas marinadas cruas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dicas para iniciantes */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Dicas para iniciantes</h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-eatclean-gray-text">1. Comece devagar</p>
                <p className="text-eatclean-gray-text">Não tente preparar 21 refeições de uma vez. Comece com apenas almoços (5 refeições) e vá aumentando conforme pega prática.</p>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text">2. Varie os temperos</p>
                <p className="text-eatclean-gray-text">Você pode cozinhar uma grande quantidade de frango e temperá-lo de formas diferentes ao longo da semana para não enjoar.</p>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text">3. Deixe alguns itens frescos</p>
                <p className="text-eatclean-gray-text">Prepare a base (proteína, arroz, vegetais cozidos) mas deixe salada fresca e frutas para adicionar na hora.</p>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text">4. Use o congelador a seu favor</p>
                <p className="text-eatclean-gray-text">Congele porções extras. Você terá refeições de emergência para aqueles dias caóticos.</p>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text">5. Etiquete tudo</p>
                <p className="text-eatclean-gray-text">Anote a data de preparo e o conteúdo. Facilita muito na hora de escolher e garante que você não coma nada estragado.</p>
              </div>
            </div>
          </section>

          {/* Receitas fáceis */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Receitas fáceis para começar</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-eatclean-gray-text mb-2">Proteínas:</p>
                <ul className="space-y-1 text-eatclean-gray-text">
                  <li>• Peito de frango grelhado temperado</li>
                  <li>• Carne moída refogada</li>
                  <li>• Ovo cozido (perfeito para lanches)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text mb-2">Carboidratos:</p>
                <ul className="space-y-1 text-eatclean-gray-text">
                  <li>• Arroz integral</li>
                  <li>• Batata doce assada</li>
                  <li>• Macarrão integral</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text mb-2">Vegetais:</p>
                <ul className="space-y-1 text-eatclean-gray-text">
                  <li>• Brócolis no vapor</li>
                  <li>• Cenoura e abobrinha refogadas</li>
                  <li>• Salada verde (preparar só a base, temperar na hora)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Erros comuns */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Erros comuns a evitar</h2>
            <ul className="space-y-2 text-eatclean-gray-text">
              <li>❌ <strong>Fazer tudo igual:</strong> Varie as combinações para não enjoar</li>
              <li>❌ <strong>Não etiquetar:</strong> Você vai esquecer o que é e quando fez</li>
              <li>❌ <strong>Porções muito grandes ou pequenas:</strong> Ajuste conforme sua fome real</li>
              <li>❌ <strong>Esquecer temperos:</strong> Comida sem sabor = você vai desistir</li>
              <li>❌ <strong>Não testar antes:</strong> Não prepare 5 porções de uma receita que você nunca fez</li>
              <li>❌ <strong>Cozinha desorganizada:</strong> Perde tempo procurando coisas</li>
            </ul>
          </section>

          {/* Cronograma de validade */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Cronograma de validade</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-eatclean-gray-text mb-2">Geladeira:</p>
                <ul className="space-y-1 text-eatclean-gray-text">
                  <li>• Frango cozido: 3-4 dias</li>
                  <li>• Carne cozida: 3-4 dias</li>
                  <li>• Peixe cozido: 2-3 dias</li>
                  <li>• Arroz e grãos: 5-6 dias</li>
                  <li>• Vegetais cozidos: 3-5 dias</li>
                  <li>• Ovos cozidos: 7 dias</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-eatclean-gray-text mb-2">Freezer:</p>
                <ul className="space-y-1 text-eatclean-gray-text">
                  <li>• Praticamente tudo: 2-3 meses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sua primeira semana */}
          <section>
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Sua primeira semana</h2>
            <p className="font-semibold text-eatclean-gray-text mb-2">Sugestão de cardápio simples:</p>
            <div className="bg-eatclean-primary-green/10 p-4 rounded-lg">
              <p className="font-semibold text-eatclean-gray-text mb-2">Segunda a Sexta - Almoço:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Base: Arroz integral + Frango grelhado + Brócolis</li>
                <li>• Varie os temperos do frango a cada dia</li>
              </ul>
              <p className="font-semibold text-eatclean-gray-text mt-3 mb-2">Lanches:</p>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                <li>• Ovos cozidos</li>
                <li>• Frutas frescas</li>
                <li>• Iogurte grego</li>
              </ul>
            </div>
          </section>

          {/* Lembre-se */}
          <section className="bg-eatclean-primary-green/10 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Lembre-se</h2>
            <p className="text-eatclean-gray-text leading-relaxed mb-3">
              Meal prep não precisa ser perfeito! O objetivo é facilitar sua vida, não criar mais estresse. Comece pequeno, seja consistente e ajuste conforme necessário.
            </p>
            <p className="text-eatclean-gray-text font-semibold">
              Dica final: Use o EatClean para encontrar receitas práticas e saudáveis perfeitas para meal prep! 🥗💪
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};

export default GuiaMealPrepIniciantes;