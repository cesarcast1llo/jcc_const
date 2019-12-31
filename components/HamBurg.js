import React, { Component } from "react";
import Link from "next/link";

class HamBurg extends Component {
   constructor(props) {
      super(props);
      this.state = {
        visibility: false,
      };

     this.toggleVisibility=this.toggleVisibility.bind(this)
   }

  toggleVisibility = () => {
     this.setState ({
        visibility: !this.state.visibility
     })
   }

    render() {
        return (
            <div>
               <div id="flyoutMenu" className={ this.state.visibility ? 'show' : 'hide'}>
               <Link href="/">
                  <a className="bm-li">
                     Home
                  </a>
               </Link>
               <Link href="/about">
                  <a className="bm-li">
                  About
                  </a>
               </Link>
               <Link href="/portfolio">
                  <a className="bm-li">
                  Porfolio
                  </a>
               </Link>
               <Link href="/contact">
                  <a className="bm-li">
                  Contact
                  </a>
               </Link>
            </div>
            <button id="roundButton" onClick={this.toggleVisibility}></button>
         </div>
        );
    }
}
 
export default HamBurg;
