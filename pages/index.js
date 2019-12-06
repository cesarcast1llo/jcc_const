
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import IndexComponent from '../components/IndexComponent';

import "../styles/websitename.scss";

export default function Index() {
  return (
    <div>
      <HeadMeta
        title="Welcome"
        description="JCC Construction"
        keywords="keywords for google stuff"
      />
      <Header/>

      
      <div className="home-page">
        <div className="spinner-container">
          <img className="index-bgImg" src="/static/img/barca.png" />
        </div>
      </div>
      {/* <IndexComponent bgcolor="acqua" slide="left">
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
      </IndexComponent>
      <IndexComponent bgcolor="asda" slide="right">
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
      </IndexComponent>
      <IndexComponent bgcolor="acqua" slide="left">
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
      </IndexComponent>
      <IndexComponent bgcolor="asda" slide="right">
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
        <h1>This is the index page</h1>
      </IndexComponent> */}
      <Footer/>
    </div>
  );
}