pannellum.viewer('image-viewer', {
  type: 'equirectangular',
  panorama: 'mummopuisto.jpg',
  autoLoad: true
});

if (location.hostname === 'zakriye.github.io') {
  document.querySelector('#video-viewer source').src =
    'https://media.githubusercontent.com/media/zakriye/mummopuisto-360/main/mummopuisto.mp4';
}

videojs('video-viewer', {
  plugins: {
    pannellum: {}
  }
});
