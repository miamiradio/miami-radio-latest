




const playButton = document.querySelector('.playSong');

playButton.addEventListener('click', () => {
  const audio = document.querySelector('.audio');

  if (audio.paused) {
    audio.play();
    playButton.querySelector('.playSongIcon').classList.remove('fa-play');
    playButton.querySelector('.playSongIcon').classList.add('fa-pause');
  } else {
    audio.pause();
    playButton.querySelector('.playSongIcon').classList.remove('fa-pause');
    playButton.querySelector('.playSongIcon').classList.add('fa-play');
  }
});