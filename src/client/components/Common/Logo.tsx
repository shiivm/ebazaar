import React from "react";

const Logo: React.FC = (): JSX.Element => {
  return (
    <div className="col-lg-2 col-md-2 col-xs-2 logo-container">
      <a href="/">
        <span>EBazaar</span>
      </a>
    </div>
  );
};

export default Logo;
