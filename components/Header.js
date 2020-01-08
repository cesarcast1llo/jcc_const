import Link from 'next/link';
import { Navbar, NavbarBrand } from 'reactstrap';
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
  let classAction = '';
  let headerPosition = '';
  let hamburgAction = '';
  let logoAction = '';

  if (router.pathname === '/') {
    console.log(hh);
    headerHeight = '0';
    if (width < 768) {
      if (hh > 990) {
        classAction = 'visible';
      } else {
        classAction = 'notVisible';
      }
    } else {
      if (hh < 730) {
        classAction = 'notVisible';
        console.log(hh + ' is less than 730 so it should NOT be .notVisible');
      } else {
        classAction = 'visible';
        console.log(hh + ' is more than 739 so it should be .visible');
      }
    }
  } else {
    null;
  }

  if (router.pathname === '/portfolio' || router.pathname === '/about') {
    console.log(hh);
    if (width < 768) {
      if (scrollPos < 70) {
        headerPosition = 'absolute';
      } else {
        headerPosition = 'fixed';
      }
    } else {
      if (scrollPos < 90) {
        headerPosition === 'absolute';
        console.log(hh + ' is less than 90 so it should be absolute');
      } else if (scrollPos > 90) {
        headerPosition === 'fixed';
        console.log(hh + ' is greater than 90 so it should be fixed');
      }
    }
  } else {
    null;
  }
  // for both portfolio & index page, need to create function that runs and gets correct height
  // for now it's working only because it falls back on the class, 'else', need it to properly work

  return (
    <div className="header">
      <div
        className={`header-container container`}
        style={{ height: `${headerHeight}` }}
      >
        <Navbar
          className={`nav-bar fixed-top ${classAction}`}
          style={{ position: `${headerPosition}` }}
        >
          <NavbarBrand className={`image-wrapper animated bounceInleft`}>
            <Link href="/">
              <img className="logo-img" src="../static/img/jcc.png" alt="JCC" />
            </Link>
          </NavbarBrand>
          <div className={`nav-wrapper ${hamburgAction}`}>
            <HamBurg />
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default withRouter(Header);
