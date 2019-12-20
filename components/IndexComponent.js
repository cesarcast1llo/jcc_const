import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const IndexComponent = (props) => {
  let alternateColor;

  if (props.bgcolor === 'acqua') {
    alternateColor = 'acqua'
  } else {
    alternateColor = 'black'
  }

  return (
      <ScrollAnimation animateIn={props.animateIn} animateOnce={true} delay={props.delay}>
        <div className={`index-component ${alternateColor}`}>
          {props.children}
        </div>
      </ScrollAnimation>
  );
};

export default IndexComponent;