// Fungsi untuk menangani perpindahan halus saat mengklik tautan navigasi
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
}

// Menambahkan event listener untuk tautan navigasi
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Menghentikan peristiwa standar tautan
        const targetSection = this.getAttribute('href');
        scrollToSection(targetSection);
    });
});
