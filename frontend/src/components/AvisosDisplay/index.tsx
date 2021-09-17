import React from "react";
import Footer from "../Footer";
import { QuadrosDisplay } from "../QuadrosDisplay";
import logo from "../Icone/icone_site.png";
import "../Wrapper/Wrapper.css";
import "./AvisosDisplay.css";

interface AvisosDisplayProps {}

export const AvisosDisplay:React.FunctionComponent<AvisosDisplayProps> = (props) => {
    function onClickLogo(){
    alert("Wlan Sistemas - Ligue-se ao novo! \n\n\n by Risuenho 🤓🖖")
  }
    return(
        <div className="container">
            <div className="LogoWrapper">
                <img src={logo} className="Logo" alt="Logo" onClick={onClickLogo} />
            </div>
            <div className="container">
                <div className="wrapper">
                    <div>
                        <QuadrosDisplay aviso="Aviso 1" previsao="Previsao 1" />
                    </div>
                </div>
                <div className="wrapper">
                    <div>
                         <QuadrosDisplay aviso="Aviso 2" previsao="Previsao 2" />
                    </div>
                </div>
                <div className="wrapper">
                    <div>
                        <QuadrosDisplay aviso="Aviso 3" previsao="Previsao 3" />
                    </div>
                </div>
                <div className="wrapper">
                    <div>
                        <QuadrosDisplay aviso="Aviso 4" previsao="Previsao 4" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );

}