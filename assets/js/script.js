'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const content = {
  id: {
    subtitle: "Esports Dunia",
    title: "Buat Kelola Pertandingan Esports",
    description: "Temukan teknologi atau tim untuk proyek digital di dunia esports, serta temukan spesialis, pengembang, atau peneliti individu yang ahli di bidang ini.",
    btnText: "Tentang Kami",
    followUs: "Ikuti Kami",
    moreInfo: "Info Lebih Lanjut",
    news: "Berita",
    tournamentInputTitle: "Input Turnamen",
    tournamentInputDescription: "Masukkan informasi turnamen Anda dengan mudah melalui formulir kami. Klik tombol di bawah untuk memulai.",
    tournamentInputButton: "Isi Formulir",
    home: "Beranda",
    emailPlaceholder: "Masukkan Email mu",
    copyrightText: "&copy; 2024 ESPORT .AZ Semua Hak dilindungi oleh <a href='#' class='copyright-link'>.AZ</a>",
    aboutUs: "Tentang Kami",
    tournaments: "Turnamen",
    videos: "Video",
    market: "Market",
    aboutUsContent: `
    <p class="about-text">
      Selamat datang di <strong>Azurium</strong>, pintu gerbang Anda menuju dunia Esports yang memikat dan dinamis.
      Kami percaya bahwa setiap momen di Esports adalah lebih dari sekadar permainan; ini adalah panggung bagi bakat,
      strategi, dan semangat yang tak tertandingi.
    </p>
    <p class="about-text">
      Dengan visi menjadi pemimpin global dalam solusi esports, Azurium menyediakan platform yang mengintegrasikan
      teknologi terdepan dengan pengalaman yang mendalam, memperkaya komunitas esports melalui turnamen yang seru,
      pengembangan talenta, dan inovasi berkelanjutan.
    </p>
    <div class="about-highlights">
      <div class="highlight">
        <h3>Visi Kami</h3>
        <p>Menciptakan ekosistem di mana setiap pemain, dari amatir hingga profesional, dapat berkembang dan mencapai
          potensi penuh mereka.</p>
      </div>
      <div class="highlight">
        <h3>Misi Kami</h3>
        <p>Memperkaya komunitas esports dengan turnamen adil, pelatihan berkualitas, dan kerjasama inovatif dengan
          berbagai pihak industri.</p>
      </div>
      <div class="highlight">
        <h3>Filosofi Kami</h3>
        <p>Kami percaya pada kekuatan komunitas dan kolaborasi, menciptakan lingkungan yang inklusif dan mendukung di
          mana semua orang bisa merasa diterima dan berkontribusi.</p>
      </div>
    </div>
  `


  },
  en: {
    subtitle: "Esports World",
    title: "Create and Manage Esports Matches",
    description: "Find technology or teams for your digital project in the world of esports, as well as individual specialists, developers, or researchers who are experts in the field.",
    btnText: "About Us",
    followUs: "Follow Us",
    moreInfo: "More Info",
    news: "News",
    home: "Home",
    emailPlaceholder: "Enter Your Email",
    copyrightText: "&copy; 2024 ESPORT .AZ All Right Reserved by <a href='#' class='copyright-link'>.AZ</a>",
    aboutUs: "About Us",
    tournamentInputTitle: "Tournament Input",
    tournamentInputDescription: "Easily input your tournament information through our form. Click the button below to get started.",
    copyrightText: "&copy; 2024 ESPORT .AZ All Right Reserved by <a href='#' class='copyright-link'>.AZ</a>",
    tournamentInputButton: "Fill Out the Form",
    tournaments: "Tournaments",
    videos: "Videos",
    market: "Market",
    aboutUsContent: `
      <p class="about-text">
        Welcome to <strong>Azurium</strong>, your gateway to the captivating and dynamic world of Esports.
        We believe that every moment in Esports is more than just a game; it is a stage for unmatched talent,
        strategy, and passion.
      </p>
      <p class="about-text">
        With a vision to become a global leader in esports solutions, Azurium provides a platform that integrates
        cutting-edge technology with deep expertise, enriching the esports community through exciting tournaments,
        talent development, and continuous innovation.
      </p>
      <div class="about-highlights">
        <div class="highlight">
          <h3>Our Vision</h3>
          <p>To create an ecosystem where every player, from amateur to professional, can thrive and reach their full potential.</p>
        </div>
        <div class="highlight">
          <h3>Our Mission</h3>
          <p>To enrich the esports community with fair tournaments, quality training, and innovative collaboration with
            various industry stakeholders.</p>
        </div>
        <div class="highlight">
          <h3>Our Philosophy</h3>
          <p>We believe in the power of community and collaboration, creating an inclusive and supportive environment where everyone can feel welcomed and contribute.</p>
        </div>
      </div>
    `

  }
};
const images = [
  'bg1.jpg',
  'bg2.png',
  'bg3.jpg',
  'bg4.jpg'
];

