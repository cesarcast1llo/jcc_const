import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import "../styles/websitename.scss";


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar light expand="md" className="navbar">
          <NavbarBrand href="/">
            <img className="logo" src="../static/img/icon_img1.png" alt="JCC Construction Website"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} >
            <img className="menuiconhidden" src="../static/img/hamburgermenu18x15@2x.png" width="18" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="linkstyle">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavItem>
              <NavItem className="linkstyle">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </NavItem>
              <NavItem className="linkstyle">
                <Link href="/portfolio">
                  <a>Porfolio</a>
                </Link>
              </NavItem>
              <NavItem className="linkstyle">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}