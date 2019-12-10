
const LoadingScreen = () => {
     return (
      <div>
        <HeadMeta
          title="Welcome"
          description="JCC Construction"
          keywords="keywords for google stuff"
        /> 
        <Header/>
        <div className="blackout">
          <div id="jc" className="loading-text">JC</div>
            <br/>
          <div id="const" className="loading-text"> 
          &nbsp;CCCCCCCCC
          </div>
        </div> 
        <Footer/>
      </div>
     );
   
};

export default LoadingScreen;