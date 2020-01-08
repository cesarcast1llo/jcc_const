import { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import IndexOverlay from '../components/IndexOverlay';
import IndexComponent from '../components/IndexComponent';
import ScrollAnimation from 'react-animate-on-scroll';
import cookies from 'next-cookies';

export default class Index extends Component {
  static async getInitialProps(ctx) {
    return {
      initialName: cookies(ctx).name || ``
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: props.initialName || ``
    };
  }

  delHeader = () => {
    this.setState({ name: `visited` });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({
        name: `visited`
      }));
    }, 8000);
  }

  render() {
    return (
      <React.Fragment>
        <HeadMeta
          title="Welcome"
          description="JCC Construction"
          keywords="keywords for google stuff"
        />
        <Header />
        {this.state.name === `` ? (
          <IndexOverlay />
        ) : (
          <div className="index-page">
            <img className="parallax" />
            <div className="container index-container">
              <IndexComponent bgcolor="acqua" animateIn="rotateInUpLeft">
                make inside of content be 1400px max-width, the rest bleed out
                like /portfolio page
                <br />
                change prop to props so slide can manage the animation when
                header fades in after parallax, make sure its transparent like
                portfolio page
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
              </IndexComponent>
              <IndexComponent bgcolor="asda" animateIn="rotateInUpRight">
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
              </IndexComponent>
              <IndexComponent bgcolor="acqua" animateIn="rotateInUpLeft">
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
              </IndexComponent>
              <IndexComponent bgcolor="asda" animateIn="rotateInUpRight">
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
              </IndexComponent>
              <IndexComponent bgcolor="asda" animateIn="fadeIn" delay={500}>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
                <h1>This is the index page</h1>
              </IndexComponent>
            </div>
          </div>
        )}
        <Footer />
      </React.Fragment>
    );
  }
}
