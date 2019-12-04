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
              mainImg={Data.portfolio.jobs[0].mainImg}
              imgsAlt={Data.portfolio.alt}
              jobDescription={Data.portfolio.jobs[0].jobDescription}
              modalID="#one"
              buttonText="First Gallery"
              PopupID="one"
              jobTitle={Data.portfolio.jobs[0].jobTitle}
              jobSubTitle={Data.portfolio.jobs[0].jobSubTitle}
              firstImg={Data.portfolio.jobs[0].firstImg} imgsAlt={Data.portfolio.alt}
              secondImg={Data.portfolio.jobs[0].secondImg} imgsAlt={Data.portfolio.alt}
              thirdImg={Data.portfolio.jobs[0].thirdImg} imgsAlt={Data.portfolio.alt}
              fourthImg={Data.portfolio.jobs[0].fourthImg} imgsAlt={Data.portfolio.alt}
              fifthImg={Data.portfolio.jobs[0].fourthImg} imgsAlt={Data.portfolio.alt}
            />
          </div>
          <div className="col-lg-6">
            <PortfolioModule
              mainImg={Data.portfolio.jobs[1].mainImg}
              imgsAlt={Data.portfolio.alt}
              jobDescription={Data.portfolio.jobs[1].jobDescription}
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
              mainImg="../static/img/video-poster.jpg"
              jobDescription="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#three"
              buttonText="Second Gallery"
              PopupID="three"
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
              mainImg="../static/img/placeholder.png"
              jobDescription="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#four"
              buttonText="First Gallery"
              PopupID="four"
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
              mainImg="../static/img/placeholder.png"
              jobDescription="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#five"
              buttonText="First Gallery"
              PopupID="five"
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
              mainImg="../static/img/placeholder.png"
              jobDescription="Started 01/01/2019 - Completed 04/01/2019"
              modalID="#six"
              buttonText="First Gallery"
              PopupID="six"
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