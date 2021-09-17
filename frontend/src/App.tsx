import React from 'react';
import "./App.css"
import { Switch, Route } from "react-router-dom";
import { RouteChildrenProps } from 'react-router';
import "./components/Footer";
import "./components/Icone";
import "./components/Wrapper/Wrapper.css";
import routes from './config/routes';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  //Lógica aqui
  //React Hook
  return (
    <div className="App">
      <div>
      </div>
      <div>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={(routeProps: RouteChildrenProps<any>) => <route.component {...routeProps} /> }
              />
            )
          })}
        </Switch>
      </div>
    </div>
  );
}

export default App;
