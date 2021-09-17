import React from "react";
import { CamposDisplay } from "../CamposDisplay";
import "./QuadrosDisplay.css";

interface QuadrosDisplayProps {
    aviso?: string;
    previsao?: string;
}

export const QuadrosDisplay :React.FunctionComponent<QuadrosDisplayProps> = (props) => {
    return (
        <div className="Campos">
            <CamposDisplay aviso={props.aviso} previsao={props.previsao}/>
        </div>
    );
}