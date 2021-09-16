import React from "react";
import { AvisosEdit } from "../components/AvisosEdit";
import { PagesProps } from "../interfaces/page";

const ControlePage: React.FunctionComponent<PagesProps> = (props) => {
    return (
        <div className="container">
            <AvisosEdit />
        </div>
    );
}

export default ControlePage;