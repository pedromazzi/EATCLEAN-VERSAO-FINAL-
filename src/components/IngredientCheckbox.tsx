import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface IngredientCheckboxProps {
  ingredient: string;
}

const IngredientCheckbox: React.FC<IngredientCheckboxProps> = ({ ingredient }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center space-x-3 py-2">
      <Checkbox
        id={`ingredient-${ingredient}`}
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked as boolean)}
        className="h-5 w-5 rounded-full border-eatclean-gray-inactive data-[state=checked]:bg-eatclean-primary-green data-[state=checked]:text-eatclean-white"
      />
      <Label
        htmlFor={`ingredient-${ingredient}`}
        className={cn(
          "text-base text-eatclean-gray-text",
          isChecked && "line-through text-eatclean-gray-inactive"
        )}
      >
        {ingredient}
      </Label>
    </div>
  );
};

export default IngredientCheckbox;