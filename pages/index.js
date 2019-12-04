import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

import "../styles/websitename.scss";

export default function Index() {
  return (
    <div className="home-page">
      <HeadMeta
        title="Welcome"
        description="JCC Construction"
        keywords="keywords for google stuff"
      />
      <Header/>
      <Marquee/>
      <h1>This is the index page</h1>
      <img src="../static/img/icon_img1.png" />
      <Footer/>
    </div>
  );
}