// Инициализация Swiper на мобильных
let swiper = null;

function initSwiper() {
    if (window.innerWidth <= 790 && !swiper) {
        swiper = new Swiper('.swiper-container', {
            simulateTouch: true,
            allowTouchMove: true,
            noSwiping: false,
            preventInteractionOnTransition: false,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                enabled: true, // Явно включаем
                clickable: true,
                type: 'bullets', // Явно указываем тип
                dynamicBullets: false, // Для простых буллетов
            },
        });
    } else if (window.innerWidth > 790 && swiper) {
        swiper.destroy();
        swiper = null;
    }
}


// Инициализация Swiper при загрузке и ресайзе
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);


// Обработка кнопки "Показать все"/"Скрыть"
const toggleBtn = document.getElementById('toggle-btn');
const brandsGrid = document.querySelector('.brands-grid');
const svgElement = document.getElementById('show-all-btn-svg');

toggleBtn.addEventListener('click', function() {
    const isExpanded = brandsGrid.classList.contains('expanded');
    
    if (isExpanded) {
        brandsGrid.classList.remove('expanded');
        toggleBtn.textContent = 'Показать все';
        svgElement.style.transform = '';
    } else {
        brandsGrid.classList.add('expanded');
        toggleBtn.textContent = 'Скрыть';
        svgElement.style.transform = 'rotate(180deg)';
    }
});
