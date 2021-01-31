import React from "react";
import ReactDOM from "react-dom";
import Demo from './components/Demo';

// (() => {
  ReactDOM.hydrate(
    <Demo />,
    document.getElementById("home")
  );
// })();
