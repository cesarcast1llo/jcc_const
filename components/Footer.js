import Link from 'next/link';
import "../styles/websitename.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="container footer-nav">
        <div className="row" >
          <div className="col-2 logo-container">
            <img className="logo" src="../static/img/icon_img1.png" alt="JCC Construction Website"/>
          </div>
          <div className="col-10 links">

          </div>
        </div>
        <div className="row" >
          <div className="col-12 signature">
            &copy; 2020 allrights reserrrveeed
          </div>
        </div>
      </div>
    </div>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
  </div>
);

export default Footer;