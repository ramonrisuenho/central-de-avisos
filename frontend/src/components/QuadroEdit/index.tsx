import "./QuadroEdit.css";
import { CamposEdit } from '../CamposEdit';

interface QuadroEditProps{
  aviso?: string;
  previsao?: string
}

export const QuadroEdit: React.FunctionComponent<QuadroEditProps> = (props) => {
  return(
    
    <div className="Campos">
      <CamposEdit aviso={props.aviso} previsao={props.previsao}/>
    </div>
  );
}