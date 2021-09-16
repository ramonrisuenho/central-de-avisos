import React from "react";
import { AvisosDisplay } from "../components/AvisosDisplay";
import { PagesProps } from "../interfaces/page";

const HomePage: React.FunctionComponent<PagesProps> = (props) => {
    return (
        <div className="container">
            <AvisosDisplay />
        </div>
    );
}

export default HomePage;