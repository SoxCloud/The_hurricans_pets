// Responsive Navbar
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero Slider
let slideIndex = 0;
let slides, dots;

window.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.slide');
  dots = document.querySelectorAll('.dot');
  showSlide(slideIndex);
  setInterval(nextSlide, 5000);
});

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[n].classList.add('active');
  dots[n].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
  lightboxImg.src = galleryItems[currentIndex].src;
  lightboxCaption.textContent = galleryItems[currentIndex].alt;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
  lightboxImg.src = galleryItems[currentIndex].src;
  lightboxCaption.textContent = galleryItems[currentIndex].alt;
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
