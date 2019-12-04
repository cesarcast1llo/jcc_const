import React, { Component } from 'react';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import SubmitForm from '../components/SubmitForm';

class Contact extends Component {
  
  render() {
    return (
    <div className="contact-page">
      <Header/>
      <HeadMeta
        title="Contact Page"
        description=" "
        keywords="keywords for google stuff"
        />
      <SubmitForm />
      <Footer />
    </div>
    );
  }
}

export default Contact;