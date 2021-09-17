import React from "react";
import "./CamposDisplay.css";

interface CamposDisplayProps {
    aviso?: string;
    previsao?: string;
}

export const CamposDisplay :React.FunctionComponent<CamposDisplayProps> = (props) => {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="rotulos">
                    <h1 className="Aviso">{props.aviso}</h1>
                    <h2 className="Previsao">{props.previsao}</h2>
                </div>
            </div>
        </div>

    );
}