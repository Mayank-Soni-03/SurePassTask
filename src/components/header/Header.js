import React from "react";
import './header.scss';
function Header({ addHandle }) {
  return (
    <div className="menu-header">
      <div className="menu-header__menu-inner">
        <div>
          <div>EMPLOYEE TABLE</div>
        </div>
        <button onClick={() => addHandle()}>Add</button>
      </div>
    </div>
  );
}

export default Header;
