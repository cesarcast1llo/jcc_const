import React, { Component } from 'react';

class IndexOverlay extends Component {
  componentWillUnmount () {
   // alert('u just got cookies');
   document.cookie = `name=visited; path=/`;
 }

  render() {
    return (
      <div className="blackout">
      <div id="jc" className="loading-text">JC</div>
        <br/>
      <div id="const" className="loading-text"> 
      &nbsp;CCCCCCCCC
      </div>
    </div> 
    );
  }
}

export default IndexOverlay;