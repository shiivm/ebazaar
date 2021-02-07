import React from "react";

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className="col-lg-6 col-md-6 col-xs-6 search-bar-container">
      <form className="search-form" action="/search" method="GET">
        <div className="col-lg-12 col-md-12 col-xs-12 form-div">
          <div className="search-input-div">
            <input
              type="text"
              name="search"
              className="search-input-field"
              title="Search for products"
              placeholder="Search for products"
              autoComplete="off"
            />
          </div>
          <button className="search-button" type="submit">
            <svg width="20" height="20" viewBox="0 0 17 18">
              <g fill="#2874F1" fillRule="evenodd">
                <path
                  className="search-icon-path"
                  d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                ></path>
                <path
                  className="search-icon-path"
                  d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
