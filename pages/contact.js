import { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../components/Footer';
import SubmitForm from '../components/SubmitForm';
import ReviewStars from '../components/ReviewStars';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HeadMeta
          title="Contact"
          description="filled in with description of page"
          keywords="keywords for google stuff"
        />
        <div className="contact-page">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
            <SubmitForm />
            {/* <Container className="submit">
              <Row>
                <Col className="intro"> */}
            <ReviewStars />
            {/* </Col>
              </Row>
            </Container> */}
          </ScrollAnimation>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
