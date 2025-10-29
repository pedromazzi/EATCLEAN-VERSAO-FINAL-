import React from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex overflow-x-auto no-scrollbar py-2 px-4 -mx-4"> {/* -mx-4 para compensar o padding do pai e permitir scroll completo */}
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
              transition-colors duration-200
              ${
                activeCategory === category
                  ? "bg-eatclean-primary-green text-eatclean-white"
                  : "bg-eatclean-light-gray text-eatclean-gray-text hover:bg-eatclean-light-gray/80"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;