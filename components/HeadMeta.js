import Head from 'next/head';

const HeadMeta = (props) => { 
  return (
  <Head>
   <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
   <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
    <link rel="icon" type="image/png" href="/static/img/icon_img1.png" sizes="32x32" />
    
   <title>{props.title + " | JCC"}</title>
   <meta description={props.description} />
    {props.keywords ? 
        <meta keywords={props.keywords} /> : null
    }

   <meta property="og:title" content={props.title + " | JCC"} />
   <meta property="og:url" content="" />
   <meta property="og:description" content={props.description} />
   <meta itemProp="name" content={props.title +" | JCC"} />
   <meta itemProp="description" content={props.description} />

   <meta property="og:image" content="/static/img/icon_img1.png" />
   <meta itemProp="image" content="/static/img/icon_img1.png" />
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
   
  </Head>
)};


export default HeadMeta;
