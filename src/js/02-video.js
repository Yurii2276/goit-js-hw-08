import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', _.throttle(function (data) {
        localStorage.setItem("videoplayer-current-time", data.seconds)
        console.log('played the video!');
    }), 1000);

  player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:
           
            break;
    }
});
    