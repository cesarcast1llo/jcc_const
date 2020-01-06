import React, { useState } from 'react';
// import Data from './data.json';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Review 1',
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text text text&nbsp;texttext&nbsp;text",
    author: 'Lorem Ipsum'
  },
  {
    id: 2,
    altText: 'Review 2',
    quote:
      'Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2 Review 2',
    author: 'Rochelle'
  },
  {
    id: 3,
    altText: 'Review 3',
    quote:
      'Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3 Review 3',
    author: 'Rochelle'
  }
];

const ReviewStars = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="carousel-reviews"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <Container>
          <Row>
            <Col>
              <CarouselCaption
                className="review-copy"
                captionHeader={item.quote}
                captionText={item.author}
              />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        className="review-carousel"
        interval={false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default ReviewStars;
