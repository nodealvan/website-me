document.addEventListener('DOMContentLoaded', function () {
  const titleText = "Hello, Selamat Datang!"; // Judul yang akan ditampilkan dengan efek typewriter
  const contentText = "Semoga harimu menyenangkan :)"; // Teks biasa yang akan ditampilkan dengan efek typewriter
  const delay = 100; // Delay antara penambahan karakter (ms)
  const titleElement = document.getElementById('typewriter-title');
  const contentElement = document.getElementById('typewriter-content');

  // Function untuk menampilkan teks dengan efek typewriter
  function typeWriter(element, text) {
      let i = 0;
      const timer = setInterval(function() {
          element.textContent += text.charAt(i);
          i++;
          if (i > text.length - 1) {
              clearInterval(timer);
          }
      }, delay);
  }

  // Panggil function typeWriter untuk judul dan teks biasa
  typeWriter(titleElement, titleText);
  setTimeout(function() {
      typeWriter(contentElement, contentText);
  }, titleText.length * delay); // Mulai teks biasa setelah judul selesai ditulis
});