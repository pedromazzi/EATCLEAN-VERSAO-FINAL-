import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ShoppingCart, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { receitas } from "@/data/receitas";
import { loadWeeklyPlan } from "@/utils/planStorage";
import { toast } from "sonner";
// import PageTransition from "@/components/PageTransition"; // Removido temporariamente
import ScrollToTop from "@/components/ScrollToTop";

const CHECKED_ITEMS_STORAGE_KEY = "eatclean_lista_compras_marcados";

const ingredientesParaIgnorar = [
  'gelo',
  'água',
  'água filtrada',
  'água de coco gelada',
  'a gosto',
  'sal a gosto',
  'pimenta a gosto',
  'temperos a gosto',
  'azeite a gosto',
  'azeite de oliva a gosto',
  'azeite de oliva extra virgem a gosto',
  'azeite extra virgem a gosto',
];

const deveIgnorarIngrediente = (ingrediente: string): boolean => {
  const ingredienteLower = ingrediente.toLowerCase();
  return ingredientesParaIgnorar.some(item => 
    ingredienteLower === item || ingredienteLower.includes(item)
  );
};

const cleanIngredientName = (ingredient: string): string | null => {
  if (typeof ingredient !== 'string') return null;

  let cleaned = ingredient.toLowerCase().trim();
  
  cleaned = cleaned.replace(/^uma?\s+/gi, '');
  cleaned = cleaned.replace(/pitada\s+(de|do|da)?\s*/gi, '');
  cleaned = cleaned.replace(/^(\d+\s?)?(\/\d+)?(\s)?(xícara|xícaras|colher|colheres|sopa|chá|litro|litros|g|kg|ml|l|unidade|unidades|dente|dentes|folhas|folha|talo|talos|peito|médio|média|grande|pequeno|pequena)(\s)?(de|do|da)\s/gi, '');
  cleaned = cleaned.replace(/^(\d+)(\/\d+)?\s*/g, '');
  cleaned = cleaned.replace(/^(xícara|xícaras|colher|colheres|sopa|chá|litro|litros|unidade|unidades|dente|dentes|folhas|folha|talo|talos|peito)\s+(de|do|da)?\s*/gi, '');
  cleaned = cleaned.replace(/\s+(picado|picada|picados|picadas|cortado|cortada|ralado|ralada|desfiado|desfiada|fatiado|fatiada|em cubos|em tiras|em tiras finas|ao meio|cozido|cozida|a vapor|grelhado|grelhada|fresco|fresca|maduro|madura|congelado|congelada|gelado|gelada)/gi, '');
  cleaned = cleaned.replace(/\s+(extra|virgem|sem açúcar|natural|integral|vegetal|light|em flocos|secas|verde)/gi, '');
  cleaned = cleaned.replace(/\s+(para finalizar|a gosto|opcional)/gi, '');
  cleaned = cleaned.replace(/\(.*?\)/g, '');
  cleaned = cleaned.replace(/^(folhas|folha|suco|sopa|chá|litro|caldo|molho|extrato|pasta|sementes)\s+(de|do|da)?\s*/gi, '');
  cleaned = cleaned.replace(/^(de|do|da|e|ou|em)\s+/gi, '');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  if (cleaned.length < 3) return null;
  
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

const normalizarIngrediente = (ingredient: string): string => {
  if (typeof ingredient !== 'string') return ingredient;

  const dicionario: { [key: string]: string } = {
    'sal': 'Sal',
    'pimenta': 'Pimenta',
    'sal e pimenta': 'Sal e pimenta',
    'temperos': 'Temperos variados',
    'azeite': 'Azeite de oliva',
    'azeite oliva': 'Azeite de oliva',
    'cebola roxa': 'Cebola roxa',
    'cebola': 'Cebola',
    'tomate cereja': 'Tomate cereja',
    'tomate': 'Tomate',
    'batata doce': 'Batata doce',
    'batata': 'Batata',
    'pimentão': 'Pimentão',
    'brócolis': 'Brócolis',
    'alface': 'Alface',
    'espinafre': 'Espinafre',
    'cenoura': 'Cenoura',
    'pepino': 'Pepino',
    'aipo': 'Aipo',
    'maçã': 'Maçã',
    'coentro': 'Coentro',
    'salsinha': 'Salsinha',
    'hortelã': 'Hortelã',
    'ervas': 'Ervas frescas',
    'frango': 'Frango',
    'quinoa': 'Quinoa',
    'aveia': 'Aveia',
    'abacate': 'Abacate',
    'banana': 'Banana',
    'limão': 'Limão',
    'leite': 'Leite vegetal',
    'iogurte': 'Iogurte',
    'cacau em pó': 'Cacau em pó',
    'amendoim': 'Pasta de amendoim',
    'chia': 'Sementes de chia',
    'homus': 'Homus',
    'tortilha': 'Tortilha integral',
    'baunilha': 'Extrato de baunilha',
    'mel': 'Mel',
    'xarope': 'Xarope',
    'adoçante': 'Adoçante',
    'água coco': 'Água de coco',
    'caldo': 'Caldo de legumes',
    'frutas': 'Frutas secas',
    'legumes': 'Legumes variados'
  };
  
  const ingredientLower = ingredient.toLowerCase();
  
  for (const [key, value] of Object.entries(dicionario)) {
    if (ingredientLower === key || ingredientLower.includes(key)) {
      return value;
    }
  }
  
  return ingredient;
};

const ListaCompras = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const generateShoppingList = useCallback((recipesToProcess: Recipe[]) => {
    const ingredientesArray: string[] = [];
    let temSalOuPimenta = false;
    
    recipesToProcess.forEach((recipe) => {
      recipe.ingredientes.forEach((rawIngredient) => {
        if (deveIgnorarIngrediente(rawIngredient)) {
          return;
        }
        
        const cleaned = cleanIngredientName(rawIngredient);
        if (cleaned) {
          const normalized = normalizarIngrediente(cleaned);
          
          const normalizedLower = normalized.toLowerCase();
          if (normalizedLower.includes('sal') || normalizedLower.includes('pimenta')) {
            temSalOuPimenta = true;
          } else {
            if (!ingredientesArray.includes(normalized)) {
              ingredientesArray.push(normalized);
            }
          }
        }
      });
    });
    
    if (temSalOuPimenta) {
      ingredientesArray.push('Sal e pimenta');
    }
    
    return ingredientesArray.sort((a, b) => {
      const strA = String(a).toLowerCase();
      const strB = String(b).toLowerCase();
      return strA < strB ? -1 : strA > strB ? 1 : 0;
    });
  }, []);

  useEffect(() => {
    let recipesToProcess: Recipe[] = [];

    if (location.state && location.state.recipes) {
      recipesToProcess = location.state.recipes as Recipe[];
    } else {
      const storedPlan = loadWeeklyPlan();
      if (storedPlan) {
        const allRecipeIdsInPlan = storedPlan.plan.flatMap((day) =>
          day.meals.filter((id) => id !== null)
        ) as string[];
        const uniqueRecipeIds = Array.from(new Set(allRecipeIdsInPlan));
        recipesToProcess = receitas.filter((recipe) =>
          uniqueRecipeIds.includes(recipe.id)
        );
      }
    }

    const generatedList = generateShoppingList(recipesToProcess);
    setShoppingList(generatedList);

    try {
      const storedCheckedItems = localStorage.getItem(CHECKED_ITEMS_STORAGE_KEY);
      if (storedCheckedItems) {
        setCheckedItems(new Set(JSON.parse(storedCheckedItems)));
      }
    } catch (error) {
      console.error("Erro ao carregar itens marcados do Local Storage:", error);
    }
  }, [location.state, generateShoppingList]);

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
        handleCopyList();
      }
    } else {
      handleCopyList();
    }
  };

  const checkedCount = checkedItems.size;
  const totalItems = shoppingList.length;

  return (
    // <PageTransition> {/* Removido temporariamente */}
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
                >
                  <Checkbox
                    id={`ingredient-${index}`}
                    checked={checkedItems.has(ingredient)}
                    onCheckedChange={(checked) => handleToggleCheck(ingredient)}
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
        <ScrollToTop />
      </div>
    // </PageTransition> {/* Removido temporariamente */}
  );
};

export default ListaCompras;