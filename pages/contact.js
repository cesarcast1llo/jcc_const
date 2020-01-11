import { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../components/Footer';
import SubmitForm from '../components/SubmitForm';
import Carousel from '../components/Carousel';
import Data from './data.json';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <HeadMeta
          title="Contact"
          description="filled in with description of page"
          keywords="keywords for google stuff"
        />
        <Header />
        <div className="contact-page">
          <div className="container contact-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <SubmitForm />
              {/* <Container className="submit">
              <Row>
                <Col className="intro"> */}
              {/* <Carousel /> */}
              {/* </Col>
              </Row>
            </Container> */}
            </ScrollAnimation>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
