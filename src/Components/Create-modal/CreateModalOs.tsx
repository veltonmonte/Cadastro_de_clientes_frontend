import "./CreateModalOs.css";
import { useCadastroDelete } from "../../hooks/useCadastroDelete";

interface ModalProps {
  closeModal(): void;
  id?: number;
  name: string;
  servico: string;
  status: boolean;
  quantidade: number;
  modelo: string;
  data_entrada: string;
}

export function CreateModalOs({
  closeModal,
  name,
  servico,
  status,
  id,
  quantidade,
  modelo,
  data_entrada
}: ModalProps) {
  const statusServico = status ? "Concluído" : "Pendente";
  const { deleteCadastro } = useCadastroDelete();

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <h2>Detalhes da Ordem de Serviço</h2>

        <div className="modal-content">
          <p>
            <strong>Cliente:</strong> {name}
          </p>
          <p>
            <strong>Serviço:</strong> {servico}
          </p>
          <p>
            <strong>Status:</strong> {statusServico}
          </p>
          <p>
            <strong>OS:</strong> #{id}
          </p>
          <p>
            <strong>Modelo:</strong> {modelo}
          </p>
          <p>
            <strong>Quantidade:</strong> {quantidade}
          </p>
          <p>
            <strong>Data de Entrada:</strong> {data_entrada}
          </p>
        </div>

        <button className="btn-secondary" onClick={closeModal}>
          Fechar
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            if (!id) return;

            if (confirm("Tem certeza que deseja excluir esta OS?")) {
              deleteCadastro(id);
              closeModal();
            }
          }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
