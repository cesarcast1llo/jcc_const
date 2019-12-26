
import Navigation from './Navbar';
import useScrollPosition from "../hooks/useScrollPosition.js";
import { withRouter } from 'next/router';

const Header = ({ router }) => {
  const scrollPos = useScrollPosition();
  if (typeof window === 'undefined') {
    global.window = {}
}
  let width = window.innerWidth;
  let classAction = '';
  let color = 'black';
  // let none = 'none';

  router.pathname === '/' ?
    width > 768 ? 
      scrollPos > 990 ? classAction = 'fadeIn' : classAction = 'fadeOut'
    :
      scrollPos > 730 ? classAction = 'fadeIn' : classAction = 'fadeOut'
  : null;

  // router.pathname === '/' ? none === 'none' : null;

  router.pathname === '/portfolio' ?
  width > 768 ? 
    scrollPos > 5 ? color = 'transparent' : color = 'black'
  :
    scrollPos > 5 ? color = 'transparent' : color = 'black'
  : null;

  return (
    <div className={`header ${classAction}`} style={{backgroundColor: `${color}`,}} >
      logo disappear on index, not other pages. how to nest in ternary operator to run multiple arguments at once. right now it's only for fade in of menu
      logo fade out
      <div className="nav-wrapper">
        <Navigation />
      </div>
      <div className="image-wrapper" 
      // style={{display: `${none}`,}}
      >
        <img src="../static/img/jcc.png" alt="JCC" />
      </div>
    </div>
  );
}

export default withRouter(Header);