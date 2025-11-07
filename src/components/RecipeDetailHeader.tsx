import React, { useState } from "react";
import { ChevronLeft, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface RecipeDetailHeaderProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
}

const RecipeDetailHeader: React.FC<RecipeDetailHeaderProps> = ({
  isFavorite,
  onToggleFavorite,
  onShare,
}) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar a animação

  const handleFavoriteClick = () => {
    onToggleFavorite(); // Chama a função de toggle do pai
    setIsAnimating(true); // Inicia a animação
    setTimeout(() => setIsAnimating(false), 600); // Remove a classe após a duração da animação
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eatclean-white/80 backdrop-blur-sm p-4 flex justify-between items-center h-16">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate(-1)}
        className="text-eatclean-gray-text hover:bg-eatclean-light-gray"
      >
        <ChevronLeft size={24} />
      </Button>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleFavoriteClick} // Usa a nova função de clique
          className={`text-eatclean-gray-text hover:bg-eatclean-light-gray ${isAnimating ? 'heart-beat' : ''}`} // Aplica a classe de animação
        >
          <Heart
            size={24}
            fill={isFavorite ? "hsl(var(--eatclean-orange-highlight))" : "none"}
            stroke={isFavorite ? "hsl(var(--eatclean-orange-highlight))" : "currentColor"}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onShare}
          className="text-eatclean-gray-text hover:bg-eatclean-light-gray"
        >
          <Share2 size={24} />
        </Button>
      </div>
    </header>
  );
};

export default RecipeDetailHeader;