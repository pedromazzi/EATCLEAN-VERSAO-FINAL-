import React from "react";
import { Plus } from "lucide-react";

interface EmptyPlanSlotProps {
  onAddRecipe?: () => void;
}

const EmptyPlanSlot: React.FC<EmptyPlanSlotProps> = ({ onAddRecipe }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-32 bg-eatclean-light-gray rounded-lg border border-dashed border-eatclean-gray-inactive/50 text-eatclean-gray-inactive cursor-pointer hover:bg-eatclean-light-gray/80 transition-colors duration-200"
      onClick={onAddRecipe}
    >
      <Plus size={24} />
      <span className="text-sm mt-1 text-center">Adicionar receita</span>
    </div>
  );
};

export default EmptyPlanSlot;