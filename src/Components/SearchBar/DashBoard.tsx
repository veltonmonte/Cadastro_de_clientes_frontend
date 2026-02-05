import { useState } from "react";
import { Searchbar } from "./Searchbar";

export function Dashboard({ dados }) {
  const [search, setSearch] = useState("");

  const dadosFiltrados = dados.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="top-bar">
        <Searchbar value={search} onChange={setSearch} />
      </div>

      <div className="card-grid">
        {dadosFiltrados.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}