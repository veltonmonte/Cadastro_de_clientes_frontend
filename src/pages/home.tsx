import { useState } from "react";
import { OrdemServicoCard } from "../Components/card/OrdemServicoCard";
import { CreateModal } from "../Components/Create-modal/CreateModal";
import { useCadastroData } from "../hooks/useCadastroData";

export default function Home() {
  const { data } = useCadastroData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="Container">
      <h1>Todos os Serviços</h1>
      <button className="btn-primary" onClick={handleOpenModal}>
        <span className="icon-button-cadastrar"><img src="./public/adicionar.png" alt="" /></span> Novo Serviço
      </button>

      <div className="card-container">
        <div className="card-grid">
          {data?.map((item) => (
            <OrdemServicoCard
              key={item.id}
              id={item.id}
              status={item.status}
              name={item.name}
              servico={item.servico}
              quantidade={item.quantidade}
              modelo={item.modelo}
              data_entrada={item.data_entrada}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
    </div>
  );
}
