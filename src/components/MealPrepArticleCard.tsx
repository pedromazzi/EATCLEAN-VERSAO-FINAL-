import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface MealPrepArticleCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkTo?: string; // Opcional, para onde o card deve navegar
}

const MealPrepArticleCard: React.FC<MealPrepArticleCardProps> = ({
  imageSrc,
  title,
  description,
  linkTo,
}) => {
  const content = (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-eatclean-white rounded-xl shadow-sm cursor-pointer transition-transform duration-200 hover:scale-[1.01]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-32 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex-grow">
        <Badge className="bg-eatclean-primary-green/10 text-eatclean-primary-green hover:bg-eatclean-primary-green/10 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          Artigo
        </Badge>
        <h3 className="text-lg font-bold text-eatclean-gray-text mb-1">
          {title}
        </h3>
        <p className="text-sm text-eatclean-gray-inactive line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );

  return linkTo ? (
    <Link to={linkTo} onClick={() => console.log(`Navegando para: ${linkTo}`)}>
      {content}
    </Link>
  ) : (
    <div onClick={() => console.log(`Clicado no artigo: ${title}`)}>
      {content}
    </div>
  );
};

export default MealPrepArticleCard;