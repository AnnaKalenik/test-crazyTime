export default function video() {
    const video = document.querySelector('.about__video');
    const btnPlay = document.querySelector('.about__btn-play');
    const classHidden = document.querySelector('.about__btn-play_hidden');

    const startVideo = () => {
        if (!classHidden) {
            btnPlay.classList.add('about__btn-play_hidden');
            video.setAttribute('controls', 'true');
            video.play();
        }
    }

    const pauseVideo = () => {
        if (video.play) {
            video.pause();
            btnPlay.classList.remove('about__btn-play_hidden');
            video.removeAttribute('controls', 'true');
        }
    }

    btnPlay.addEventListener('click', startVideo);
    video.addEventListener('click', pauseVideo);

    const isVideoEnded = () => {
        if (video.ended) {
            btnPlay.classList.remove('about__btn-play_hidden');
            video.removeAttribute('controls');
        }
    }

    video.addEventListener('ended', isVideoEnded);
}
