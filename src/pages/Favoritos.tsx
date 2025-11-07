import React, { useState, useEffect, useCallback } from "react";
import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import { receitas } from "@/data/receitas";
import { Recipe } from "@/types/recipe";
import { getFavoriteRecipeIds, removeFavoriteRecipeId } from "@/utils/favorites";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition"; // Nova importação

const Favoritos = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  const loadFavoriteRecipes = useCallback(() => {
    const favoriteIds = getFavoriteRecipeIds();
    const recipes = receitas.filter((recipe) =>
      favoriteIds.includes(recipe.id)
    );
    setFavoriteRecipes(recipes);
  }, []);

  useEffect(() => {
    loadFavoriteRecipes();
    window.addEventListener('storage', loadFavoriteRecipes);
    return () => {
      window.removeEventListener('storage', loadFavoriteRecipes);
    };
  }, [loadFavoriteRecipes]);

  const handleRemoveFavorite = (recipeId: string) => {
    removeFavoriteRecipeId(recipeId);
    loadFavoriteRecipes();
  };

  return (
    <PageTransition> {/* Envolvendo o conteúdo da página */}
      <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)]">
        <h1 className="text-3xl font-bold text-eatclean-gray-text mb-6 text-center">
          Favoritos
        </h1>

        {favoriteRecipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <HeartOff size={64} className="text-eatclean-gray-inactive mb-4" />
            <p className="text-xl font-semibold text-eatclean-gray-text mb-2">
              Nenhuma receita favoritada ainda
            </p>
            <p className="text-eatclean-gray-inactive mb-6">
              Explore receitas e adicione suas favoritas aqui!
            </p>
            <Link to="/explorar">
              <Button className="bg-eatclean-primary-green hover:bg-eatclean-primary-green/90 text-eatclean-white rounded-full px-6 py-3">
                Explorar Receitas
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onRemoveFavorite={handleRemoveFavorite}
              />
            ))}
          </div>
        )}
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default Favoritos;