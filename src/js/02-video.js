import Vimeo from '@vimeo/player';
// import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('play', function() {
  console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});