import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";

const App: React.ComponentType<RouteConfig> = ({ route }) => {
  return (
    <div id="app">
      {renderRoutes(route.routes)}
    </div>
  );
};

export default App;
