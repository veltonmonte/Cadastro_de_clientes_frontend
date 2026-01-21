import "./CreateModal.css";
import { useState } from "react";
import { useCadastroDataMutate } from "../../hooks/useCadastroMutate";
import type { CadastroData } from "../../interface/CadastroData";

interface InputProps {
  label: string;
  value: string;
  updateValue(value: string): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </div>
  );
};

export function CreateModal() {
  const [name, setName] = useState("");
  const [servico, setServico] = useState("");
  const [status, setStatus] = useState(false);

  const { mutate } = useCadastroDataMutate();

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cadastroData: CadastroData = {
      name,
      servico,
      status,
    };

    mutate(cadastroData);
    
    // Limpar formulário após envio
    setName("");
    setServico("");
    setStatus(false);
  }

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>Cadastre um novo cliente</h2>

        <form className="input-container" onSubmit={submitForm}>
          <Input label="Nome" value={name} updateValue={setName} />
          <Input label="Serviço" value={servico} updateValue={setServico} />

          <label>
            <input
              type="checkbox"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
            Concluído
          </label>

          <button onClick={submitForm} className="btn-secundario">Cadastrar</button>
        </form>
      </div> 
    </div>
  );
}
