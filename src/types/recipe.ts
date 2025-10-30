export interface Recipe {
  id: string;
  titulo: string; // Novo nome para 'nome'
  descricao: string;
  categoria: string;
  tempo: number; // Novo nome para 'tempoPreparo'
  porcoes: number;
  tamanhoPorcao: string;
  dificuldade?: string; // Opcional
  calorias: number; // Agora no nível superior
  proteinas: number; // Agora no nível superior
  carboidratos: number; // Agora no nível superior
  gorduras: number; // Agora no nível superior
  ingredientes: string[];
  modoPreparo: string[];
  tags?: string[]; // Opcional
  imagem: string;
  substituicoes?: { [key: string]: string }; // Opcional
}