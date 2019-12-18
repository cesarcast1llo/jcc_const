import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <ScrollAnimation className={`index-component ${alternateColor}`} animateIn={`${slide}`} animateOnce={true}>
        {props.children}
      </ScrollAnimation>
  );
};

export default IndexComponent;