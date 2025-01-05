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
    market: "Market"
    
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
    market: "Market"
  }
};
window.addEventListener('load', () => {
  // Pilih elemen-elemen yang ingin dianimasikan
  const subtitle = document.querySelector('.hero-subtitle');
  const title = document.querySelector('.hero-title');
  const text = document.querySelector('.hero-text');
  const button = document.querySelector('.btn');

  // Fungsi untuk menambahkan kelas active untuk animasi
  function animateElements() {
    subtitle.classList.add('active');
    setTimeout(() => title.classList.add('active'), 500); // Delay 500ms
    setTimeout(() => text.classList.add('active'), 1000); // Delay 1000ms
    setTimeout(() => button.classList.add('active'), 1500); // Delay 1500ms
  }

  // Jalankan animasi setelah halaman dimuat
  animateElements();
});
const images = [
  'bg1.jpg',
  'bg2.png',
  'bg3.jpg',
  'bg4.jpg'
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero'); // Ambil elemen dengan kelas .hero

function changeBackground() {
  // Menambahkan kelas fade-out sebelum mengganti gambar
  heroSection.classList.add('fade-out');

  // Tunggu hingga animasi fade-out selesai (2 detik), lalu ubah background
  setTimeout(() => {
    // Ganti background image
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;

    // Menghapus kelas fade-out dan menambahkan kelas fade-in
    heroSection.classList.remove('fade-out');
    heroSection.classList.add('fade-in');

    // Update indeks gambar ke yang berikutnya
    currentIndex = (currentIndex + 1) % images.length;
  }, 2000); // Waktu delay untuk fade-out
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
