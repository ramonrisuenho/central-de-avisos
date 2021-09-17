import React, { Component } from "react";
import Footer from "../Footer";
import { QuadrosDisplay } from "../QuadrosDisplay";
import logo from "../Icone/icone_site.png";
import "../Wrapper/Wrapper.css";
import "./AvisosDisplay.css";
import apis from "../../api";

interface AvisosDisplayProps {}

export const AvisosDisplay:React.FunctionComponent<AvisosDisplayProps> = (props) => {
    function onClickLogo(){
    alert("Wlan Sistemas - Ligue-se ao novo! \n\n\n by Risuenho 🤓🖖")

class AvisosList extends Component {
    constructor(props){
        super(props)
        this.state = {
            avisos: [],
            isLoading: false,
            columns: []
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})
        await apis.getAvisos().then(avisos => {
            this.setState({
                avisos: avisos.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { avisos, isLoading } = this.state;
        console.log("TCL: AvisosList -> render -> avisos", avisos)
        const columns = [
            {
                Header: "Num",
                acessor: "num",
            },
            {
                Header: "AVISO",
                acessor: "aviso",
            },
            {
                Header: "PREVISAO",
                acessor: "previsao",
            },
        ]

        let showAvisos = true;
        if(!avisos.length){
            showAvisos = false
        }
    }
}
    return(
        <div className="container">
            <div className="LogoWrapper">
                <img src={logo} className="Logo" alt="Logo" onClick={onClickLogo} />
            </div>
            <div className="container">
                <div className="wrapper">
                    <div>
                        <QuadrosDisplay aviso={avisos} previsao="Previsao 1" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}