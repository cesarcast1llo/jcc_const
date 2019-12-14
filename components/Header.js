import '../styles/websitename.scss';
import Navigation from './Navbar';
import useScrollPosition from "../hooks/useScrollPosition.js";

const Header = () => {
  const scrollPos = useScrollPosition();
  if (typeof window === 'undefined') {
    global.window = {}
}
  let width = window.innerWidth;
  let header = '';
  let visibility = '';
  let className = '';

  if (width > 768) {
    if (scrollPos > 960) {
      visibility = 'visible';
      className = 'fadeIn';
    } else {
      header = '400px';
      visibility = 'hidden'
      className = 'fadeOut';
    }
  } else {
    if (scrollPos > 700) {
      visibility = 'visible';
      className = 'fadeIn';
    } else {
      header = '400px';
      visibility = 'hidden'
      className = 'fadeOut';
    }
  }

  // console.log(header)
  // console.log(visibility)

  return (
    // <div style={{position: 'fixed', zIndex: '9999999', backgroundColor: 'blue', color: 'white'}}>
    // scrollPos {scrollPos} header {header}
    <div className={`header ${className}`} style={{visibility: `${visibility}`}} >
     <Navigation />
    </div>
    // </div>
  );
}

export default Header;