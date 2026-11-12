pannellum.viewer('image-viewer', {
  type: 'equirectangular',
  panorama: 'mummopuisto.jpg',
  autoLoad: true
});

videojs('video-viewer', {
  plugins: {
    pannellum: {}
  }
});
