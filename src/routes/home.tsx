import { useState } from "react";
import { OrdemServicoTable } from "../Components/card/OrdemServicoTable";
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
        <span className="icon-button-cadastrar">+</span> Novo Serviço
      </button>

      <div className="card-container">
        <div className="card-grid">
          {data?.map((item) => (
            <OrdemServicoTable
              key={item.id}
              id={item.id}
              status={item.status}
              name={item.name}
              servico={item.servico}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <CreateModal />}
    </div>
  );
}