import * as React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import App from "./App";
import Currency from "./components/Currency";
import Form from "./components/Form";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route exact={true} path="/" component={App} />\{" "}
          <Route path="/Currency" component={Currency} />
          <Route path="/Form" component={Form} />
          <Redirect from="*" to="/" />
        </main>
      </div>
    </BrowserRouter>
  );
};
