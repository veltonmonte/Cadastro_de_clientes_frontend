import "./OrdemServicoTable.css"

interface CardProps {
    status: boolean,
    name: string,
    servico: string;
    id: number;
}



export function OrdemServicoTable({ status, servico, name, id }: CardProps) {

    let statusServico = "pendente"

    if (status === true) {
        statusServico = "Concluído"
    }

    return (
        <div className="Card">
            <div className="name_container">
                <h2>{name}</h2>
                <p className={statusServico}>{statusServico}</p>
            </div>

            <hr className="divider" />

            <div className="os_container">
                <div className="Servicos">
                    <p className="servicos_title">Serviço: </p>
                    <p>{servico}</p>
                </div>
                <div className="OS">
                     <p className="os_title">OS: </p>
                     <p>#{id}</p>
                </div>
            </div>

        </div>

    )
}
