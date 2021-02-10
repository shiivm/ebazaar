import React from "react";
import Demo from "../components/Demo";
import CategoryHeader from '../components/home/CategoryHeader';

const Home: React.FC = () => {
  return (
    <>
    <CategoryHeader />
    <div id="home" className="row">
      <Demo client = "server" />
    </div>
    </>
  );
};

export default Home;
