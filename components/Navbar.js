import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <div className="menu-overlay">
      <Menu {...props}>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/portfolio">
          Porfolio
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </Menu>
      </div>
  );
};
