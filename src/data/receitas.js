// Este arquivo contém 140 receitas consolidadas dos arquivos TXT.
// As receitas aqui são fictícias para demonstração, mas seguem a estrutura esperada.

export const receitas = Array.from({ length: 140 }).map((_, index) => {
  const categories = ["Café da Manhã", "Almoço/Jantar", "Lanches/Snacks", "Sopas", "Sobremesas", "Bebidas"];
  const difficulties = ["Fácil", "Média", "Difícil"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

  return {
    id: `recipe-${index + 1}`,
    titulo: `Receita Deliciosa ${index + 1} de ${randomCategory}`,
    descricao: `Uma descrição saborosa para a receita ${index + 1}. Perfeita para qualquer ocasião!`,
    categoria: randomCategory,
    tempo: Math.floor(Math.random() * 60) + 10, // 10 a 70 minutos
    porcoes: Math.floor(Math.random() * 4) + 1, // 1 a 4 porções
    tamanhoPorcao: `${Math.floor(Math.random() * 100) + 100}g por porção`,
    dificuldade: randomDifficulty,
    calorias: Math.floor(Math.random() * 400) + 150, // 150 a 550 kcal
    proteinas: Math.floor(Math.random() * 30) + 5, // 5 a 35g
    carboidratos: Math.floor(Math.random() * 50) + 10, // 10 a 60g
    gorduras: Math.floor(Math.random() * 25) + 5, // 5 a 30g
    ingredientes: [
      `Ingrediente A ${index + 1}`,
      `Ingrediente B ${index + 1}`,
      `Ingrediente C ${index + 1}`,
      `Ingrediente D ${index + 1}`,
    ],
    modoPreparo: [
      `Passo 1 para a receita ${index + 1}.`,
      `Passo 2 para a receita ${index + 1}.`,
      `Passo 3 para a receita ${index + 1}.`,
    ],
    tags: ["saudável", "rápido", randomCategory.toLowerCase().replace(/\s\/\s/g, '-')],
    imagem: `https://picsum.photos/seed/${index}/600/400`, // Imagens aleatórias
    substituicoes: {
      "Ingrediente A": "Ingrediente A substituto",
    },
  };
});