import React from "react";
import { Flame, RefreshCw } from "lucide-react";
import { Recipe } from "@/types/recipe";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PlanRecipeCardProps {
  recipe: Recipe;
  onReplace: () => void;
}

const PlanRecipeCard: React.FC<PlanRecipeCardProps> = ({ recipe, onReplace }) => {
  return (
    <div className="relative bg-eatclean-white rounded-lg shadow-sm overflow-hidden h-32 flex">
      <Link to={`/receita/${recipe.id}`} className="flex-shrink-0 w-1/3">
        <img
          src={recipe.imagem}
          alt={recipe.nome}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex-grow p-2 flex flex-col justify-between">
        <Link to={`/receita/${recipe.id}`}>
          <h4 className="text-sm font-semibold text-eatclean-gray-text line-clamp-2 leading-tight">
            {recipe.nome}
          </h4>
        </Link>
        <div className="flex items-center gap-1 text-xs text-eatclean-orange-highlight">
          <Flame size={12} />
          <span>{recipe.calorias} kcal</span>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1 right-1 h-6 w-6 rounded-full bg-eatclean-light-gray/80 text-eatclean-gray-inactive hover:bg-eatclean-light-gray"
        onClick={onReplace}
      >
        <RefreshCw size={14} />
      </Button>
    </div>
  );
};

export default PlanRecipeCard;