import { FormEvent, useRef } from 'react';
import "./QuadroEdit.css";
import { Campos } from '../Campos';

interface QuadroEditProps{
  aviso?: string;
  previsao?: string
}

export const QuadroEdit: React.FunctionComponent<QuadroEditProps> = (props) => {
  return(
    <Campos aviso={props.aviso} previsao={props.previsao}/>
  );
}