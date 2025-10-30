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
  porcoes: number; // Adicionado o campo porcoes
  tamanhoPorcao: string; // Adicionado o campo tamanhoPorcao
  informacoesNutricionais: {
    calorias: number;
    proteinas: number;
    gorduras: number;
    carboidratos: number;
  };
}