import Link from 'next/link';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import "../styles/websitename.scss";

export default function About() {
  return (
    <div className="about-page">
      <Header/>
      <HeadMeta
        title="About Page"
        description=" "
        keywords="keywords for google stuff"
        />
      <h1>This is the about page</h1>
      <Footer />
    </div>
  );
}