import "./App.css";
import { OrdemServicoTable } from "./Components/card/OrdemServicoTable";
import { CreateModal } from "./Components/Create-modal/CreateModal";
import { useCadastroData } from "./hooks/useCadastroData";
import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const { data } = useCadastroData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleopenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  console.log(data);

  return (
    <div className="navbar-container">
      <nav className="navbar-sidebar">
        <Navbar />
      </nav>
      <main className="navbar-content">
        <div className="Container">
          <button className="btn-primary" onClick={handleopenModal}>
           <p className="icon-button-cadastrar">+ </p> Novo Serviço
          </button>
          <div className="card-container">
            <div className="card-grid">
              {data?.map((item) => (
                <OrdemServicoTable
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
      </main>
    </div>
  );
}

export default App;
