import { useState } from "react"

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: string | number): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal(){
    const [name, setName] = useState;
    const []
    return(
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo cliente</h2>
                <form className="input-container">
                    <Input label="name" value={} updateValue={}/>
                    <Input label="sevico" value={} updateValue={}/>
                </form>
            </div>
             
        </div>
    )
}