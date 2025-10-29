import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import CategoryTabs from "@/components/CategoryTabs";
import { initialRecipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";

const categories = [
  "Todos",
  "Café da Manhã",
  "Almoço/Janta",
  "Snacks/Lanches",
  "Sopas e Caldos",
  "Marmitas Completas",
  "Sobremesas",
  "Bebidas",
];

const Explorar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(initialRecipes);

  useEffect(() => {
    let recipesToFilter = initialRecipes;

    // Filter by category
    if (activeCategory !== "Todos") {
      recipesToFilter = recipesToFilter.filter(
        (recipe) => recipe.categoria === activeCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      recipesToFilter = recipesToFilter.filter((recipe) =>
        recipe.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecipes(recipesToFilter);
  }, [searchTerm, activeCategory]);

  return (
    <div className="p-4">
      {/* Barra de Pesquisa */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-eatclean-gray-inactive" size={20} />
        <Input
          type="text"
          placeholder="Pesquisar receitas"
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-eatclean-light-gray border-none text-eatclean-gray-text placeholder:text-eatclean-gray-inactive focus:ring-2 focus:ring-eatclean-primary-green focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Abas de Categorias */}
      <div className="mb-6">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Grid de Receitas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p className="text-center text-eatclean-gray-inactive mt-8">
          Nenhuma receita encontrada para os critérios selecionados.
        </p>
      )}
    </div>
  );
};

export default Explorar;