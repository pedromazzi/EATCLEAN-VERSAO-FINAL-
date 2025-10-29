import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { initialRecipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import RecipeDetailHeader from "@/components/RecipeDetailHeader";
import IngredientCheckbox from "@/components/IngredientCheckbox";
import PreparationStep from "@/components/PreparationStep";
import NutritionalInfoCard from "@/components/NutritionalInfoCard";
import NotFound from "./NotFound"; // Importar NotFound para caso a receita não seja encontrada

const FAVORITES_STORAGE_KEY = "eatclean_favoritos";

const ReceitaDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const foundRecipe = initialRecipes.find((r) => r.id === id);
    setRecipe(foundRecipe);

    if (foundRecipe) {
      const favorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
      setIsFavorite(favorites.includes(foundRecipe.id));
    }
  }, [id]);

  const handleToggleFavorite = () => {
    if (!recipe) return;

    let favorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    if (isFavorite) {
      favorites = favorites.filter((favId: string) => favId !== recipe.id);
    } else {
      favorites.push(recipe.id);
    }
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-eatclean-white">
      <RecipeDetailHeader isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />

      <div className="flex-grow pt-16"> {/* Padding top para o header fixo */}
        {/* Imagem da Receita */}
        <img
          src={recipe.imagem}
          alt={recipe.nome}
          className="w-full h-64 object-cover rounded-b-3xl shadow-md"
        />

        <div className="p-4">
          {/* Título e Descrição */}
          <h1 className="text-3xl font-bold text-eatclean-gray-text mt-4 mb-2">
            {recipe.nome}
          </h1>
          <p className="text-eatclean-gray-inactive text-base mb-6">
            {recipe.descricao}
          </p>

          {/* Seção Ingredientes */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">Ingredientes</h2>
            <div className="space-y-2">
              {recipe.ingredientes.map((ingredient, index) => (
                <IngredientCheckbox key={index} ingredient={ingredient} />
              ))}
            </div>
          </section>

          {/* Seção Modo de Preparo */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">Modo de Preparo</h2>
            <div className="space-y-4">
              {recipe.modoPreparo.map((step, index) => (
                <PreparationStep key={index} stepNumber={index + 1} stepText={step} />
              ))}
            </div>
          </section>

          {/* Seção Informações Nutricionais */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">Informações Nutricionais</h2>
            <div className="grid grid-cols-2 gap-4">
              <NutritionalInfoCard label="Calorias" value={recipe.informacoesNutricionais.calorias} unit="kcal" />
              <NutritionalInfoCard label="Proteínas" value={recipe.informacoesNutricionais.proteinas} unit="g" />
              <NutritionalInfoCard label="Gorduras" value={recipe.informacoesNutricionais.gorduras} unit="g" />
              <NutritionalInfoCard label="Carboidratos" value={recipe.informacoesNutricionais.carboidratos} unit="g" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReceitaDetalhe;