import React from 'react';

const IndexComponent = (props) => {
  let alternateColor;
  let slide;
  if (props.bgcolor === 'acqua') {
    alternateColor = 'acqua'
  } else {
    alternateColor = 'black'
  }

  if (props.slide === 'left') {
     slide = 'animated bounceInLeft'
  } else {
     slide = 'animated bounceInRight'
  }
  return (
      <div className={`index-component ${alternateColor} ${slide}`}>
        <p>{props.children}</p>
      </div>
  );
};

export default IndexComponent;