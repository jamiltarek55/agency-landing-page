const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/*will output independent pages that don't require a monolithic server.
It's only compatible with next start or Serverless deployment platforms (like ZEIT Now).
you cannot use the custom server API.
*/
const nextConfiguration = {
  target: 'serverless', 
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
