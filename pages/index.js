import React, { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import IndexComponent from '../components/IndexComponent';
import Cookie from 'js-cookie';
import {parseCookies} from '../cookies/parseCookies';

export default class Index extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loading: false
    };
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ loading: true }), 0);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      
      <div>
        <HeadMeta
          title="Welcome"
          description="JCC Construction"
          keywords="keywords for google stuff"
        />
        <Header/>
      {this.state.loading ?
        <div>
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
        </div>
        :
          <div className="blackout">
            <div id="jc" className="loading-text">JC</div>
              <br/>
            <div id="const" className="loading-text"> 
            &nbsp;CCCCCCCCC
            </div>
          </div> 
        }
        <Footer/>
      </div>
      
    )
  }
}