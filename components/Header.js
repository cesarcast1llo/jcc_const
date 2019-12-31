
import Link from "next/link";
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
  //   // width > 768 ? 
  //   scrollPos > 15 ? headerAction = 'fadeOut' : headerAction = 'fadeIn'
  //   : null;

  return (
    <div className={`header ${classAction}`} style={{backgroundColor: `${color}`,}} >
      <div className="image-wrapper" >
        <img src="../static/img/jcc.png" alt="JCC" />
      </div>
      <div className={`nav-wrapper ${headerAction}`}>
        <HamBurg />
      </div>

      
    </div>
  );
}

export default withRouter(Header);