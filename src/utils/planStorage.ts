import { Recipe } from "@/types/recipe";

export interface PlanConfig {
  days: number;
  mealsPerDay: number;
}

export interface PlanDay {
  dayName: string;
  meals: (string | null)[]; // Armazena apenas os IDs das receitas
}

export interface WeeklyPlan {
  config: PlanConfig;
  plan: PlanDay[];
}

const PLAN_STORAGE_KEY = "eatclean_plano_semanal";

export const saveWeeklyPlan = (plan: WeeklyPlan): void => {
  try {
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plan));
  } catch (error) {
    console.error("Erro ao salvar plano semanal no Local Storage:", error);
  }
};

export const loadWeeklyPlan = (): WeeklyPlan | null => {
  try {
    const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
    return storedPlan ? JSON.parse(storedPlan) : null;
  } catch (error) {
    console.error("Erro ao carregar plano semanal do Local Storage:", error);
    return null;
  }
};

export const clearWeeklyPlan = (): void => {
  try {
    localStorage.removeItem(PLAN_STORAGE_KEY);
  } catch (error) {
    console.error("Erro ao limpar plano semanal do Local Storage:", error);
  }
};