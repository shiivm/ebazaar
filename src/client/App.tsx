import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import Header from "./components/header/Header";

const App: React.ComponentType<RouteConfig> = ({ route }) => {
  return (
    <div className="super_container container ">
      <Header />
      <div className="content-container">{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default App;
