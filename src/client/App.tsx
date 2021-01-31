import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import Home from "./pages/Home";

const App: React.ComponentType<RouteConfig> = ({ route }) => {
  return (
    <div id="app">
      <h1>App</h1>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default App;
