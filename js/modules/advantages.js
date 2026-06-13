const advantagesContainer = document.querySelector('.advantages__items')
const advantages = [{ title: '10 лет', description: 'Успешной работы' }, { title: '1000+', description: 'Отремонтированных автомобилей' }, { title: '12', description: 'Опытных специалистов' }, { title: '3 года', description: 'Гарантия на работу' }]

advantages.forEach(el => {
    const markup = `
                            <article class="advantages__item" data-aos="zoom-in" data-aos-delay="0">
                            <div class="advantages__item-content">
                                <h3 class="advantages__item-title">${el.title}</h3>
                                <p class="advantages__item-description">${el.description}</p>
                            </div>
                        </article>
    `
    advantagesContainer.insertAdjacentHTML('beforeend', markup)
})
