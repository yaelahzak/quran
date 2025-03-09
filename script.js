document.addEventListener("DOMContentLoaded", function() {
    const quranContainer = document.getElementById('quran-container');

    // Mengambil data dari API Al-Qur'an
    fetch('https://api.alquran.cloud/v1/quran')
        .then(response => response.json())
        .then(data => {
            const quran = data.data;
            let html = '';

            // Menampilkan setiap surah
            quran.surahs.forEach(surah => {
                html += `
                    <div class="surah">
                        <h3>${surah.name} (${surah.number})</h3>
                        <p>${surah.englishName}</p>
                        <p>${surah.ayahs.length} Ayat</p>
                    </div>
                `;
            });

            quranContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            quranContainer.innerHTML = '<p>Gagal memuat data Al-Qur\'an.</p>';
        });
});