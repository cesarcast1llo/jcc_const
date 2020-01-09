import Data from './data.json';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import PortfolioModule from '../components/PortfolioModule';
import ScrollAnimation from 'react-animate-on-scroll';

import '../styles/websitename.scss';

export default function Porftolio() {
  return (
    <React.Fragment>
      <HeadMeta
        title="Contact"
        description="filled in with description of page"
        keywords="keywords for google stuff"
      />
      <Header />

      <div className="portfolio-page">
        <div className="container portfolio-container">
          <div className="row">
            <div className="col-lg-12 portfolio-header">
              <h1>Latest Jobs Completed</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInLeft"
                mainImg={Data.portfolio.jobs[0].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[0].jobDescription}
                modalID="#one"
                buttonName={Data.portfolio.jobs[0].buttonName}
                PopupID="one"
                jobTitle={Data.portfolio.jobs[0].jobTitle}
                jobSubTitle={Data.portfolio.jobs[0].jobSubTitle}
                firstImg={Data.portfolio.jobs[0].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[0].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[0].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInRight' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInRight"
                mainImg={Data.portfolio.jobs[1].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[1].jobDescription}
                modalID="#two"
                buttonName={Data.portfolio.jobs[1].buttonName}
                PopupID="two"
                jobTitle={Data.portfolio.jobs[1].jobTitle}
                jobSubTitle={Data.portfolio.jobs[1].jobSubTitle}
                firstImg={Data.portfolio.jobs[1].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[1].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[1].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInLeft"
                mainImg={Data.portfolio.jobs[0].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[0].jobDescription}
                modalID="#one"
                buttonName={Data.portfolio.jobs[0].buttonName}
                PopupID="one"
                jobTitle={Data.portfolio.jobs[0].jobTitle}
                jobSubTitle={Data.portfolio.jobs[0].jobSubTitle}
                firstImg={Data.portfolio.jobs[0].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[0].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[0].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInRight' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInRight"
                mainImg={Data.portfolio.jobs[1].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[1].jobDescription}
                modalID="#two"
                buttonName={Data.portfolio.jobs[1].buttonName}
                PopupID="two"
                jobTitle={Data.portfolio.jobs[1].jobTitle}
                jobSubTitle={Data.portfolio.jobs[1].jobSubTitle}
                firstImg={Data.portfolio.jobs[1].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[1].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[1].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInLeft"
                mainImg={Data.portfolio.jobs[0].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[0].jobDescription}
                modalID="#one"
                buttonName={Data.portfolio.jobs[0].buttonName}
                PopupID="one"
                jobTitle={Data.portfolio.jobs[0].jobTitle}
                jobSubTitle={Data.portfolio.jobs[0].jobSubTitle}
                firstImg={Data.portfolio.jobs[0].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[0].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[0].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInRight' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInRight"
                mainImg={Data.portfolio.jobs[1].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[1].jobDescription}
                modalID="#two"
                buttonName={Data.portfolio.jobs[1].buttonName}
                PopupID="two"
                jobTitle={Data.portfolio.jobs[1].jobTitle}
                jobSubTitle={Data.portfolio.jobs[1].jobSubTitle}
                firstImg={Data.portfolio.jobs[1].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[1].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[1].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInLeft"
                mainImg={Data.portfolio.jobs[0].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[0].jobDescription}
                modalID="#one"
                buttonName={Data.portfolio.jobs[0].buttonName}
                PopupID="one"
                jobTitle={Data.portfolio.jobs[0].jobTitle}
                jobSubTitle={Data.portfolio.jobs[0].jobSubTitle}
                firstImg={Data.portfolio.jobs[0].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[0].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[0].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[0].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
            <div className="col-lg-6 portfolio-modules">
              {/* <ScrollAnimation animateIn='fadeInRight' animateOnce={true}> */}
              <PortfolioModule
                animate="fadeInRight"
                mainImg={Data.portfolio.jobs[1].mainImg}
                imgsAlt={Data.portfolio.alt}
                jobDescription={Data.portfolio.jobs[1].jobDescription}
                modalID="#two"
                buttonName={Data.portfolio.jobs[1].buttonName}
                PopupID="two"
                jobTitle={Data.portfolio.jobs[1].jobTitle}
                jobSubTitle={Data.portfolio.jobs[1].jobSubTitle}
                firstImg={Data.portfolio.jobs[1].firstImg}
                imgsAlt={Data.portfolio.alt}
                secondImg={Data.portfolio.jobs[1].secondImg}
                imgsAlt={Data.portfolio.alt}
                thirdImg={Data.portfolio.jobs[1].thirdImg}
                imgsAlt={Data.portfolio.alt}
                fourthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
                fifthImg={Data.portfolio.jobs[1].fourthImg}
                imgsAlt={Data.portfolio.alt}
              />
              {/* </ScrollAnimation> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
