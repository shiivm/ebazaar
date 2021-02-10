import React from "react";
import PopOver from "../commom/PopOver";

const CategoryHeader: React.FC = (): JSX.Element => {
  return (
    <div className="row category-header">
      <div className="col">Top Products</div>
      <div className="col">Grocery</div>
      <div className="col">Mobiles</div>
      <div className="col category">
        <span>Electronics</span>
        <span className="caret"></span>
        <PopOver popOverOptions={[{name:"test",url:"/"}]} />
      </div>
      <div className="col">Fashions</div>
      <div className="col">Home</div>
      <div className="col">Beauty</div>
    </div>
  );
};

export default CategoryHeader;
