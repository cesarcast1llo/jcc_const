const withSass = require('@zeit/next-sass');

const config = withSass();

const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: '<your_website_base_url>',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});

module.exports = config, sitemap;