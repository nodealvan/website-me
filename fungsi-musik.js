  // Variabel untuk mengelola audio
  var audio = new Audio();
  var currentSongIndex = 0;
  var songList = document.querySelectorAll('.song-list li');

  // Fungsi untuk memutar lagu
  function playSong() {
      var songSrc = songList[currentSongIndex].getAttribute('data-src');
      if (songSrc) {
          audio.src = songSrc;
          audio.play();
      }
  }

  // Ketika dokumen sudah dimuat
  document.addEventListener('DOMContentLoaded', function() {
      // Tambahkan event listener untuk tombol musik
      document.getElementById('music-button').addEventListener('click', function() {
          var myModal = new bootstrap.Modal(document.getElementById('musicModal'), {
              keyboard: false
          });
          myModal.show();
      });

      // Tambahkan event listener untuk tombol play/pause
      document.getElementById('play-pause-button').addEventListener('click', function() {
          if (audio.paused) {
              audio.play();
              this.classList.remove('ri-play-circle-line');
              this.classList.add('ri-pause-circle-line');
          } else {
              audio.pause();
              this.classList.remove('ri-pause-circle-line');
              this.classList.add('ri-play-circle-line');
          }
      });

      // Tambahkan event listener untuk tombol next
      document.getElementById('next-button').addEventListener('click', function() {
          currentSongIndex++;
          if (currentSongIndex >= songList.length) {
              currentSongIndex = 0;
          }
          playSong();
      });

      // Tambahkan event listener untuk tombol previous
      document.getElementById('previous-button').addEventListener('click', function() {
          currentSongIndex--;
          if (currentSongIndex < 0) {
              currentSongIndex = songList.length - 1;
          }
          playSong();
      });

      // Tambahkan event listener untuk setiap lagu dalam daftar
      songList.forEach(function(song, index) {
          song.addEventListener('click', function() {
              currentSongIndex = index;
              playSong();
          });
      });

      // Update tampilan tombol play/pause ketika audio sedang bermain atau di-pause
      audio.addEventListener('play', function() {
          document.getElementById('play-pause-button').classList.remove('ri-play-circle-line');
          document.getElementById('play-pause-button').classList.add('ri-pause-circle-line');
      });

      audio.addEventListener('pause', function() {
          document.getElementById('play-pause-button').classList.remove('ri-pause-circle-line');
          document.getElementById('play-pause-button').classList.add('ri-play-circle-line');
      });
  });