import React, { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import IndexComponent from '../components/IndexComponent';


class Index extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loading: true
    };
  }

  // componentDidMount() {
  //   let visited = sessionStorage["alreadyVisited"];
  //   if (visited) {
  //     this.setState({ loading: true })
  //   } else {
  //     // this.setState({loading: false})
  //     this.interval = setInterval(() => this.setState({ loading: true }), 3000);
  //   }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ loading: false }), 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
  return (
    this.state.loading ?
      <div>
        <HeadMeta
          title="Welcome"
          description="JCC Construction"
          keywords="keywords for google stuff"
        /> 
        <Header/>
        <div className="blackout">
          <div id="jc" className="loading-text">JC</div>
            <br/>
          <div id="const" className="loading-text"> 
          &nbsp;CCCCCCCCC
          </div>
        </div> 
        <Footer/>
      </div>
      :
    <div className="home-page">
      {/* <div className="spinner-container">
        <img className="index-bgImg" src="/static/img/barca.png" />
      </div> */}
      <HeadMeta
        title="Welcome"
        description="JCC Construction"
        keywords="keywords for google stuff"
      /> 
      <Header/>
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
    );
  }
}

export default Index;