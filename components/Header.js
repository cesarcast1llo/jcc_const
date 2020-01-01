import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import useScrollPosition from "../hooks/useScrollPosition.js";
import { withRouter } from 'next/router';
import HamBurg from "./HamBurg";

const Header = ({ router }) => {
  
  const scrollPos = useScrollPosition();
  if (typeof window === 'undefined') {
    global.window = {}
}
  let width = window.innerWidth;
  let classAction = '';
  let headerAction = '';
  let color = '';
  let none = 'none';

  router.pathname === '/' ?
    width > 768 ? 
      scrollPos > 990 ? classAction = 'fadeIn' : classAction = 'fadeOut'
    :
      scrollPos > 730 ? classAction = 'fadeIn' : classAction = 'fadeOut'
  : null;

  // router.pathname === '/portfolio' ?
  //   scrollPos > 50 ? classAction = 'fadeOut' : color = 'black' : null;
    // scrollPos > 51 ? classAction = 'fadeIn' : null;


  return (
    // <div className="header" style={{backgroundColor: `${color}`,}}>
      <Navbar className={`nav-bar fixed-top ${classAction}`}>
        <NavbarBrand className="image-wrapper">
          <img className="logo-img" src="../static/img/jcc.png" alt="JCC" />
        </NavbarBrand>
        <div className={`nav-wrapper ${headerAction}`}>
          <HamBurg />
        </div>
      </Navbar>
    // </div>
  );
}

export default withRouter(Header);