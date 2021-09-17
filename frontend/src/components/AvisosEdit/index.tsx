import React from 'react';
import Footer from "../Footer";
import { QuadroEdit } from "../QuadroEdit";
import logo from "../Icone/icone_site.png";
import "../Wrapper/Wrapper.css";



interface AvisosEditProps {}

export const AvisosEdit: React.FunctionComponent<AvisosEditProps> = (props) => {
  //Lógica aqui
  //React Hook
  function onClickLogo(){
    alert("Wlan Sistemas - Ligue-se ao novo! \n\n\n by Risuenho 🤓🖖")
  }
  
  return (
    <div className="container">
      <div className="LogoWrapper">
            <img src={logo} className="Logo" alt="Logo" onClick={onClickLogo} />
      </div>
      <div className="container">
        <div className="wrapper">
          <div>
            <QuadroEdit aviso="Aviso 1" previsao="Previsão 1" />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <QuadroEdit aviso="Aviso 2" previsao="Previsão 2" />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <QuadroEdit aviso="Aviso 3" previsao="Previsão 3" />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <QuadroEdit aviso="Aviso 4" previsao="Previsão 4" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
