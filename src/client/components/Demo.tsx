import React from "react";

interface Props {
  client: string;
}
const Demo: React.FC<Props> = ({ client }): JSX.Element => {
  return <h1 onClick={() => alert("Home " + client)}>Home Demo {client}</h1>;
};

if (typeof window !== "undefined") {
  window.Component || (window.Component = {});
  window.Component["Demo"] = Demo;
}

export default Demo;
