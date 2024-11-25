// Intersection Observer to trigger animations
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('header-visible');
            }
        });
    });

    observer.observe(header);
});
