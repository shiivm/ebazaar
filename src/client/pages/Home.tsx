import React from "react";
import Header from "../components/Common/Header";
import Demo from "../components/Demo";

const Home: React.FC = () => {
  return (
    <>
    <Header />
      <div id="home">
        <Demo />
      </div>
    </>
  );
};

export default Home;
