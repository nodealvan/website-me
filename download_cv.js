document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.getElementById('download-cv-button');
  
  downloadButton.addEventListener('click', function(event) {
    // Mencegah default action dari link, yaitu membuka URL
    event.preventDefault();
    
    // Mendapatkan URL file yang akan diunduh
    const fileUrl = this.getAttribute('href');
    
    // Membuat elemen <a> baru untuk memicu unduhan
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = ''; // Nama file diatur otomatis dari URL
    downloadLink.style.display = 'none'; // Menyembunyikan elemen <a> dari tampilan
    
    // Menambahkan elemen <a> ke dalam dokumen
    document.body.appendChild(downloadLink);
    
    // Memicu proses unduhan
    downloadLink.click();
    
    // Menghapus elemen <a> setelah unduhan selesai
    document.body.removeChild(downloadLink);
  });
});