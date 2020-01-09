import Head from 'next/head';

const HeadMeta = props => {
  return (
    <Head>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5LPFKW7');`
        }}
      />
      {/* End Google Tag Manager */}
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      <link
        rel="icon"
        type="image/png"
        href="/static/img/jcicon.png"
        sizes="32x32"
      />

      <title>{props.title + ' | JCC'}</title>
      <meta description={props.description} />
      {props.keywords ? <meta keywords={props.keywords} /> : null}

      <meta property="og:title" content={props.title + ' | JCC'} />
      <meta property="og:url" content="" />
      <meta property="og:description" content={props.description} />
      <meta itemProp="name" content={props.title + ' | JCC'} />
      <meta itemProp="description" content={props.description} />

      <meta property="og:image" content="/static/img/icon_img1.png" />
      <meta itemProp="image" content="/static/img/icon_img1.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
};

export default HeadMeta;
