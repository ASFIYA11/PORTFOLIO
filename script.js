// ====== script.js ======

// Scroll fade-in intersection animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.05
});

document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));

// Dark theme toggle logic switching high-contrast values
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
