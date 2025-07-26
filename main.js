// Contact Form Notification Handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Tampilkan notifikasi
  const notif = document.getElementById('notification');
  notif.classList.add('show');

  // Sembunyikan setelah 3 detik
  setTimeout(() => {
    notif.classList.remove('show');
  }, 3000);

  // (Opsional) Reset form jika mau
  this.reset();
});

// Portfolio Filter System
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    const items = document.querySelectorAll(".portfolio-item");

    items.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      item.style.display = (category === "all" || itemCategory === category) ? "block" : "none";
    });
  });
});
