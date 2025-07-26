// ===== Scroll to Top on Reload =====
// Memastikan halaman selalu dimulai dari atas saat di-reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ===== Smooth Scroll Active Link Highlight =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-item");

// Fungsi untuk mengaktifkan link navigasi berdasarkan posisi scroll
const highlightNavLink = () => {
    let current = "";

    sections.forEach((section) => {
        // Offset dikurangi 100px untuk mengkompensasi tinggi header tetap
        const sectionTop = section.offsetTop - 100;
        // Jika posisi scroll saat ini sudah melewati bagian atas section
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    // Hapus kelas 'active' dari semua link navigasi desktop
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    // Hapus kelas 'active' dari semua link navigasi mobile
    mobileNavLinks.forEach((link) => {
        link.classList.remove("active");
    });

    // Tambahkan kelas 'active' ke link yang sesuai dengan section yang sedang aktif
    navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
    mobileNavLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};

// Panggil fungsi saat scroll dan saat halaman dimuat untuk inisialisasi
window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", highlightNavLink);


// ===== Responsive Mobile Menu Toggle =====
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuOverlay = document.getElementById("mobile-menu");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");

if (mobileMenuButton && mobileMenuOverlay && closeMobileMenuButton) {
    // Event listener untuk membuka menu mobile
    mobileMenuButton.addEventListener("click", () => {
        mobileMenuOverlay.classList.add("active");
        // Menambahkan kelas ke body untuk menonaktifkan scroll saat menu terbuka
        document.body.classList.add("no-scroll");
    });

    // Event listener untuk menutup menu mobile
    closeMobileMenuButton.addEventListener("click", () => {
        mobileMenuOverlay.classList.remove("active");
        // Menghapus kelas dari body untuk mengaktifkan kembali scroll
        document.body.classList.remove("no-scroll");
    });

    // Tutup menu saat link di menu mobile diklik
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuOverlay.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    });
}

// ===== Contact Form Notification Handler =====
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Tampilkan notifikasi
    const notif = document.getElementById('notification');
    notif.classList.add('show');

    // Sembunyikan setelah 3 detik
    setTimeout(() => {
        notif.classList.remove('show');
    }, 3000);

    // Reset form
    this.reset();
});

// ===== Portfolio Filter System =====
document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        // Hapus kelas 'active' dari semua tombol filter
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        // Tambahkan kelas 'active' ke tombol yang sedang diklik
        btn.classList.add("active");

        const category = btn.getAttribute("data-category"); // Dapatkan kategori dari tombol
        const items = document.querySelectorAll(".portfolio-item"); // Dapatkan semua item portfolio

        items.forEach((item) => {
            const itemCategory = item.getAttribute("data-category"); // Dapatkan kategori dari item
            // Tampilkan atau sembunyikan item berdasarkan kategori yang dipilih
            if (category === "all" || itemCategory === category) {
                item.style.display = "flex"; // Gunakan 'flex' karena portfolio-item adalah flex container
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Inisialisasi filter saat halaman dimuat (tampilkan semua secara default)
window.addEventListener("load", () => {
    const allButton = document.querySelector('.filter-btn[data-category="all"]');
    if (allButton) {
        allButton.click(); // Simulasikan klik tombol "All"
    }
});
