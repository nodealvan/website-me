    document.addEventListener('DOMContentLoaded', function () {
      const downloadButton = document.querySelector('.button');

      downloadButton.addEventListener('click', function (event) {
        event.preventDefault();

        const url = downloadButton.getAttribute('href');
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'alvan-Cv.pdf');

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });