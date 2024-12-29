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
    home: "Beranda",
    emailPlaceholder: "Masukkan Email mu",
    copyrightText: "&copy; 2024 ESPORT .AZ All Right Reserved by <a href='#' class='copyright-link'>.AZ</a>",
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
    tournaments: "Tournaments",
    videos: "Videos",
    market: "Market"
  }
};


const languageButtons = document.querySelectorAll(".lang-btn");

// Fungsi untuk mengubah bahasa
function setLanguage(lang) {
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

  // Perbarui waktu sesuai bahasa
  updateTime(lang);
}

// Event listener untuk tombol bahasa
languageButtons.forEach(button => {
  button.addEventListener('click', function() {
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
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

/**
 * search toggle
 */
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

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
function updateTime(lang = 'id') {
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
  const locale = lang === 'id' ? 'id-ID' : 'en-US';
  const formattedTime = now.toLocaleString(locale, options);
  document.getElementById('current-time').innerText = formattedTime;
}

// Memperbarui waktu setiap detik
setInterval(() => updateTime(selectedLanguage || 'id'), 1000);
updateTime();  // Menampilkan waktu segera

// changing the favicon
const link = document.querySelector("link[rel= 'icon']");
let i = 0;
setInterval(() => link.href =`${++i % 3}.png` , 500);
