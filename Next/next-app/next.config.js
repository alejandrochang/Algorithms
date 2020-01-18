const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withSass({
  // webpack(config, options) {
  //   return config
  // }
 cssModules: true,
 webpack: (config) => {
    return config;
 }
}))