document.addEventListener("DOMContentLoaded", function() {
  const musicButton = document.getElementById("music-button");
  const musicModal = document.getElementById("musicModal");
  const closeButton = musicModal.querySelector(".btn-close");
  const songListItems = document.querySelectorAll(".song-list li");
  let audioPlayer = new Audio();
  let currentSongIndex = -1; // -1 artinya tidak ada lagu yang diputar

  // Show modal when music button is clicked
  musicButton.addEventListener("click", function() {
      musicModal.style.display = "block";
  });

  // Hide modal when close button is clicked
  closeButton.addEventListener("click", function() {
      musicModal.style.display = "none";
      stopSong();
  });

  // Play song when a song list item is clicked
  songListItems.forEach((item, index) => {
      item.addEventListener("click", function() {
          const songSrc = item.getAttribute("data-src");
          playSong(songSrc, index);
      });
  });

  // Control buttons
  const playPauseButton = document.getElementById("play-pause-button");
  const nextButton = document.getElementById("next-button");
  const previousButton = document.getElementById("previous-button");

  playPauseButton.addEventListener("click", function() {
      if (audioPlayer.paused) {
          playSong(songListItems[currentSongIndex].getAttribute("data-src"), currentSongIndex);
      } else {
          pauseSong();
      }
  });

  nextButton.addEventListener("click", function() {
      if (currentSongIndex < songListItems.length - 1) {
          playSong(songListItems[currentSongIndex + 1].getAttribute("data-src"), currentSongIndex + 1);
      } else {
          playSong(songListItems[0].getAttribute("data-src"), 0);
      }
  });

  previousButton.addEventListener("click", function() {
      if (currentSongIndex > 0) {
          playSong(songListItems[currentSongIndex - 1].getAttribute("data-src"), currentSongIndex - 1);
      } else {
          playSong(songListItems[songListItems.length - 1].getAttribute("data-src"), songListItems.length - 1);
      }
  });

  function playSong(src, index) {
      if (currentSongIndex !== index) {
          stopSong();
          audioPlayer.src = src;
          audioPlayer.play();
          currentSongIndex = index;
          updatePlayPauseButton(true);
      } else {
          audioPlayer.play();
          updatePlayPauseButton(true);
      }
  }

  function pauseSong() {
      audioPlayer.pause();
      updatePlayPauseButton(false);
  }

  function stopSong() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      currentSongIndex = -1;
      updatePlayPauseButton(false);
  }

  function updatePlayPauseButton(isPlaying) {
      if (isPlaying) {
          playPauseButton.classList.remove("ri-play-circle-line");
          playPauseButton.classList.add("ri-pause-circle-line");
      } else {
          playPauseButton.classList.remove("ri-pause-circle-line");
          playPauseButton.classList.add("ri-play-circle-line");
      }
  }
});
