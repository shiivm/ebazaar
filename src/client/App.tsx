import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";

const App: React.ComponentType<RouteConfig> = ({ route }) => {
  return (
    <div className="super_container container ">
      <div className="content-container">{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default App;
