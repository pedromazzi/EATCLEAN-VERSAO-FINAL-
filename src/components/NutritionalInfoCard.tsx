import React from "react";

interface NutritionalInfoCardProps {
  label: string;
  value: number;
  unit: string;
}

const NutritionalInfoCard: React.FC<NutritionalInfoCardProps> = ({ label, value, unit }) => {
  return (
    <div className="bg-eatclean-light-gray rounded-xl p-4 flex flex-col items-center justify-center text-center h-full">
      <p className="text-sm text-eatclean-gray-inactive mb-1">{label}</p>
      <p className="text-3xl font-bold text-eatclean-orange-highlight leading-none">
        {value}
      </p>
      <p className="text-sm text-eatclean-gray-inactive mt-1">{unit}</p>
    </div>
  );
};

export default NutritionalInfoCard;