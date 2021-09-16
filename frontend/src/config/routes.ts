import IRoute from "../interfaces/routes";
import ControlePage from "../pages/controle";
import HomePage from "../pages/home";

const avisosRoutes: IRoute[] = [
    {
        path: "/",
        exact: true,
        auth: false,
        component: HomePage,
        name: "Home Page"   
    },
    {
        path: "/controle",
        exact: true,
        auth: false,
        component: ControlePage,
        name: "Controle Page"
    }
];

const routes :IRoute[] = [...avisosRoutes];

export default routes;

