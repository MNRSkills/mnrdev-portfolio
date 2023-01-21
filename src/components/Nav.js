import React from "react";
import { StyledNavbar } from './styledComponent/Nav.styled';
import "boxicons";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Title</h1>
      <ul className="links-list">
        <li><box-icon name='github' type='logo' ></box-icon></li>
        <li><box-icon name='twitter' type='logo' ></box-icon></li>
        <li><box-icon name='bomb' type='solid' ></box-icon></li>
        <li><box-icon name='linkedin' type='logo' ></box-icon></li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
