// Fungsi untuk memvalidasi form sebelum submit
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || subject === '' || message === '') {
                event.preventDefault();
                alert('Semua field harus diisi!');
                return;
            }
            
            // Validasi format email sederhana
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                event.preventDefault();
                alert('Format email tidak valid!');
                return;
            }
        });
    }
    
    // Cek status form submission
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if (status === 'success') {
        alert('Pesan berhasil dikirim! Terima kasih atas pesan Anda.');
    } else if (status === 'error') {
        alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.');
    }
    
    // Animasi smooth scroll untuk link navigasi
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Hanya proses jika link mengarah ke halaman yang sama dengan anchor
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});