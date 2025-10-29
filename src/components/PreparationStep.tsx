import React from "react";

interface PreparationStepProps {
  stepNumber: number;
  stepText: string;
}

const PreparationStep: React.FC<PreparationStepProps> = ({ stepNumber, stepText }) => {
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-eatclean-primary-green flex items-center justify-center text-eatclean-white font-bold text-sm">
        {stepNumber}
      </div>
      <p className="text-eatclean-gray-text text-base flex-grow">{stepText}</p>
    </div>
  );
};

export default PreparationStep;