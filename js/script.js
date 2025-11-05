// File JavaScript untuk fungsionalitas di masa depan
console.log('CV Website Ready!');

document.addEventListener('DOMContentLoaded', function() {
    const downloadImageBtn = document.getElementById('downloadImageBtn');
    const cvContainer = document.getElementById('cv-container');

    // Cek jika tombol dan kontainer ada
    if (downloadImageBtn && cvContainer) {
        downloadImageBtn.addEventListener('click', function() {
            // Opsi untuk html2canvas
            const options = {
                scale: 2, // Skala 2x untuk resolusi lebih baik
                useCORS: true, // Diperlukan jika ada gambar dari domain lain (misal: picsum.photos)
                logging: false // Menonaktifkan logging di konsol
            };

            // Menampilkan loader atau status 'rendering'
            downloadImageBtn.textContent = 'Memproses...';
            downloadImageBtn.disabled = true;

            html2canvas(cvContainer, options).then(canvas => {
                const link = document.createElement('a');
                // Mengganti spasi di nama dengan underscore untuk nama file
                const fileName = `CV_NAMA_LENGKAP.png`;
                link.download = fileName;
                link.href = canvas.toDataURL('image/png');
                
                // Memicu download
                link.click();

                // Mengembalikan tombol ke keadaan semula
                downloadImageBtn.innerHTML = '<i class="fas fa-camera mr-2"></i> Simpan Gambar';
                downloadImageBtn.disabled = false;

            }).catch(err => {
                console.error('Gagal membuat gambar CV:', err);
                // Mengembalikan tombol jika terjadi error
                downloadImageBtn.innerHTML = '<i class="fas fa-camera mr-2"></i> Simpan Gambar';
                downloadImageBtn.disabled = false;
                alert('Maaf, terjadi kesalahan saat mencoba menyimpan gambar.');
            });
        });
    }
});
