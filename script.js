// Инициализация Swiper на мобильных
let swiper = null;

function initSwiper() {
    if (window.innerWidth <= 790 && !swiper) {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (window.innerWidth > 790 && swiper) {
        swiper.destroy();
        swiper = null;
    }
}

// Обработка кнопки "Показать все"/"Скрыть"
const toggleBtn = document.getElementById('toggle-btn');
const brandsGrid = document.querySelector('.brands-grid');
const svgElement = document.getElementById('toggle-btn__svg');


toggleBtn.addEventListener('click', function() {
    const isExpanded = brandsGrid.classList.contains('expanded');
    
    if (isExpanded) {
        brandsGrid.classList.remove('expanded');
        toggleBtn.textContent = 'Показать все';
    } else {
        brandsGrid.classList.add('expanded');
        toggleBtn.textContent = 'Скрыть';
    }
});

toggleBtn.addEventListener('click', function rotateSVG180(element) {
    element.style.transform = 'rotate(180deg)';
});

// Инициализация Swiper при загрузке и ресайзе
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);