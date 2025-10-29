export interface Recipe {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  calorias: number;
  tempoPreparo: number;
  imagem: string;
  ingredientes: string[];
  modoPreparo: string[];
  informacoesNutricionais: {
    calorias: number;
    proteinas: number;
    gorduras: number;
    carboidratos: number;
  };
}