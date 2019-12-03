import Data from "./data.json";
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
        description="add description of page for SEO"
        keywords="keywords for google stuff"
        />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Latest Jobs Completed</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PortfolioModule
              imgs={Data.portfolio.jobs[0].index}
              imgsAlt={Data.portfolio.alt}
              textInside="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="This was a renovated pool house with minimal stability foundation that was turned into a modern pool house with pillar stability and bathroom functionality"
              carousel1={Data.portfolio.jobs[0].carousel[0].img} imgsAlt={Data.portfolio.alt}
              carousel2={Data.portfolio.jobs[0].carousel[1].img} imgsAlt={Data.portfolio.alt}
              carousel3={Data.portfolio.jobs[0].carousel[2].img} imgsAlt={Data.portfolio.alt}
              carousel4={Data.portfolio.jobs[0].carousel[3].img} imgsAlt={Data.portfolio.alt}
              carousel5={Data.portfolio.jobs[0].carousel[4].img} imgsAlt={Data.portfolio.alt}
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              imgs={Data.portfolio.jobs[1].index}
              imgsAlt={Data.portfolio.alt}
              textInside="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#two"
              buttonText="Second Gallery"
              PopupID="two"
              PopupTitle="Popup title, might delete"
              PopupDescription="This was a renovated pool house with minimal stability foundation that was turned into a modern pool house with pillar stability and bathroom functionality"
              img1={Data.portfolio.jobs[1].carousel} imgsAlt={Data.portfolio.alt}
              img2={Data.portfolio.jobs[1].carousel} imgsAlt={Data.portfolio.alt}
              img3={Data.portfolio.jobs[1].carousel} imgsAlt={Data.portfolio.alt}
              img4={Data.portfolio.jobs[1].carousel} imgsAlt={Data.portfolio.alt}
              img5={Data.portfolio.jobs[1].carousel} imgsAlt={Data.portfolio.alt}
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/video-poster.jpg"
              textInside="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#two"
              buttonText="Second Gallery"
              PopupID="two"
              PopupTitle="Popup title, might delete"
              PopupDescription="This was a renovated pool house with minimal stability foundation that was turned into a modern pool house with pillar stability and bathroom functionality"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="This was a renovated pool house with minimal stability foundation that was turned into a modern pool house with pillar stability and bathroom functionality"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="This was a renovated pool house with minimal stability foundation that was turned into a modern pool house with pillar stability and bathroom functionality"
              img1="../static/img/placeholder.png" alt1="alt"
              img2="../static/img/test.jpg" alt2="alt"
              img3="../static/img/uncharted.jpg" alt3="alt"
              img4="../static/img/uncharted.jpg" alt4="alt"
              img5="../static/img/uncharted.jpg" alt5="alt"
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              img="../static/img/placeholder.png"
              textInside="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              PopupTitle="Popup title prob going to delete"
              PopupDescription="This was a renovated pool house with minimal stability foundation that was turned into a modern pool house with pillar stability and bathroom functionality"
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