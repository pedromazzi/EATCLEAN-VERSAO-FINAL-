import React from "react";
import { Flame, Clock, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/types/recipe";
import { Button } from "@/components/ui/button";

interface RecipeCardProps {
  recipe: Recipe;
  onRemoveFavorite?: (recipeId: string) => void; // Prop opcional para remover favorito
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onRemoveFavorite }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/receita/${recipe.id}`);
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede que o clique no botão ative o clique do card
    if (onRemoveFavorite) {
      onRemoveFavorite(recipe.id);
    }
  };

  return (
    <div
      className="bg-eatclean-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-[1.02] relative"
      onClick={handleClick}
    >
      {onRemoveFavorite && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white rounded-full h-8 w-8 z-10"
          onClick={handleRemoveClick}
        >
          <Trash2 size={18} />
        </Button>
      )}
      <img
        src={recipe.imagem}
        alt={recipe.titulo} // Usando 'titulo'
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-eatclean-gray-text mb-1">
          {recipe.titulo} {/* Usando 'titulo' */}
        </h3>
        <p className="text-sm text-eatclean-gray-inactive truncate mb-3">
          {recipe.descricao}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-eatclean-orange-highlight">
            <Flame size={16} />
            <span>{recipe.calorias} kcal</span> {/* Usando 'calorias' top-level */}
          </div>
          <div className="flex items-center gap-1 text-eatclean-orange-highlight">
            <Clock size={16} />
            <span>{recipe.tempo}</span> {/* CORRIGIDO: Removido ' min' */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;