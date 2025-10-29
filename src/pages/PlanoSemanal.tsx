import React, { useState, useEffect, useCallback } from "react";
import { Shuffle, ShoppingCart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initialRecipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import PlanRecipeCard from "@/components/PlanRecipeCard";
import EmptyPlanSlot from "@/components/EmptyPlanSlot";
import {
  saveWeeklyPlan,
  loadWeeklyPlan,
  WeeklyPlan,
  PlanConfig,
  PlanDay,
} from "@/utils/planStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const dayNames = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

const PlanoSemanal = () => {
  const navigate = useNavigate();
  const [numDays, setNumDays] = useState<number>(7);
  const [mealsPerDay, setMealsPerDay] = useState<number>(3);
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan | null>(null);

  useEffect(() => {
    const storedPlan = loadWeeklyPlan();
    if (storedPlan) {
      setWeeklyPlan(storedPlan);
      setNumDays(storedPlan.config.days);
      setMealsPerDay(storedPlan.config.mealsPerDay);
    }
  }, []);

  const getRandomRecipe = (excludeIds: string[] = []): Recipe | null => {
    const availableRecipes = initialRecipes.filter(
      (recipe) => !excludeIds.includes(recipe.id)
    );
    if (availableRecipes.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableRecipes.length);
    return availableRecipes[randomIndex];
  };

  const generateAutomaticPlan = useCallback(() => {
    if (initialRecipes.length === 0) {
      toast.error("Não há receitas disponíveis para gerar o plano.");
      return;
    }

    const newPlan: PlanDay[] = [];
    for (let i = 0; i < numDays; i++) {
      const dayPlan: PlanDay = {
        dayName: dayNames[i],
        meals: [],
      };
      const recipesUsedToday: string[] = [];
      for (let j = 0; j < mealsPerDay; j++) {
        const recipe = getRandomRecipe(recipesUsedToday);
        if (recipe) {
          dayPlan.meals.push(recipe.id);
          recipesUsedToday.push(recipe.id);
        } else {
          dayPlan.meals.push(null); // No more unique recipes for the day
        }
      }
      newPlan.push(dayPlan);
    }

    const planConfig: PlanConfig = { days: numDays, mealsPerDay: mealsPerDay };
    const fullWeeklyPlan: WeeklyPlan = { config: planConfig, plan: newPlan };
    setWeeklyPlan(fullWeeklyPlan);
    saveWeeklyPlan(fullWeeklyPlan);
    toast.success("Plano semanal gerado automaticamente!");
  }, [numDays, mealsPerDay]);

  const replaceRecipe = useCallback(
    (dayIndex: number, mealIndex: number) => {
      if (!weeklyPlan) return;

      const updatedPlan = { ...weeklyPlan };
      const currentDayMeals = [...updatedPlan.plan[dayIndex].meals];
      const recipesUsedToday = currentDayMeals.filter(
        (id) => id !== currentDayMeals[mealIndex]
      ) as string[];

      const newRecipe = getRandomRecipe(recipesUsedToday);
      if (newRecipe) {
        updatedPlan.plan[dayIndex].meals[mealIndex] = newRecipe.id;
        setWeeklyPlan(updatedPlan);
        saveWeeklyPlan(updatedPlan);
        toast.success("Receita substituída!");
      } else {
        toast.error("Não há outras receitas disponíveis para substituir.");
      }
    },
    [weeklyPlan]
  );

  const handleGenerateShoppingList = () => {
    if (!weeklyPlan || weeklyPlan.plan.length === 0) {
      toast.error("Gere um plano antes de criar a lista de compras.");
      return;
    }

    const allRecipeIdsInPlan = weeklyPlan.plan.flatMap((day) =>
      day.meals.filter((id) => id !== null)
    ) as string[];

    const uniqueRecipeIds = Array.from(new Set(allRecipeIdsInPlan));

    const recipesForShoppingList = initialRecipes.filter((recipe) =>
      uniqueRecipeIds.includes(recipe.id)
    );

    // This would typically pass data via context or a more robust state management.
    // For now, we'll just navigate and assume ListaCompras can fetch based on IDs if needed,
    // or we'd implement a more direct data passing mechanism.
    // For this example, we'll just navigate.
    navigate("/lista-compras", { state: { recipes: recipesForShoppingList } });
    toast.info("Gerando lista de compras...");
  };

  const handleExportPlan = () => {
    if (!weeklyPlan) {
      toast.error("Gere um plano antes de exportar.");
      return;
    }
    const dataStr = JSON.stringify(weeklyPlan, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", "plano-semanal-eatclean.json");
    link.click();
    toast.success("Plano exportado com sucesso!");
  };

  return (
    <div className="p-4 bg-eatclean-light-gray min-h-[calc(100vh-128px)]">
      <h1 className="text-3xl font-bold text-eatclean-gray-text mb-2">
        Plano Semanal
      </h1>
      <p className="text-eatclean-gray-inactive text-base mb-6">
        Monte seu plano de refeições personalizado
      </p>

      {/* Configuração do Plano */}
      <div className="bg-eatclean-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">
          Configurar Plano
        </h2>

        {/* Seletor de NÚMERO DE DIAS */}
        <div className="mb-4">
          <p className="text-eatclean-gray-text font-medium mb-2">
            Quantos dias?
          </p>
          <div className="flex gap-2">
            {[3, 5, 7].map((days) => (
              <Button
                key={days}
                variant={numDays === days ? "default" : "outline"}
                className={
                  numDays === days
                    ? "bg-eatclean-primary-green text-eatclean-white hover:bg-eatclean-primary-green/90"
                    : "border-eatclean-gray-inactive text-eatclean-gray-text hover:bg-eatclean-light-gray"
                }
                onClick={() => setNumDays(days)}
              >
                {days} dias
              </Button>
            ))}
          </div>
        </div>

        {/* Seletor de REFEIÇÕES POR DIA */}
        <div className="mb-6">
          <p className="text-eatclean-gray-text font-medium mb-2">
            Quantas refeições por dia?
          </p>
          <div className="flex gap-2">
            {[2, 3].map((meals) => (
              <Button
                key={meals}
                variant={mealsPerDay === meals ? "default" : "outline"}
                className={
                  mealsPerDay === meals
                    ? "bg-eatclean-primary-green text-eatclean-white hover:bg-eatclean-primary-green/90"
                    : "border-eatclean-gray-inactive text-eatclean-gray-text hover:bg-eatclean-light-gray"
                }
                onClick={() => setMealsPerDay(meals)}
              >
                {meals} refeições
              </Button>
            ))}
          </div>
        </div>

        {/* BOTÃO "GERAR PLANO AUTOMÁTICO" */}
        <Button
          className="w-full bg-eatclean-primary-green hover:bg-eatclean-primary-green/90 text-eatclean-white rounded-xl py-3 text-lg font-semibold flex items-center justify-center gap-2"
          onClick={generateAutomaticPlan}
        >
          <Shuffle size={20} />
          Gerar Plano Automático
        </Button>
      </div>

      {/* Grade do Plano */}
      {weeklyPlan && weeklyPlan.plan.length > 0 && (
        <div className="bg-eatclean-white rounded-xl shadow-sm p-4 mb-6">
          <h2 className="text-xl font-bold text-eatclean-gray-text mb-4">
            Seu Plano
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] table-fixed">
              <thead>
                <tr className="text-left text-sm font-medium text-eatclean-gray-inactive border-b border-eatclean-light-gray">
                  <th className="w-1/5 py-2 px-2">Dia</th>
                  {Array.from({ length: mealsPerDay }).map((_, i) => (
                    <th key={i} className="w-auto py-2 px-2">
                      Refeição {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeklyPlan.plan.map((day, dayIndex) => (
                  <tr
                    key={day.dayName}
                    className="border-b border-eatclean-light-gray last:border-b-0"
                  >
                    <td className="py-3 px-2 align-top">
                      <span className="font-semibold text-eatclean-gray-text">
                        {day.dayName}
                      </span>
                    </td>
                    {day.meals.map((recipeId, mealIndex) => (
                      <td key={mealIndex} className="py-3 px-2 align-top">
                        {recipeId ? (
                          <PlanRecipeCard
                            recipe={
                              initialRecipes.find((r) => r.id === recipeId)!
                            }
                            onReplace={() => replaceRecipe(dayIndex, mealIndex)}
                          />
                        ) : (
                          <EmptyPlanSlot
                          // onAddRecipe={() => handleAddRecipeManually(dayIndex, mealIndex)} // Implementar modal para seleção manual
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Botões de Ação do Plano */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              variant="outline"
              className="flex-grow border-eatclean-orange-highlight text-eatclean-orange-highlight hover:bg-eatclean-orange-highlight/10"
              onClick={handleGenerateShoppingList}
            >
              <ShoppingCart size={18} className="mr-2" />
              Gerar Lista de Compras
            </Button>
            <Button
              variant="outline"
              className="flex-grow border-eatclean-gray-inactive text-eatclean-gray-text hover:bg-eatclean-light-gray"
              onClick={handleExportPlan}
            >
              <Download size={18} className="mr-2" />
              Exportar Plano
            </Button>
          </div>
        </div>
      )}

      {!weeklyPlan && (
        <div className="text-center text-eatclean-gray-inactive py-12">
          <p className="text-lg mb-4">
            Configure o número de dias e refeições e gere seu plano!
          </p>
          <Button
            className="bg-eatclean-primary-green hover:bg-eatclean-primary-green/90 text-eatclean-white rounded-xl py-3 text-lg font-semibold flex items-center justify-center gap-2 mx-auto"
            onClick={generateAutomaticPlan}
          >
            <Shuffle size={20} />
            Gerar Primeiro Plano
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlanoSemanal;