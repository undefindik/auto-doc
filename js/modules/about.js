const aboutData = [
    {
        title: 'Согласуем каждый этап',
        description: 'Ни одно действие по ремонту автомобиля не проводится без согласия с клиентом',
        image: '/about/1.png'
    },
    {
        title: 'Возвращаем ваши старые детали',
        description: 'Это дополнительный гарант честного оказания услуг',
        image: '/about/2.png'
    },
    {
        title: 'Сами подбираем и доставляем запчасти',
        description: 'Сэкономьте свое время и нервы, доверяя нам поиск и доставку запчастей',
        image: '/about/3.png'
    },
    {
        title: 'Бесплатная диагностика перед ремонтом',
        description: 'Точно определим проблему без скрытых платежей',
        image: '/about/4.png'
    },
    {
        title: 'Работаем с любыми марками авто',
        description: 'Отечественные, европейские, азиатские и американские автомобили',
        image: '/about/5.png'
    },
    {
        title: 'Прозрачная смета до начала работ',
        description: 'Вы всегда знаете итоговую стоимость до того, как мы возьмёмся за ремонт',
        image: '/about/6.png'
    },
    {
        title: 'Современное оборудование',
        description: 'Используем сертифицированные стенды и профессиональный инструмент',
        image: '/about/7.png'
    },
    {
        title: 'Комфортная зона ожидания',
        description: 'Для вас доступны мягкие диваны, бесплатный Wi-Fi',
        image: '/about/8.png'
    },
    {
        title: 'Свежий кофе и чай бесплатно',
        description: 'Угощаем ароматным зерновым кофе, чаем',
        image: '/about/9.png'
    },
];

const aboutSwiper = document.querySelector('.about__swiper-wrapper')

aboutData.forEach(el => {
    const markup = `<div class="swiper-slide about__slide">
                       <article class="about__item">
                       <div class="about__content">
                                                   <h3 class="about__item-title title-3-light">${el.title}</h3>
                            <p class="about__item-description description">${el.description}</p></div>
                            <img class="about__item-img" src="./img${el.image}" />
                        </article>
                    </div>
    `
    aboutSwiper.insertAdjacentHTML('beforeend', markup)
})