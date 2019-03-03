const path = require('path');

module.exports = {
  PORT: 4040,

  FAVICONS: {
    // Original Favicon
    logo: path.join(__dirname, './favicon.png'),
    // Theme color for mobile browsers
    background: '#ffeeee',
    // Type of favicons to generate, WARNING: decreases build speed, use wisely
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  },

  PUBLIC_PATH: path.join(__dirname, './public'),
};