let currentIndex = 0;
const homeSection = document.getElementById('home');

function changeBackground() {
  // Hapus kelas fade-in sebelum gambar baru dimasukkan
  homeSection.classList.remove('fade-out-in');

  // Ubah background image
  homeSection.style.backgroundImage = `url(${images[currentIndex]})`;

  // Tambahkan kelas fade-in setelah perubahan background
  setTimeout(() => {
    homeSection.classList.add('fade-out-in');
  }, 100); // Kecilkan jeda sebelum fade dimulai

  // Update indeks ke gambar berikutnya
  currentIndex = (currentIndex + 1) % images.length;
}

// Panggil fungsi pertama kali
changeBackground();

// Ubah gambar setiap 5 detik (5000 ms)
setInterval(changeBackground, 5000);


const languageButtons = document.querySelectorAll(".lang-btn");
let selectedLanguage = 'id'; // Default language

// Fungsi untuk mengubah bahasa
function setLanguage(lang) {
  selectedLanguage = lang;

  // Mengubah teks elemen sesuai dengan bahasa yang dipilih
  document.querySelector(".hero-subtitle").innerText = content[lang].subtitle;
  document.querySelector(".hero-title").innerHTML = content[lang].title;
  document.querySelector(".hero-text").innerText = content[lang].description;
  document.querySelector(".btn").innerText = content[lang].btnText;
  document.querySelector(".social-title").innerText = content[lang].followUs;

  // Mengubah footer
  document.querySelector(".footer-list-title").innerText = content[lang].followUs;
  document.querySelector(".footer-newsletter p").innerText = content[lang].moreInfo;
  document.querySelector(".email-field").placeholder = content[lang].emailPlaceholder;
  document.querySelector(".copyright").innerHTML = content[lang].copyrightText;

  // Menambahkan teks navigasi
  document.querySelector("#about-us").innerText = content[lang].aboutUs;
  document.querySelector("#tournaments").innerText = content[lang].tournaments;
  document.querySelector("#videos").innerText = content[lang].videos;
  document.querySelector("#market").innerText = content[lang].market;
  document.getElementById("home-link").innerText = content[lang].home;
  document.getElementById("news-link").innerText = content[lang].news;

  // Mengubah teks untuk bagian Input Turnamen
  document.querySelector(".tournament-input-title").innerText = content[lang].tournamentInputTitle;
  document.querySelector(".tournament-input-description").innerText = content[lang].tournamentInputDescription;
  document.querySelector(".tournament-input-button").innerText = content[lang].tournamentInputButton;

  document.querySelector("#abodut-us .container").innerHTML = content[lang].aboutUsContent;

  // Perbarui waktu sesuai bahasa
  updateTime();
}

// Event listener untuk tombol bahasa
languageButtons.forEach(button => {
  button.addEventListener('click', function () {
    const lang = this.id;  // id = 'id' or 'en'
    setLanguage(lang);  // Panggil fungsi untuk mengubah bahasa
  });
});

/**
* navbar toggle
*/
navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Menutup navbar setelah klik link
navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
});

/**
* search toggle
*/
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

searchTogglers.forEach(toggler => {
  toggler.addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
});

/**
* header
*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Update waktu saat ini
function updateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const locale = selectedLanguage === 'id' ? 'id-ID' : 'en-US';
  const formattedTime = now.toLocaleString(locale, options);
  document.getElementById('current-time').innerText = formattedTime;
}

// Memperbarui waktu setiap detik
setInterval(updateTime, 1000);
updateTime();  // Menampilkan waktu segera

// Mengubah favicon
const link = document.querySelector("link[rel='icon']");
let i = 0;
setInterval(() => {
  link.href = `${i++ % 3}.png`;
}, 500);
if (!localStorage.getItem("captchaVerified")) {
  window.location.href = "captcha.html"; // Redirect ke halaman CAPTCHA
}

