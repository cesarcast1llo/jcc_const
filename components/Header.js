import '../styles/websitename.scss';
import Navigation from './Navbar';
import useScrollPosition from "../hooks/useScrollPosition.js";

const Header = () => {
  const scrollPos = useScrollPosition();
  const headerHeight = scrollPos;
  let header = '';
  let display = 'none';

  if (headerHeight > 960) {
    header = '111111';
    display = 'block';
  } else {
    header = '400px';
  }

  console.log(header)
  console.log(display)
  return (
    <div style={{position: 'fixed', 'z-index': '9999999', 'background-color': 'blue'}}>
    headerHeight {headerHeight} header {header}
    <div className="header" 
    style={{display: `${display}`}} 
    >
      <Navigation />
    </div>
    </div>
  );
}

export default Header;