import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import CategoryTabs from "@/components/CategoryTabs";
import { receitas } from "@/data/receitas"; // Importação atualizada
import { Recipe } from "@/types/recipe";
import ScrollToTop from "@/components/ScrollToTop"; // Nova importação

const categories = [
  "Todos",
  "Café da Manhã",
  "Almoço/Jantar",
  "Lanches/Snacks", // Mapeado de "Snacks/Lanches"
  "Sopas", // Mapeado de "Sopas e Caldos"
  "Sobremesas",
  "Bebidas",
];

const Explorar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(receitas); // Usando 'receitas'

  useEffect(() => {
    let recipesToFilter = receitas; // Usando 'receitas'

    // Filter by category
    if (activeCategory !== "Todos") {
      // Mapeamento de categorias para compatibilidade
      const mappedCategory = activeCategory === "Lanches/Snacks" ? "Lanches/Snacks" :
                             activeCategory === "Sopas" ? "Sopas" : activeCategory;
      
      recipesToFilter = recipesToFilter.filter(
        (recipe) => recipe.categoria === mappedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      recipesToFilter = recipesToFilter.filter((recipe) =>
        recipe.titulo.toLowerCase().includes(searchTerm.toLowerCase()) // Usando 'titulo'
      );
    }

    setFilteredRecipes(recipesToFilter);
  }, [searchTerm, activeCategory]);

  return (
    <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)]">
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
      <ScrollToTop />
    </div>
  );
};

export default Explorar;