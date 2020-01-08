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
  const hh = scrollPos;

  if (typeof window === 'undefined') {
    global.window = {};
  }
  let width = window.innerWidth;
  let headerHeight = '';
  let classAction = 'no';
  let headerPosition = '';
  let hamburgAction = '';
  let logoAction = '';

  if (router.pathname === '/') {
    console.log(hh);
    headerHeight = '0';
    if (width < 768) {
      if (hh > 990) {
        classAction = 'yes';
      } else {
        classAction = 'no';
      }
    } else {
      if (hh < 730) {
        classAction = 'no';
        console.log(classAction);
      } else {
        classAction = 'yes';
        console.log(classAction);
      }
    }
    // if refresh mid page, problems with client & server classes
  } else {
    null;
  }

  if (router.pathname === '/portfolio' || router.pathname === '/about') {
    if (width < 768) {
      if (scrollPos < 55) {
        headerPosition = 'absolute';
      } else {
        headerPosition = 'fixed';
      }
    } else {
      if (scrollPos < 75) {
        headerPosition = 'absolute';
      } else {
        headerPosition = 'fixed';
      }
    }
  } else {
    null;
  }

  return (
    <div className={`header container`} style={{ height: `${headerHeight}` }}>
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
        {hh}
        {classAction}
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
