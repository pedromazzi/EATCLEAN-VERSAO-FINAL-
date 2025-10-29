import { useParams } from "react-router-dom";

const ReceitaDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-eatclean-gray-text mb-4">Detalhes da Receita #{id}</h1>
      <p className="text-eatclean-gray-text">Aqui você verá os detalhes da receita selecionada.</p>
    </div>
  );
};

export default ReceitaDetalhe;