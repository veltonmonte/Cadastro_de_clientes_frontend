import { useState } from "react";
import { OrdemServicoTable } from "../Components/card/OrdemServicoTable";
import { CreateModal } from "../Components/Create-modal/CreateModal";
import { useCadastroData } from "../hooks/useCadastroData";

export default function Concluidos() {
  const { data } = useCadastroData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const servicosConcluidos =
    data?.filter((item) => item.status === true) || [];

  return (
    <div className="Container">
      <h1>Serviços Concluídos</h1>

      <button className="btn-primary" onClick={handleOpenModal}>
        <span className="icon-button-cadastrar">+</span> Novo Serviço
      </button>

      <div className="card-container">
        <div className="card-grid">
          {servicosConcluidos.length > 0 ? (
            servicosConcluidos.map((item) => (
              <OrdemServicoTable
                key={item.id}
                id={item.id}
                status={item.status}
                name={item.name}
                servico={item.servico}
              />
            ))
          ) : (
            <p>Nenhum serviço concluído</p>
          )}
        </div>
      </div>

      {isModalOpen && <CreateModal />}
    </div>
  );
}
