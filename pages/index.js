import React, { Component } from 'react';
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
    }
  }

  constructor(props) {
    super(props);
      this.state = {
        name: props.initialName || ``,
    };
    this.reset = this.reset.bind(this);
  }

  delHeader = () => {
    this.setState({name: `visited`});
  }

  reset() {
    this.setState({name: ``});
    document.cookie = `name=; path=/;`;
    document.cookie = `visited=; path=/;`;
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState( prevState => ({
        name: `visited`
      }));
    }, 6000);
  }

  render() {
    return (
      <div className="index-page">
        <button type="button" style={{ color: `red`, zIndex: 20000000}} onClick={this.delHeader}>Delete Header</button>
        <p>Visited? {this.state.name}<br/>
        Delete cookie: <button onClick={this.reset}>Reset</button></p>

        {this.state.name === `` ?
        <IndexOverlay />
        :
        <div>
          <HeadMeta
          title="Welcome"
          description="JCC Construction"
          keywords="keywords for google stuff"
          />
          <Header/>
          <div className="parallax"></div>
          <IndexComponent bgcolor="acqua" slide="left">
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
          </IndexComponent>
          <IndexComponent bgcolor="asda" slide="right">
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
          </IndexComponent>
          <IndexComponent bgcolor="acqua" slide="left">
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
          </IndexComponent>
          <IndexComponent bgcolor="asda" slide="right">
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
            <h1>This is the index page</h1>
          </IndexComponent>
          <Footer/>
        </div>
      }
      </div>
      
    )
  }
}