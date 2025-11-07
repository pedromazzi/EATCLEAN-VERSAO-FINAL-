import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
// import PageTransition from "@/components/PageTransition"; // Removido temporariamente

const ReceitasMealPrepAlmoco = () => {
  const navigate = useNavigate();

  return (
    // <PageTransition> {/* Removido temporariamente */}
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
            src="/images/meal-prep/meal-prep3.png"
            alt="Receitas rápidas para o almoço da semana"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h1 className="text-3xl md:text-4xl font-bold text-white p-6">
              Receitas rápidas para o almoço da semana
            </h1>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
            
            <p className="text-lg text-eatclean-gray-text leading-relaxed">
              Opções práticas e saborosas para levar para o trabalho ou faculdade. Todas as receitas rendem 5 porções (uma para cada dia útil).
            </p>

            {/* Como usar este guia */}
            <section>
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">O que é Meal Prep?</h2>
              <p className="text-eatclean-gray-text leading-relaxed">
                Escolha 1 ou 2 receitas abaixo e prepare tudo de uma vez no seu dia de meal prep. Você terá almoços saudáveis e deliciosos prontos para a semana inteira!
              </p>
            </section>

            {/* Receita 1 */}
            <section className="border-2 border-eatclean-secondary-orange rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-2">1. Bowl de Frango Teriyaki com Arroz</h2>
              <p className="text-eatclean-gray-inactive mb-4">
                <strong>Tempo de preparo:</strong> 40 minutos | <strong>Rendimento:</strong> 5 porções
              </p>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Ingredientes:</h3>
              
              <div className="mb-3">
                <p className="font-semibold text-eatclean-gray-text mb-1">Para o frango:</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• 600g de peito de frango cortado em cubos</li>
                  <li>• 4 colheres de sopa de molho shoyu</li>
                  <li>• 2 colheres de sopa de mel</li>
                  <li>• 1 colher de sopa de vinagre</li>
                  <li>• 2 dentes de alho picados</li>
                  <li>• 1 colher de chá de gengibre ralado</li>
                  <li>• 1 colher de sopa de óleo</li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-eatclean-gray-text mb-1">Base e acompanhamentos:</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• 3 xícaras de arroz integral cozido</li>
                  <li>• 500g de brócolis no vapor</li>
                  <li>• 2 cenouras em tiras finas</li>
                  <li>• Gergelim para finalizar</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Modo de preparo:</h3>
              <ol className="space-y-1 ml-4 text-eatclean-gray-text list-decimal">
                <li>Misture shoyu, mel, vinagre, alho e gengibre</li>
                <li>Marine o frango por 15 minutos</li>
                <li>Refogue o frango no óleo até dourar</li>
                <li>Adicione o molho da marinada e cozinhe por 5 minutos</li>
                <li>Monte os potes: arroz, frango, brócolis e cenoura</li>
                <li>Finalize com gergelim</li>
              </ol>

              <div className="mt-4 bg-eatclean-primary-green/10 p-3 rounded-lg">
                <p className="text-eatclean-gray-text">
                  <strong>Macros por porção:</strong> 380 kcal | 35g proteína | 42g carbs | 8g gordura
                </p>
                <p className="text-eatclean-gray-text mt-1">
                  <strong>Validade:</strong> 4 dias na geladeira
                </p>
              </div>
            </section>

            {/* Receita 2 */}
            <section className="border-2 border-eatclean-secondary-orange rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-2">2. Carne Moída Mexicana com Batata Doce</h2>
              <p className="text-eatclean-gray-inactive mb-4">
                <strong>Tempo de preparo:</strong> 35 minutos | <strong>Rendimento:</strong> 5 porções
              </p>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Ingredientes:</h3>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text mb-3">
                <li>• 600g de carne moída (patinho)</li>
                <li>• 3 batatas doce médias assadas</li>
                <li>• 1 cebola picada</li>
                <li>• 2 dentes de alho</li>
                <li>• 1 pimentão vermelho picado</li>
                <li>• 1 lata de milho escorrido</li>
                <li>• 2 colheres de sopa de molho de tomate</li>
                <li>• 1 colher de chá de cominho</li>
                <li>• 1 colher de chá de páprica</li>
                <li>• Sal e pimenta a gosto</li>
                <li>• Folhas de alface para servir</li>
              </ul>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Modo de preparo:</h3>
              <ol className="space-y-1 ml-4 text-eatclean-gray-text list-decimal">
                <li>Asse as batatas doces inteiras (40 min a 200°C)</li>
                <li>Refogue cebola e alho</li>
                <li>Adicione a carne moída e temperos</li>
                <li>Acrescente pimentão e milho</li>
                <li>Finalize com molho de tomate</li>
                <li>Monte os potes: batata doce, carne moída, alface</li>
              </ol>

              <div className="mt-4 bg-eatclean-primary-green/10 p-3 rounded-lg">
                <p className="text-eatclean-gray-text">
                  <strong>Macros por porção:</strong> 420 kcal | 32g proteína | 48g carbs | 12g gordura
                </p>
                <p className="text-eatclean-gray-text mt-1">
                  <strong>Validade:</strong> 4 dias na geladeira
                </p>
              </div>
            </section>

            {/* Receita 3 */}
            <section className="border-2 border-eatclean-secondary-orange rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-2">3. Salmão Grelhado com Quinoa e Aspargos</h2>
              <p className="text-eatclean-gray-inactive mb-4">
                <strong>Tempo de preparo:</strong> 30 minutos | <strong>Rendimento:</strong> 5 porções
              </p>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Ingredientes:</h3>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text mb-3">
                <li>• 5 filés de salmão (120g cada)</li>
                <li>• 2 xícaras de quinoa cozida</li>
                <li>• 500g de aspargos</li>
                <li>• 2 limões</li>
                <li>• Azeite, sal e pimenta</li>
                <li>• Dill ou endro fresco</li>
              </ul>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Modo de preparo:</h3>
              <ol className="space-y-1 ml-4 text-eatclean-gray-text list-decimal">
                <li>Tempere o salmão com sal, pimenta e suco de limão</li>
                <li>Grelhe os filés (3-4 min de cada lado)</li>
                <li>Refogue os aspargos no azeite</li>
                <li>Monte os potes: quinoa, salmão, aspargos</li>
                <li>Regue com azeite e limão</li>
              </ol>

              <div className="mt-4 bg-eatclean-primary-green/10 p-3 rounded-lg">
                <p className="text-eatclean-gray-text">
                  <strong>Macros por porção:</strong> 390 kcal | 34g proteína | 32g carbs | 16g gordura
                </p>
                <p className="text-eatclean-gray-text mt-1">
                  <strong>Validade:</strong> 3 dias na geladeira
                </p>
              </div>
            </section>

            {/* Receita 4 */}
            <section className="border-2 border-eatclean-secondary-orange rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-2">4. Buddha Bowl Vegetariano</h2>
              <p className="text-eatclean-gray-inactive mb-4">
                <strong>Tempo de preparo:</strong> 45 minutos | <strong>Rendimento:</strong> 5 porções
              </p>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Ingredientes:</h3>
              <ul className="space-y-1 ml-4 text-eatclean-gray-text mb-3">
                <li>• 2 latas de grão-de-bico escorrido</li>
                <li>• 3 batatas doces em cubos</li>
                <li>• 2 xícaras de couve picada</li>
                <li>• 1 xícara de quinoa cozida</li>
                <li>• 1 abacate</li>
                <li>• Tahine para o molho</li>
                <li>• Especiarias: cúrcuma, cominho, páprica</li>
              </ul>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Modo de preparo:</h3>
              <ol className="space-y-1 ml-4 text-eatclean-gray-text list-decimal">
                <li>Tempere grão-de-bico e batata doce com especiarias</li>
                <li>Asse a 200°C por 30 minutos</li>
                <li>Refogue a couve rapidamente</li>
                <li>Monte os potes: quinoa, grão-de-bico, batata, couve</li>
                <li>Adicione abacate fatiado na hora de comer</li>
                <li>Regue com tahine diluído em água</li>
              </ol>

              <div className="mt-4 bg-eatclean-primary-green/10 p-3 rounded-lg">
                <p className="text-eatclean-gray-text">
                  <strong>Macros por porção:</strong> 410 kcal | 18g proteína | 58g carbs | 14g gordura
                </p>
                <p className="text-eatclean-gray-text mt-1">
                  <strong>Validade:</strong> 5 dias na geladeira
                </p>
              </div>
            </section>

            {/* Receita 5 */}
            <section className="border-2 border-eatclean-secondary-orange rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-2">5. Wrap de Frango Desfiado (para montar na hora)</h2>
              <p className="text-eatclean-gray-inactive mb-4">
                <strong>Tempo de preparo:</strong> 50 minutos | <strong>Rendimento:</strong> 5 porções
              </p>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Ingredientes:</h3>
              
              <div className="mb-3">
                <p className="font-semibold text-eatclean-gray-text mb-1">Para o frango:</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• 600g de peito de frango</li>
                  <li>• 1 cebola</li>
                  <li>• 2 tomates picados</li>
                  <li>• Temperos: alho, cominho, páprica, sal</li>
                  <li>• 1 caldo de galinha</li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-eatclean-gray-text mb-1">Para montar:</p>
                <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                  <li>• 5 tortilhas integrais (levar separado)</li>
                  <li>• Alface, tomate, cenoura ralada (preparar na hora)</li>
                  <li>• Iogurte natural temperado</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-eatclean-gray-text mb-2">Modo de preparo:</h3>
              <ol className="space-y-1 ml-4 text-eatclean-gray-text list-decimal">
                <li>Cozinhe o frango com temperos e caldo</li>
                <li>Desfie o frango</li>
                <li>Refogue com cebola e tomate</li>
                <li>Separe em 5 potes</li>
                <li>Na hora do almoço: aqueça o frango e monte o wrap</li>
              </ol>

              <div className="mt-4 bg-eatclean-primary-green/10 p-3 rounded-lg">
                <p className="text-eatclean-gray-text">
                  <strong>Macros por porção:</strong> 350 kcal | 32g proteína | 38g carbs | 8g gordura
                </p>
                <p className="text-eatclean-gray-text mt-1">
                  <strong>Validade:</strong> 4 dias na geladeira
                </p>
              </div>
            </section>

            {/* Dicas importantes */}
            <section>
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Dicas importantes</h2>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-eatclean-gray-text mb-1">Para proteínas:</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Tempere com antecedência para mais sabor</li>
                    <li>• Grelhe, asse ou cozinhe - evite frituras</li>
                    <li>• Varie entre frango, carne, peixe e ovos</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-eatclean-gray-text mb-1">Para carboidratos:</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Prefira integrais (arroz, macarrão, pão)</li>
                    <li>• Batata doce é versátil e nutritiva</li>
                    <li>• Quinoa e outros grãos duram bem na geladeira</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-eatclean-gray-text mb-1">Para vegetais:</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Alguns ficam melhores crus (adicione na hora)</li>
                    <li>• Vegetais cozidos: não passe do ponto</li>
                    <li>• Congele alguns para ter sempre disponível</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-eatclean-gray-text mb-1">Temperos que fazem diferença:</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Limão fresco na hora de comer</li>
                    <li>• Azeite extravirgem</li>
                    <li>• Ervas frescas (manjericão, coentro, salsinha)</li>
                    <li>• Especiarias (cominho, cúrcuma, páprica)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cronograma de preparo */}
            <section>
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Cronograma de preparo</h2>
              <p className="text-eatclean-gray-text mb-4">
                <strong>No seu dia de meal prep - Reserve 2h30 a 3h:</strong>
              </p>

              <div className="space-y-4">
                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg">
                  <p className="font-semibold text-eatclean-gray-text mb-2">Fase 1: Preparo inicial (30 minutos)</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Ligue o forno (200°C)</li>
                    <li>• Coloque arroz/quinoa para cozinhar</li>
                    <li>• Lave e pique todos os vegetais</li>
                    <li>• Separe todos os ingredientes e temperos</li>
                  </ul>
                </div>

                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg">
                  <p className="font-semibold text-eatclean-gray-text mb-2">Fase 2: Proteínas (1 hora)</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Asse ou grelhe as proteínas escolhidas</li>
                    <li>• Enquanto assa, prepare marinadas/temperos</li>
                    <li>• Cozinhe vegetais que serão quentes</li>
                  </ul>
                </div>

                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg">
                  <p className="font-semibold text-eatclean-gray-text mb-2">Fase 3: Vegetais e finalizações (30 minutos)</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Cozinhe no vapor ou refogue os vegetais</li>
                    <li>• Não cozinhe demais!</li>
                    <li>• Deixe tudo esfriar um pouco</li>
                  </ul>
                </div>

                <div className="bg-eatclean-primary-green/10 p-4 rounded-lg">
                  <p className="font-semibold text-eatclean-gray-text mb-2">Fase 4: Montagem (30 minutos)</p>
                  <ul className="space-y-1 ml-4 text-eatclean-gray-text">
                    <li>• Distribua nos potes seguindo as porções</li>
                    <li>• Etiquete com data e conteúdo</li>
                    <li>• Organize na geladeira</li>
                  </ul>
                </div>
              </div>

              <p className="text-eatclean-gray-text italic mt-4">
                <strong>Dica:</strong> Escolha o dia da semana que funciona melhor para você. Muitas pessoas preferem domingo ou sábado, mas se segunda ou quarta funciona melhor na sua rotina, vá em frente!
              </p>
            </section>

            {/* Sistema de rotação */}
            <section>
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Sistema de rotação</h2>
              <p className="text-eatclean-gray-text mb-3">Para não enjoar, alterne assim:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-eatclean-primary-green/10 p-3 rounded-lg">
                  <p className="text-eatclean-gray-text"><strong>Semana 1:</strong> Bowl de Frango Teriyaki</p>
                </div>
                <div className="bg-eatclean-primary-green/10 p-3 rounded-lg">
                  <p className="text-eatclean-gray-text"><strong>Semana 2:</strong> Carne Moída Mexicana</p>
                </div>
                <div className="bg-eatclean-primary-green/10 p-3 rounded-lg">
                  <p className="text-eatclean-gray-text"><strong>Semana 3:</strong> Salmão com Quinoa</p>
                </div>
                <div className="bg-eatclean-primary-green/10 p-3 rounded-lg">
                  <p className="text-eatclean-gray-text"><strong>Semana 4:</strong> Buddha Bowl</p>
                </div>
                <div className="bg-eatclean-primary-green/10 p-3 rounded-lg">
                  <p className="text-eatclean-gray-text"><strong>Semana 5:</strong> Wrap de Frango</p>
                </div>
              </div>
            </section>

            {/* Lembre-se */}
            <section className="bg-eatclean-secondary-orange/10 p-6 rounded-xl border-2 border-eatclean-secondary-orange">
              <h2 className="text-2xl font-bold text-eatclean-gray-text mb-3">Lembre-se</h2>
              <ul className="space-y-2 text-eatclean-gray-text">
                <li>• Comece com 1 receita por semana</li>
                <li>• Aumente conforme pega prática</li>
                <li>• Congele porções extras</li>
                <li>• Varie os temperos para não enjoar</li>
                <li>• Use o EatClean para mais ideias! 🥗</li>
              </ul>
              <p className="text-eatclean-gray-text font-bold mt-4 text-center">
                Bom meal prep e ótimos almoços! 💪
              </p>
            </section>

          </div>
        </article>
        <ScrollToTop />
      </div>
    // </PageTransition> {/* Removido temporariamente */}
  );
};

export default ReceitasMealPrepAlmoco;