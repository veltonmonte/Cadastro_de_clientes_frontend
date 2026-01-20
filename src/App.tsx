import './App.css';
import { OrdemServicoTable } from './Components/card/OrdemServicoTable';
import { useCadastroData } from './hooks/useCadastroData';

function App() {

  const { data } = useCadastroData();

  console.log(data);

  return (
    <div className='Container'>
      <h1>Cadastro</h1>

      <div className='card-container'>
        <div className='card-grid'>
          {data?.map(item => (
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
    </div>
  );
}

export default App;
