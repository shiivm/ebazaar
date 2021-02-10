import React from "react";

interface PopOverOptions {
  name: string;
  url: string;
}
interface Props {
  class_name?:string,
  popOverOptions: PopOverOptions[];
}
const PopOver: React.FC<Props> = ({ class_name,popOverOptions }): JSX.Element => {
  const options = popOverOptions.map((option, i: number) => {
    return (
      <li className="option" key={i}>
        <a href={`${option.url}`}>{option.name}</a>
      </li>
    );
  });
  return (
    <div className={`tooltiptext ${class_name || ''}`}>
      {popOverOptions && <ul className="options">{options}</ul>}
    </div>
  );
};

export default PopOver;
