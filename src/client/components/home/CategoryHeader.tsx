import React from "react";
import PopOver from "../commom/PopOver";

const CategoryHeader: React.FC = (): JSX.Element => {
  const electronics = [
    {name:"Laptops",url:"/categories"},
    {name:"Device & Storage",url:"/categories"},
    {name:"Computer Accessories",url:"/categories"},
    {name:"Mobile Accessories",url:"/categories"},
    {name:"Tablets",url:"/categories"},
    {name:"Powerbank",url:"/categories"},
    {name:"Audio",url:"/categories"},
  ];
  return (
    <div className="row category-header">
      <div className="col">Top Products</div>
      <div className="col">Grocery</div>
      <div className="col">Mobiles</div>
      <div className="col category">
        <span>Electronics</span>
        <span className="caret"></span>
        <PopOver popOverOptions={electronics} />
      </div>
      <div className="col">Fashions</div>
      <div className="col">Home</div>
      <div className="col">Beauty</div>
    </div>
  );
};

export default CategoryHeader;
