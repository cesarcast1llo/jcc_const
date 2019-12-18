import React, { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../components/Footer';
import SubmitForm from '../components/SubmitForm';

class Contact extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <HeadMeta
          title="Contact"
          description="filled in with description of page"
          keywords="keywords for google stuff"
        />
        <div className="contact-page">
          <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={500}>
            <SubmitForm />
          </ScrollAnimation>
        </div>
        add reviews accordian here
        <Footer />
      </div>
    );
  }
}

export default Contact;