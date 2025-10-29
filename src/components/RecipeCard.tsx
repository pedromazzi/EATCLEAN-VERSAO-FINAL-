import React from "react";
import { Flame, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/receita/${recipe.id}`);
  };

  return (
    <div
      className="bg-eatclean-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
      onClick={handleClick}
    >
      <img
        src={recipe.imagem}
        alt={recipe.nome}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-eatclean-gray-text mb-1">
          {recipe.nome}
        </h3>
        <p className="text-sm text-eatclean-gray-inactive truncate mb-3">
          {recipe.descricao}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-eatclean-orange-highlight">
            <Flame size={16} />
            <span>{recipe.calorias} kcal</span>
          </div>
          <div className="flex items-center gap-1 text-eatclean-orange-highlight">
            <Clock size={16} />
            <span>{recipe.tempoPreparo} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;