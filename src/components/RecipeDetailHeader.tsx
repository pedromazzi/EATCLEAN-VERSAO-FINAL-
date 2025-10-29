import React from "react";
import { ChevronLeft, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/utils/toast";

interface RecipeDetailHeaderProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const RecipeDetailHeader: React.FC<RecipeDetailHeaderProps> = ({
  isFavorite,
  onToggleFavorite,
}) => {
  const navigate = useNavigate();

  const handleShare = () => {
    // Implementar funcionalidade de compartilhamento real se necessário
    toast.success("Link da receita copiado para a área de transferência!");
    navigator.clipboard.writeText(window.location.href);
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
          onClick={onToggleFavorite}
          className="text-eatclean-gray-text hover:bg-eatclean-light-gray"
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
          onClick={handleShare}
          className="text-eatclean-gray-text hover:bg-eatclean-light-gray"
        >
          <Share2 size={24} />
        </Button>
      </div>
    </header>
  );
};

export default RecipeDetailHeader;