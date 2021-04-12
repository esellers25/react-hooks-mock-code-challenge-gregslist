import React from "react";
import Search from "./Search";

function Header({listings, onSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} onSearch={onSearch}/>
    </header>
  );
}

export default Header;
