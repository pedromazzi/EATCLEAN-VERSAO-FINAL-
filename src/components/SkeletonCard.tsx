const SkeletonCard = () => {
  return (
    <div className="bg-eatclean-white rounded-2xl shadow-sm overflow-hidden border-2 border-transparent animate-pulse">
      {/* Skeleton da Imagem */}
      <div className="w-full h-48 bg-eatclean-light-gray"></div>
      
      {/* Skeleton do Conteúdo */}
      <div className="p-4 space-y-3">
        {/* Título */}
        <div className="h-6 bg-eatclean-light-gray rounded w-3/4"></div>
        
        {/* Descrição */}
        <div className="h-4 bg-eatclean-light-gray rounded w-full"></div>
        <div className="h-4 bg-eatclean-light-gray rounded w-1/2"></div>

        {/* Tempo e Calorias */}
        <div className="flex items-center justify-between text-sm pt-2">
          <div className="h-4 bg-eatclean-light-gray rounded w-20"></div>
          <div className="h-4 bg-eatclean-light-gray rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;