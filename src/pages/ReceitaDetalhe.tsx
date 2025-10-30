import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { initialRecipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import RecipeDetailHeader from "@/components/RecipeDetailHeader";
import IngredientCheckbox from "@/components/IngredientCheckbox";
import PreparationStep from "@/components/PreparationStep";
import NutritionalInfoCard from "@/components/NutritionalInfoCard";
import NotFound from "./NotFound";
import { addFavoriteRecipeId, removeFavoriteRecipeId, checkIsFavorite } from "@/utils/favorites";
import { toast } from "sonner"; // Importando o toast

const ReceitaDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const foundRecipe = initialRecipes.find((r) => r.id === id);
    setRecipe(foundRecipe);

    if (foundRecipe) {
      setIsFavorite(checkIsFavorite(foundRecipe.id));
    }
  }, [id]);

  const handleToggleFavorite = () => {
    if (!recipe) return;

    if (isFavorite) {
      removeFavoriteRecipeId(recipe.id);
      toast.info(`"${recipe.nome}" removida dos favoritos.`);
    } else {
      addFavoriteRecipeId(recipe.id);
      toast.success(`"${recipe.nome}" adicionada aos favoritos!`);
    }
    setIsFavorite(!isFavorite);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Receita copiada para a área de transferência! 📋');
    }).catch((error) => {
      console.error('Erro ao copiar:', error);
      toast.error('Não foi possível copiar a receita.');
    });
  };

  const handleShare = async () => {
    if (!recipe) {
      toast.error("Não foi possível carregar os detalhes da receita para compartilhar.");
      return;
    }

    let texto = `🍽️ ${recipe.nome}\n\n`;
    
    texto += `${recipe.descricao}\n\n`;
    
    texto += `⏱️ Tempo de preparo: ${recipe.tempoPreparo} min\n`;
    texto += `🔥 Calorias: ${recipe.calorias} kcal\n\n`;
    
    texto += `📝 INGREDIENTES:\n`;
    recipe.ingredientes.forEach(ingrediente => {
      texto += `• ${ingrediente}\n`;
    });
    
    texto += `\n👨‍🍳 MODO DE PREPARO:\n`;
    recipe.modoPreparo.forEach((passo, index) => {
      texto += `${index + 1}. ${passo}\n`;
    });
    
    texto += `\n💪 INFORMAÇÕES NUTRICIONAIS:\n`;
    texto += `Porção: ${recipe.tamanhoPorcao}\n`; // Adicionado aqui
    texto += `Calorias: ${recipe.informacoesNutricionais.calorias} kcal\n`;
    texto += `Proteínas: ${recipe.informacoesNutricionais.proteinas}g\n`;
    texto += `Carboidratos: ${recipe.informacoesNutricionais.carboidratos}g\n`;
    texto += `Gorduras: ${recipe.informacoesNutricionais.gorduras}g\n\n`;
    
    texto += `Receita do app EatClean 💚\n${window.location.href}`; // Adiciona a URL atual

    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.nome,
          text: texto,
          url: window.location.href, // Compartilha a URL diretamente também
        });
        toast.success('Receita compartilhada com sucesso!');
      } catch (error: any) {
        // Usuário cancelou ou erro diferente de AbortError
        if (error.name !== 'AbortError') {
          console.error('Erro ao compartilhar:', error);
          copyToClipboard(texto); // Fallback para copiar
        }
      }
    } else {
      // Navegador não suporta Web Share API
      copyToClipboard(texto); // Fallback para copiar
    }
  };

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-eatclean-white">
      <RecipeDetailHeader 
        isFavorite={isFavorite} 
        onToggleFavorite={handleToggleFavorite} 
        onShare={handleShare} // Passando a nova função de compartilhar
      />

      <div className="flex-grow pt-16">
        <img
          src={recipe.imagem}
          alt={recipe.nome}
          className="w-full h-64 object-cover rounded-b-3xl shadow-md"
        />

        <div className="p-4">
          <h1 className="text-3xl font-bold text-eatclean-gray-text mt-4 mb-2">
            {recipe.nome}
          </h1>
          <p className="text-eatclean-gray-inactive text-base mb-6">
            {recipe.descricao}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">Ingredientes</h2>
            <div className="space-y-2">
              {recipe.ingredientes.map((ingredient, index) => (
                <IngredientCheckbox key={index} ingredient={ingredient} />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">Modo de Preparo</h2>
            <div className="space-y-4">
              {recipe.modoPreparo.map((step, index) => (
                <PreparationStep key={index} stepNumber={index + 1} stepText={step} />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">Informações Nutricionais</h2>
            {/* Novo card de Porção */}
            <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 mb-1">Porção</p>
              <p className="text-base font-semibold text-gray-800">{recipe.tamanhoPorcao}</p>
            </div>

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