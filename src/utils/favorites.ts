const FAVORITES_STORAGE_KEY = "eatclean_favoritos";

export const getFavoriteRecipeIds = (): string[] => {
  try {
    const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Erro ao ler favoritos do Local Storage:", error);
    return [];
  }
};

export const addFavoriteRecipeId = (recipeId: string): void => {
  const favorites = getFavoriteRecipeIds();
  if (!favorites.includes(recipeId)) {
    favorites.push(recipeId);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }
};

export const removeFavoriteRecipeId = (recipeId: string): void => {
  let favorites = getFavoriteRecipeIds();
  favorites = favorites.filter((id) => id !== recipeId);
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
};

export const checkIsFavorite = (recipeId: string): boolean => {
  const favorites = getFavoriteRecipeIds();
  return favorites.includes(recipeId);
};