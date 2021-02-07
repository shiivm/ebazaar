import React from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavOptions from "./NavOptions";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header-main">
      <div className="container">
        <div className="row align-items-center">
          <Logo />
          <SearchBar />
          <NavOptions />
        </div>
      </div>
    </div>
  );
};

export default Header;
