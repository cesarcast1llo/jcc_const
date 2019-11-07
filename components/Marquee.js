import Carousel from 'react-bootstrap/Carousel'
import "../styles/websitename.scss";

const Marquee = () => (
  <div className="marquee">
    <Carousel className="carousel" interval="5000" pauseonhover="true" >
      <Carousel.Item pauseonhover="true">
        <img
          className="d-block w-100"
          src="../static/img/placeholder.png" 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item pauseonhover="true">
        <img
          className="d-block w-100"
          src="../static/img/video-poster.jpg" 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item pauseonhover="true">
        <img
          className="d-block w-100"
          src="../static/img/video-poster.jpg" 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Marquee;