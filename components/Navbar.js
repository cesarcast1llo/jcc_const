import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <div className="menu-overlay">
      <Menu {...props}>
        <Link href="/">
          <a className="bm-li">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="bm-li">
          About
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="bm-li">
          Porfolio
          </a>
        </Link>
        <Link href="/contact">
          <a className="bm-li">
          Contact
          </a>
        </Link>
      </Menu>
      </div>
  );
};
