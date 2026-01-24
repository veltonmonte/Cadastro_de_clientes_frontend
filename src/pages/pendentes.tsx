import { useState } from "react";
import { OrdemServicoCard } from "../Components/card/OrdemServicoCard";
import { CreateModal } from "../Components/Create-modal/CreateModal";
import { useCadastroData } from "../hooks/useCadastroData";

export default function Pendentes() {
  const { data } = useCadastroData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const servicosPendentes = data?.filter((item) => item.status === false) || [];

  return (
    <div className="Container">
      <h1>Serviços Pendentes ({servicosPendentes.length})</h1>

      <button className="btn-primary" onClick={handleOpenModal}>
        <span className="icon-button-cadastrar">+</span> Novo Serviço
      </button>

      <div className="card-container">
        <div className="card-grid">
          {servicosPendentes.length > 0 ? (
            servicosPendentes.map((item) => (
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
            ))
          ) : (
            <p>Nenhum serviço pendente</p>
          )}
        </div>
      </div>

      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}

    </div>
  );
}
