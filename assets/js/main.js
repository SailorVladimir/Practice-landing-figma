// Инициализируем Swiper
new Swiper('.image-slider',{
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Колличество слайдов для показа
    slidesPerView: 2,

    //Отступ между слайдами
    spaceBetween: 30,

    //Количество перелистывемых слайдеров
    slidesPerGroup: 1,

    //Бесконечный слайдер
    loop: true,

    //Автопрокрутка
    autoplay: {
        //Пауза между прокруткой
        delay: 2000,
        //Отключить после ручного переключения
        disableOnInteraction: false
    },
});