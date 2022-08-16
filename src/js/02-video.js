import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_TIME = 'videoplayer-current-time';

const player = new Player('vimeo-player', {});

player.on('timeupdate', throttle(addCurrentTime, 1000));

function addCurrentTime(e) {
  localStorage.setItem(LOCAL_TIME, e.seconds);
}

const savedTime = localStorage.getItem(LOCAL_TIME);
if (savedTime) {
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
