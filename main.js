window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-item");


const highlightNavLink = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    mobileNavLinks.forEach((link) => {
        link.classList.remove("active");
    });

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

window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", highlightNavLink);


const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuOverlay = document.getElementById("mobile-menu");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");

if (mobileMenuButton && mobileMenuOverlay && closeMobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
        mobileMenuOverlay.classList.add("active");
        document.body.classList.add("no-scroll");
    });

    closeMobileMenuButton.addEventListener("click", () => {
        mobileMenuOverlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuOverlay.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    });
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const notif = document.getElementById('notification');
    notif.classList.add('show');

    setTimeout(() => {
        notif.classList.remove('show');
    }, 3000);

    this.reset();
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-category"); 
        const items = document.querySelectorAll(".portfolio-item"); 

        items.forEach((item) => {
            const itemCategory = item.getAttribute("data-category"); 
            if (category === "all" || itemCategory === category) {
                item.style.display = "flex"; 
            } else {
                item.style.display = "none";
            }
        });
    });
});

window.addEventListener("load", () => {
    const allButton = document.querySelector('.filter-btn[data-category="all"]');
    if (allButton) {
        allButton.click(); 
    }
});
