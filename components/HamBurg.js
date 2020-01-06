import React, { Component } from 'react';
import Link from 'next/link';

class HamBurg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility
    });
  };

  render() {
    return (
      <div>
        <div
          id="flyoutMenu"
          className={this.state.visibility ? 'fadeIn' : 'fadeOut'}
        >
          <Link href="/">
            <a className="bm-li hover-1 fadeout">Home</a>
          </Link>
          <Link href="/about">
            <a className="bm-li">About</a>
          </Link>
          <Link href="/portfolio">
            <a className="bm-li">Porfolio</a>
          </Link>
          <Link href="/contact">
            <a className="bm-li">Contact</a>
          </Link>
        </div>
        <div
          id="nav-icon4"
          className={this.state.visibility ? 'open' : null}
          onClick={this.toggleVisibility}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default HamBurg;
