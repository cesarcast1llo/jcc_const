
import Navigation from './Navbar';
import useScrollPosition from "../hooks/useScrollPosition.js";
import { withRouter } from 'next/router';

const Header = ({ router }) => {
  const scrollPos = useScrollPosition();
  if (typeof window === 'undefined') {
    global.window = {}
}
  let width = window.innerWidth;
  let visibility = '';
  let className = '';

  router.pathname === '/' ?
    width > 768 ? 
      scrollPos > 960 ? className = 'fadeIn' : className = 'fadeOut'
    :
      scrollPos > 700 ? className = 'fadeIn' : className = 'fadeOut'
  : null;

  return (
    <div className={`header ${className}`} style={{visibility: `${visibility}`}} >
        <Navigation />
    </div>
  );
}

export default withRouter(Header);