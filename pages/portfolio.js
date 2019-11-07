import Link from 'next/link';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import PortfolioModule from '../components/PortfolioModule';

import "../styles/websitename.scss";

export default function Porftolio() {
  return (
    <div>
      <Header/>
      <HeadMeta
        title="Porftolio"
        description=" "
        keywords="keywords for google stuff"
        />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <h1>This is the portfolio page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="This is project number one"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="description about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/video-poster.jpg"
              textInside="This is project number 2"
              modalID="#two"
              buttonText="Second Gallery"
              PopupID="two"
              PopupTitle="Popup title, might delete"
              PopupDescription="discription about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="This is project number one"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="description about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/video-poster.jpg"
              textInside="This is project number 2"
              modalID="#two"
              buttonText="Second Gallery"
              PopupID="two"
              PopupTitle="Popup title, might delete"
              PopupDescription="discription about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="This is project number one"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="description about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/video-poster.jpg"
              textInside="This is project number 2"
              modalID="#two"
              buttonText="Second Gallery"
              PopupID="two"
              PopupTitle="Popup title, might delete"
              PopupDescription="discription about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="This is project number one"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="description about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/video-poster.jpg"
              textInside="This is project number 2"
              modalID="#two"
              buttonText="Second Gallery"
              PopupID="two"
              PopupTitle="Popup title, might delete"
              PopupDescription="discription about images above"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}