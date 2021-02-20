import React from "react";

interface Props {
  class_name: string;
  imageUrl: string;
  description: string;
}

const Card = ({ class_name, imageUrl,description }: Props): JSX.Element => {
  return (
    <div className={`card ${class_name}`} title="Top Offer">
      <a href="/">
        <div className="card-body">
          <img src={imageUrl} alt="image" />
          <p className="card-text">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
