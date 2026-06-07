// Brew Atelier - Interactive Elements

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // --- 1. Плавный скролл для всех ссылок ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // учитываем высоту шапки
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Обработка кнопок заказа и бронирования ---
    const actionButtons = document.querySelectorAll('button');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.innerText.trim();
            if (text === 'Заказать онлайн') {
                alert('Функция онлайн-заказа будет доступна в ближайшее время!');
            } else if (text === 'Забронировать') {
                alert('Столик успешно забронирован! Мы свяжемся с вами для подтверждения.');
            } else if (text === 'Смотреть меню') {
                document.querySelector('#menu-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 3. Sticky Navbar on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 4. Анимация появления карточек ---
    const cards = document.querySelectorAll('.group');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
