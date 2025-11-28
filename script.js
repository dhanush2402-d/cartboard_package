document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    const pillars = document.querySelectorAll('.pillar-item');
    const descriptionBox = document.getElementById('pillar-description');
    pillars.forEach(pillar => {
        pillar.addEventListener('click', function() {
            const infoText = this.getAttribute('data-info');
            const pillarTitle = this.querySelector('h3').textContent;
            descriptionBox.innerHTML = `<strong>${pillarTitle}:</strong> ${infoText}`;
            descriptionBox.style.backgroundColor = '#f0f8ff';
            pillars.forEach(p => p.classList.remove('is-active'));
            this.classList.add('is-active');
        });
    });
});
