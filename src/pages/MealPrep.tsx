import React from "react";
import MealPrepArticleCard from "@/components/MealPrepArticleCard";

// Importando as imagens do diretório public
import mealPrepHero from "/images/meal-prep/meal-prep.png";
import mealPrepChef from "/images/meal-prep/meal-prep2.png";


const MealPrep = () => {
  return (
    <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)]"> {/* Ajustado min-h para considerar header e footer */}
      {/* 1. CABEÇALHO COM IMAGEM */}
      <div className="mb-6">
        <img
          src={mealPrepHero} // Usando a imagem importada
          alt="Meal Prep"
          className="w-full h-48 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* 2. CARD COM TÍTULO E TEXTO */}
      <div className="bg-eatclean-white rounded-xl shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-eatclean-gray-text mb-3">
          Planeje suas refeições
        </h1>
        <p className="text-eatclean-gray-inactive text-base leading-relaxed">
          Descubra como preparar refeições saudáveis com antecedência para
          economizar tempo e manter uma dieta equilibrada.
        </p>
      </div>

      {/* 3. DOIS CARDS COM FOTO (Artigos) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <MealPrepArticleCard
          imageSrc={mealPrepChef} // Usando a imagem importada
          title="Guia completo de meal prep para iniciantes"
          description="Aprenda os passos básicos para começar a preparar suas refeições da semana."
          linkTo="/guia-meal-prep-iniciantes" // Placeholder para futura rota
        />
        <MealPrepArticleCard
          imageSrc="https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Receitas"
          title="Receitas rápidas para o almoço da semana"
          description="Opções práticas e saborosas para levar para o trabalho ou faculdade."
          linkTo="/receitas-meal-prep-almoco" // Placeholder para futura rota
        />
      </div>

      {/* 4. CONTEÚDO DE MEAL PREP (Seção Principal) */}
      <section className="bg-eatclean-white rounded-xl shadow-sm p-6 mb-4">
        <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">
          Dicas de Meal Prep
        </h2>
        <p className="text-eatclean-gray-text text-base leading-relaxed mb-4">
          O meal prep é uma estratégia eficiente para quem busca manter uma
          alimentação saudável sem perder tempo durante a semana. Com um pouco
          de organização no fim de semana, você pode preparar suas refeições com
          antecedência.
        </p>
        <p className="text-eatclean-gray-text text-base leading-relaxed mb-4">
          Comece escolhendo um dia da semana para fazer suas compras e preparar
          os alimentos. Separe potes adequados para armazenamento e organize sua
          geladeira.
        </p>
        <p className="text-eatclean-gray-text text-base leading-relaxed">
          Monte combinações equilibradas com proteínas, carboidratos e vegetais.
          Varie os temperos para não enjoar das refeições ao longo da semana.
        </p>
      </section>
    </div>
  );
};

export default MealPrep;