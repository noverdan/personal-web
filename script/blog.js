let blogs = 
[
    {
        "judul": "Raih Pekerjaan Impian di Tengah Keterbatasan Fisik",
        "tanggal": "20 Maret 2023",
        "preview": "Keterbatasan memunculkan stigma terhadap kelompok difabel, namun menjadi individu dengan disabilitas tidak menjadikan Dolos putus asa dengan keterbatasan untuk meraih pekerjaan impiannya.",
        "gambar": "https://assets.skilvul.com/blog/raih-pekerjaan-impian-di-tengah-keterbatasan-fisik-details-1678783692640.jpg",
        "id": 1,
        "link": "https://skilvul.com/blogs/raih-pekerjaan-impian-di-tengah-keterbatasan-fisik"
    },
    {
        "judul": "Dari Lulusan Teknik Biomedis hingga Menjadi System Analyst dan UI/UX Designer",
        "tanggal": "20 Maret 2023",
        "preview": "Berdasarkan riset Boston Consulting Group, partisipasi perempuan Indonesia pada bidang digital hanya berkisar 22%, lebih rendah dibandingkan negara lain di Asia Tenggara. Simak bagaimana Faiq mengembangkan kemampuan diri dan memulai karirnya di bidang teknologi bersama Skilvul.",
        "gambar": "https://assets.skilvul.com/blog/dari-lulusan-teknik-biomedis-hingga-menjadi-system-analyst-dan-uiux-designer-details-1678783964487.jpg",
        "id": 2,
        "link": "https://skilvul.com/blogs/dari-lulusan-teknik-biomedis-hingga-menjadi-system-analyst-dan-uiux-designer"
    },
    {
        "judul": "Merintis Harapan dari Pesisir Kalimantan Timur",
        "tanggal": "20 Maret 2023",
        "preview": "Cari tahu bagaimana sekelompok remaja SMA dari pesisir Muara Badak menciptakan ide solusi inovatif berbasis teknologi untuk memberantas hoax dan memberikan perubahan positif bagi komunitas mereka.",
        "gambar": "https://assets.skilvul.com/blog/merintis-harapan-dari-kalimantan-timur-details-1678783138195.jpg",
        "id": 3,
        "link": "https://skilvul.com/blogs/merintis-harapan-dari-kalimantan-timur"
    },
    {
        "judul": "Kesempatan Karir 3D Animator di Masa Depan",
        "tanggal": "20 Maret 2023",
        "preview": "Sobat Skilvul, apakah pernah terpikir dalam benak kamu kira-kira gimana ya rasanya jadi seorang 3D animator? Apakah memulai karier sebagai 3D animator di Indonesia adalah pilihan yang tepat? Yuk cari tahu jawabannya dalam artikel berikut ini!",
        "gambar": "https://assets.skilvul.com/blog/kesempatan-karir-3d-animator-di-masa-depan-details-1679293101765.jpg",
        "id": 4,
        "link": "https://skilvul.com/blogs/kesempatan-karir-3d-animator-di-masa-depan"
    },
    {
        "judul": "Membuat Game pakai Unity untuk Pemula",
        "tanggal": "24 Februari 2023",
        "preview": "Sobat Skilvul, apakah kamu tertarik menjadi seorang game developer? Kalau iya, kamu pasti tidak asing lagi dengan Unity. Buat kamu yang masih belum tahu atau ingin mengenal lebih lanjut mengenai Unity, yuk baca artikel ini sampai akhir ya!",
        "gambar": "https://assets.skilvul.com/blog/membuat-game-pakai-unity-untuk-pemula-details-1677233279285.jpg",
        "id": 5,
        "link": "https://skilvul.com/blogs/membuat-game-pakai-unity-untuk-pemula"
    },
    {
        "judul": "Cara Bangun Portfolio UI/UX Design Pertama",
        "tanggal": "23 Februari 2023",
        "preview": "Sobat Skilvul, apakah kalian sudah tahu kalau pekerjaan sebagai UI/UX Designer menjadi yang paling dicari saat ini hingga di masa mendatang?",
        "gambar": "https://assets.skilvul.com/blog/cara-bangun-portfolio-uiux-design-pertama-details-1677125917329.jpg",
        "id": 6,
        "link": "https://skilvul.com/blogs/cara-bangun-portfolio-uiux-design-pertama"
    }
]

const gridContainerBlogs = document.querySelector(".grid-content")

blogs.map(blog =>{
    console.log(blog.judul)
})
blogs.forEach(function(item, index) {
    gridContainerBlogs.innerHTML += `
    <div class="card card${index+1} grid-blog-card">
        <img class="card-image" src="${item.gambar}" alt="" width="500">
        <h2 class="card-title">${item.judul}</h2>
        <p class="card-date">${item.tanggal}</p>
        <p class="card-preview">${item.preview}</p>
    </div>
    `
});

gridContainerBlogs.addEventListener('click', function(event) {
    try {
        let elemen = event.target;
        let card = elemen.closest('.card');
        let namaKelas = card.classList[1];
        cardClickRedirect(namaKelas); 
    } catch (error) {
    }
});

function cardClickRedirect(kelas){
    let nomorCard = parseInt(kelas.match(/\d+$/)[0]);
    let index = nomorCard - 1
    let link = blogs[index].link
    window.location.href = link
}