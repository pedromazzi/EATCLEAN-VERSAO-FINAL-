import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ShoppingCart, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { initialRecipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import { loadWeeklyPlan } from "@/utils/planStorage";
import { toast } from "sonner";

const CHECKED_ITEMS_STORAGE_KEY = "eatclean_lista_compras_marcados";

const ListaCompras = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Função para carregar e consolidar ingredientes
  const generateShoppingList = useCallback((recipesToProcess: Recipe[]) => {
    const allIngredients = new Set<string>();
    recipesToProcess.forEach((recipe) => {
      recipe.ingredientes.forEach((ingredient) => {
        allIngredients.add(ingredient);
      });
    });
    return Array.from(allIngredients);
  }, []);

  // Efeito para carregar a lista de compras e o estado dos checkboxes
  useEffect(() => {
    let recipesFromPlan: Recipe[] = [];

    // 1. Tentar carregar receitas do estado de navegação (vindo do Plano Semanal)
    if (location.state && location.state.recipes) {
      recipesFromPlan = location.state.recipes as Recipe[];
    } else {
      // 2. Se não houver no estado, tentar carregar do Local Storage
      const storedPlan = loadWeeklyPlan();
      if (storedPlan) {
        const allRecipeIdsInPlan = storedPlan.plan.flatMap((day) =>
          day.meals.filter((id) => id !== null)
        ) as string[];
        const uniqueRecipeIds = Array.from(new Set(allRecipeIdsInPlan));
        recipesFromPlan = initialRecipes.filter((recipe) =>
          uniqueRecipeIds.includes(recipe.id)
        );
      }
    }

    const generatedList = generateShoppingList(recipesFromPlan);
    setShoppingList(generatedList);

    // Carregar estado dos checkboxes do Local Storage
    try {
      const storedCheckedItems = localStorage.getItem(CHECKED_ITEMS_STORAGE_KEY);
      if (storedCheckedItems) {
        setCheckedItems(new Set(JSON.parse(storedCheckedItems)));
      }
    } catch (error) {
      console.error("Erro ao carregar itens marcados do Local Storage:", error);
    }
  }, [location.state, generateShoppingList]);

  // Efeito para persistir o estado dos checkboxes
  useEffect(() => {
    try {
      localStorage.setItem(
        CHECKED_ITEMS_STORAGE_KEY,
        JSON.stringify(Array.from(checkedItems))
      );
    } catch (error) {
      console.error("Erro ao salvar itens marcados no Local Storage:", error);
    }
  }, [checkedItems]);

  const handleToggleCheck = (ingredient: string) => {
    setCheckedItems((prev) => {
      const newChecked = new Set(prev);
      if (newChecked.has(ingredient)) {
        newChecked.delete(ingredient);
      } else {
        newChecked.add(ingredient);
      }
      return newChecked;
    });
  };

  const handleClearChecked = () => {
    setCheckedItems(new Set());
    toast.info("Marcações limpas!");
  };

  const formatListText = (includeCheckboxes: boolean = true): string => {
    let listText = "📝 LISTA DE COMPRAS - EATCLEAN\n\n";
    shoppingList.forEach((ingredient) => {
      const isChecked = checkedItems.has(ingredient);
      const prefix = includeCheckboxes ? (isChecked ? "✅ " : "☐ ") : "";
      listText += `${prefix}${ingredient}\n`;
    });
    listText += `\nTotal: ${shoppingList.length} itens`;
    return listText;
  };

  const handleCopyList = () => {
    if (shoppingList.length === 0) {
      toast.error("A lista de compras está vazia.");
      return;
    }
    const textToCopy = formatListText(true);
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success("Lista copiada para a área de transferência!");
    }).catch((error) => {
      console.error("Erro ao copiar:", error);
      toast.error("Não foi possível copiar a lista.");
    });
  };

  const handleShareList = async () => {
    if (shoppingList.length === 0) {
      toast.error("A lista de compras está vazia.");
      return;
    }
    const textToShare = formatListText(true);
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Minha Lista de Compras - EatClean',
          text: textToShare,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error, "Tentando copiar para área de transferência.");
        handleCopyList(); // Fallback para copiar
      }
    } else {
      handleCopyList(); // Fallback para copiar
    }
  };

  const checkedCount = checkedItems.size;
  const totalItems = shoppingList.length;

  return (
    <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)] flex flex-col">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/plano-semanal")}
          className="text-eatclean-gray-text hover:bg-eatclean-light-gray"
        >
          <ChevronLeft size={24} />
        </Button>
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold text-eatclean-gray-text">
            Lista de Compras
          </h1>
          <p className="text-sm text-eatclean-gray-inactive">
            Ingredientes do seu plano semanal
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={handleClearChecked}
          className="text-eatclean-orange-highlight hover:bg-eatclean-light-gray text-sm px-2"
          disabled={checkedCount === 0}
        >
          Limpar marcações
        </Button>
      </div>

      {/* Contador de Itens */}
      {totalItems > 0 && (
        <p className="text-sm text-eatclean-gray-inactive text-right mb-4">
          {checkedCount} de {totalItems} itens marcados
        </p>
      )}

      {/* Conteúdo Principal */}
      <div className="flex-grow overflow-y-auto pb-4">
        {totalItems === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <ShoppingCart size={64} className="text-eatclean-gray-inactive mb-4" />
            <p className="text-xl font-semibold text-eatclean-gray-text mb-2">
              Nenhuma lista de compras gerada ainda
            </p>
            <p className="text-eatclean-gray-inactive mb-6">
              Gere um plano semanal primeiro para criar sua lista.
            </p>
            <Button
              className="bg-eatclean-primary-green hover:bg-eatclean-primary-green/90 text-eatclean-white rounded-full px-6 py-3"
              onClick={() => navigate("/plano-semanal")}
            >
              Criar Plano Semanal
            </Button>
          </div>
        ) : (
          <div className="bg-eatclean-white rounded-xl shadow-sm p-4 space-y-3">
            {shoppingList.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-eatclean-light-gray/50 rounded-md px-2 -mx-2"
                onClick={() => handleToggleCheck(ingredient)}
              >
                <Checkbox
                  id={`ingredient-${index}`}
                  checked={checkedItems.has(ingredient)}
                  onCheckedChange={() => handleToggleCheck(ingredient)}
                  className="h-5 w-5 rounded-full border-eatclean-gray-inactive data-[state=checked]:bg-eatclean-primary-green data-[state=checked]:text-eatclean-white"
                />
                <Label
                  htmlFor={`ingredient-${index}`}
                  className={cn(
                    "text-base text-eatclean-gray-text flex-grow cursor-pointer",
                    checkedItems.has(ingredient) && "line-through text-eatclean-gray-inactive"
                  )}
                >
                  {ingredient}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botões de Ação no Rodapé */}
      {totalItems > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            variant="outline"
            className="flex-grow border-eatclean-orange-highlight text-eatclean-orange-highlight hover:bg-eatclean-orange-highlight/10"
            onClick={handleCopyList}
          >
            <Copy size={18} className="mr-2" />
            Copiar Lista
          </Button>
          <Button
            variant="outline"
            className="flex-grow border-eatclean-gray-inactive text-eatclean-gray-text hover:bg-eatclean-light-gray"
            onClick={handleShareList}
          >
            <Share2 size={18} className="mr-2" />
            Compartilhar
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListaCompras;