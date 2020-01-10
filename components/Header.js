import Link from 'next/link';
import { Navbar, NavbarBrand } from 'reactstrap';
import useScrollPosition from '../hooks/useScrollPosition.js';
import { withRouter } from 'next/router';
import HamBurg from './HamBurg';

const Header = ({ router }) => {
  // let loc = window.location.pathname;

  if (typeof window === 'undefined') {
    global.window = {};
  }

  const scrollPos = useScrollPosition();

  let width = window.innerWidth;
  let headerHeight = '';
  let classAction = '';
  let headerPosition = '';
  let hamburgAction = '';
  let logoAction = '';

  if (router.pathname === '/') {
    // console.log(scrollPos);
    headerHeight = '0';
    if (width < 768) {
      if (scrollPos > 990) {
        classAction = 'visible';
      } else {
        classAction = 'notVisible';
      }
    } else {
      if (scrollPos < 730) {
        classAction = 'notVisible';
        console.log(
          'CLIENT scrollPos: ' +
            scrollPos +
            ' is less than 730 so it should be .notVisible = ' +
            classAction
        );
      }
      if (scrollPos > 730) {
        classAction = 'visible';
        console.log(
          'CLIENT scrollPos: ' +
            scrollPos +
            ' is more than 730 so it should be Visible = ' +
            classAction
        );
      }
    }
  }

  if (
    router.pathname === '/portfolio'
    // || router.pathname === '/about'
  ) {
    if (width < 768) {
      if (scrollPos < 70) {
        headerPosition = 'absolute';
      }
      if (scrollPos < 70) {
        headerPosition = 'fixed';
      }
    } else {
      if (scrollPos < 90) {
        headerPosition === 'absolute';
        console.log(scrollPos + ' headerPosition is ' + headerPosition);
      } else if (scrollPos > 90) {
        headerPosition === 'fixed';
        console.log(scrollPos + ' headerPosition is ' + headerPosition);
      }
    }
  }

  return (
    <div className="header">
      {console.log('SERVER scrollPos: ' + scrollPos + ' class? ' + classAction)}
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
