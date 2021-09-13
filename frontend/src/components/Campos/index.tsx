import { FormEvent, useRef } from 'react';
import "./Campos.css";

interface CamposProps {
    aviso?: string;
    previsao?: string
}

export const Campos :React.FunctionComponent<CamposProps> = (props) => {

    const avisoRef = useRef<HTMLInputElement>(null);
    const previsaoRef = useRef<HTMLInputElement>(null); 
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(avisoRef.current?.value);
        console.log(previsaoRef.current?.value);
    }
    
    return(
    <div className="App">
      <form onSubmit={onSubmit}>
        <div id="divAviso" className="rotulos">
          <label htmlFor="htmlAviso">{props.aviso}: </label>
          <input type="text" id="inputAviso" ref={avisoRef}/>
        </div>
        <div id="divPrevisao" className="rotulos">
          <label htmlFor="htmlPrevisao">{props.previsao}: </label>
          <input type="text" id="inputPrevisao" ref={previsaoRef}/>
        </div>
      </form>
    </div>
    );
}