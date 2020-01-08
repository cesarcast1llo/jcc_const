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
  DropdownItem
} from 'reactstrap';
import useScrollPosition from '../hooks/useScrollPosition.js';
import { withRouter } from 'next/router';
import HamBurg from './HamBurg';

const Header = ({ router }) => {
  const scrollPos = useScrollPosition();
  if (typeof window === 'undefined') {
    global.window = {};
  }
  let width = window.innerWidth;
  let classAction = '';
  let headerPosition = '';
  let hamburgAction = '';
  let logoAction = '';

  if (router.pathname === '/') {
    if (width < 768) {
      if (scrollPos > 990) {
        classAction = 'fadeIn';
      } else {
        classAction = 'fadeOut';
      }
    } else {
      if (scrollPos > 730) {
        classAction = 'fadeIn';
      } else {
        classAction = 'fadeOut';
      }
    }
  } else {
    null;
  }

  // router.pathname === '/'
  //   ? width > 768
  //     ? scrollPos > 990
  //       ? (classAction = 'fadeIn')
  //       : (classAction = 'fadeOut')
  //     : scrollPos > 730
  //     ? (classAction = 'fadeIn')
  //     : (classAction = 'fadeOut')
  //   : null;

  if (router.pathname === '/portfolio' || router.pathname === '/about') {
    if (width < 768) {
      if (scrollPos > 55) {
        headerPosition = 'fixed';
      } else {
        headerPosition = 'absolute';
      }
    } else {
      if (scrollPos > 75) {
        headerPosition = 'fixed';
      } else {
        headerPosition = 'absolute';
      }
    }
  } else {
    null;
  }

  return (
    <div className={`header container`}>
      <Navbar
        className={`nav-bar fixed-top ${classAction}`}
        style={{ position: `${headerPosition}` }}
      >
        <NavbarBrand className={`image-wrapper animated bounceInleft`}>
          <img className="logo-img" src="../static/img/jcc.png" alt="JCC" />
        </NavbarBrand>
        <div className={`nav-wrapper ${hamburgAction}`}>
          <HamBurg />
        </div>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
