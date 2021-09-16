import { FormEvent, useRef } from 'react';
import "./CamposEdit.css";


interface CamposEditProps {
    aviso?: string;
    previsao?: string
}

export const CamposEdit :React.FunctionComponent<CamposEditProps> = (props) => {

    const avisoRef = useRef<HTMLInputElement>(null);
    const previsaoRef = useRef<HTMLInputElement>(null); 
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        avisoRef.current?.value ? console.log(avisoRef.current?.value) : alert("Entrada vazia identificada. O aviso em questão será limpo.")
        //A previsao pode ser limpa em casos de previsao inderterminada
        console.log(previsaoRef.current?.value);
    }
    
    return(
    <div className="App">
      <div className="form-wrapper" id="form-wrapper">
        <form onSubmit={onSubmit}>
          <div id="divAviso" className="rotulos">
            <label className="Aviso" htmlFor="htmlAviso">{props.aviso}: </label>
          </div>
          <div>
            <input className="inputAviso" type="text" id="inputAviso" ref={avisoRef}/>
          </div>
          <div id="divPrevisao" className="rotulos">
            <label className="Previsao" htmlFor="htmlPrevisao">{props.previsao}: </label>
          </div>
          <div>
            <input className="inputPrevisao" type="time" id="inputPrevisao" ref={previsaoRef}/>
          </div>
          <button className="btnEnviar" onSubmit={onSubmit}>Enviar</button>
        </form>
      </div>
    </div>
    );
}