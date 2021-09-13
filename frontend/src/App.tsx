import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { QuadroEdit } from './components/QuadroEdit';
import "./components/Wrapper/Wrapper.css";





function App() {
  //Lógica aqui
  //React Hook
  
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <QuadroEdit aviso="Aviso 1" previsao="Previsão 1"></QuadroEdit>
        </div>
      </div>
      <div className="wrapper">
        <div>
          <QuadroEdit aviso="Aviso 2" previsao="Previsão 2"></QuadroEdit>
        </div>
      </div>
      <div className="wrapper">
        <div>
          <QuadroEdit aviso="Aviso 3" previsao="Previsão 3"></QuadroEdit>
        </div>
        </div>
        <div className="wrapper">
        <div>
          <QuadroEdit aviso="Aviso 4" previsao="Previsão 4"></QuadroEdit>
        </div>
      </div>
    </div>
  );
}

export default App;
