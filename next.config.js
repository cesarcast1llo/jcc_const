const withSass = require('@zeit/next-sass');

const config = withSass();

const sitemap = require('nextjs-sitemap-generator');
sitemap({
  baseUrl: 'https://jcc-const.herokuapp.com/',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'static/'
});

(module.exports = config), sitemap;
