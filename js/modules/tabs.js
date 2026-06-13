const servicesCategoryData = [
    { name: 'Все', key: 'all' },
    { name: 'Двигатель', key: 'engine' },
    { name: 'Ходовая', key: 'chassis' },
    { name: 'Тормозная система', key: 'brakes' },
    { name: 'Регулярное ТО', key: 'maintenance' },
    { name: 'Компьютерная диагностика', key: 'diagnostic' },
    { name: 'Шиномонтаж', key: 'tires' },
    { name: 'АКПП', key: 'automatic-transmission' },
    { name: 'МКПП', key: 'manual-transmission' },
    { name: 'Электрика', key: 'electrical' },
    { name: 'Кондиционер', key: 'ac' },
    { name: 'Система охлаждения', key: 'cooling' },
    { name: 'Выхлопная система', key: 'exhaust' },
    { name: 'Рулевое управление', key: 'steering' },
    { name: 'Топливная система', key: 'fuel-system' },
    { name: 'Турбина', key: 'turbo' },
    { name: 'Стартер и генератор', key: 'starter-alternator' },
    { name: 'Подвеска', key: 'suspension' },
    { name: 'Кузовной ремонт', key: 'bodywork' },
    { name: 'Покраска', key: 'painting' },
    { name: 'Стекло', key: 'glass' },
    { name: 'Ремни безопасности', key: 'seatbelts' },
    { name: 'Подушки безопасности', key: 'airbags' },
    { name: 'Парктроники и камеры', key: 'parking-assist' },
    { name: 'Чип-тюнинг', key: 'chip-tuning' },
    { name: 'Бронирование плёнкой', key: 'film-protection' },
    { name: 'Детейлинг', key: 'detailing' },
    { name: 'Шумоизоляция', key: 'soundproofing' }
];
const servicesData = [
    { name: 'Диагностика двигателя', price: 1500, category: 'engine' },
    { name: 'Замена масла в двигателе', price: 800, category: 'engine' },
    { name: 'Замена ремня ГРМ', price: 3500, category: 'engine' },
    { name: 'Замена цепи ГРМ', price: 8000, category: 'engine' },
    { name: 'Капитальный ремонт двигателя', price: 25000, category: 'engine' },
    { name: 'Замена амортизаторов', price: 4000, category: 'chassis' },
    { name: 'Замена шаровых опор', price: 2000, category: 'chassis' },
    { name: 'Замена сайлентблоков', price: 3500, category: 'chassis' },
    { name: 'Сход-развал', price: 2000, category: 'chassis' },
    { name: 'Замена тормозных колодок', price: 1200, category: 'brakes' },
    { name: 'Замена тормозных дисков', price: 2500, category: 'brakes' },
    { name: 'Замена тормозной жидкости', price: 1500, category: 'brakes' },
    { name: 'Ремонт суппортов', price: 2000, category: 'brakes' },
    { name: 'Замена масла и фильтра', price: 800, category: 'maintenance' },
    { name: 'Замена воздушного фильтра', price: 300, category: 'maintenance' },
    { name: 'Замена салонного фильтра', price: 350, category: 'maintenance' },
    { name: 'Комплексное ТО', price: 5000, category: 'maintenance' },
    { name: 'Компьютерная диагностика', price: 1500, category: 'diagnostic' },
    { name: 'Сброс ошибок ЭБУ', price: 800, category: 'diagnostic' },
    { name: 'Адаптация дроссельной заслонки', price: 1200, category: 'diagnostic' },
    { name: 'Шиномонтаж R13-R16', price: 2000, category: 'tires' },
    { name: 'Шиномонтаж R17-R18', price: 2800, category: 'tires' },
    { name: 'Балансировка колес', price: 800, category: 'tires' },
    { name: 'Ремонт шины', price: 500, category: 'tires' },
    { name: 'Диагностика АКПП', price: 2500, category: 'automatic-transmission' },
    { name: 'Замена масла в АКПП', price: 3500, category: 'automatic-transmission' },
    { name: 'Ремонт АКПП', price: 15000, category: 'automatic-transmission' },
    { name: 'Замена масла в МКПП', price: 1500, category: 'manual-transmission' },
    { name: 'Замена сцепления', price: 7000, category: 'manual-transmission' },
    { name: 'Ремонт МКПП', price: 12000, category: 'manual-transmission' },
    { name: 'Диагностика электрооборудования', price: 1500, category: 'electrical' },
    { name: 'Замена генератора', price: 3500, category: 'electrical' },
    { name: 'Замена стартера', price: 3000, category: 'electrical' },
    { name: 'Замена аккумулятора', price: 500, category: 'electrical' },
    { name: 'Заправка кондиционера', price: 2000, category: 'ac' },
    { name: 'Диагностика кондиционера', price: 1000, category: 'ac' },
    { name: 'Ремонт кондиционера', price: 5000, category: 'ac' },
    { name: 'Замена антифриза', price: 1200, category: 'cooling' },
    { name: 'Замена радиатора', price: 4000, category: 'cooling' },
    { name: 'Замена помпы', price: 3500, category: 'cooling' },
    { name: 'Замена термостата', price: 1500, category: 'cooling' },
    { name: 'Замена глушителя', price: 2500, category: 'exhaust' },
    { name: 'Замена катализатора', price: 8000, category: 'exhaust' },
    { name: 'Замена лямбда-зонда', price: 1500, category: 'exhaust' },
    { name: 'Замена рулевых наконечников', price: 1800, category: 'steering' },
    { name: 'Замена рулевых тяг', price: 2000, category: 'steering' },
    { name: 'Ремонт рулевой рейки', price: 7000, category: 'steering' },
    { name: 'Замена топливного фильтра', price: 600, category: 'fuel-system' },
    { name: 'Чистка форсунок', price: 2000, category: 'fuel-system' },
    { name: 'Замена топливного насоса', price: 3500, category: 'fuel-system' },
    { name: 'Диагностика турбины', price: 2000, category: 'turbo' },
    { name: 'Ремонт турбины', price: 10000, category: 'turbo' },
    { name: 'Замена турбины', price: 15000, category: 'turbo' },
    { name: 'Замена генератора', price: 3500, category: 'starter-alternator' },
    { name: 'Ремонт генератора', price: 2500, category: 'starter-alternator' },
    { name: 'Замена стартера', price: 3000, category: 'starter-alternator' },
    { name: 'Ремонт стартера', price: 2000, category: 'starter-alternator' },
    { name: 'Замена амортизаторов', price: 4000, category: 'suspension' },
    { name: 'Замена пружин', price: 3000, category: 'suspension' },
    { name: 'Замена сайлентблоков', price: 3500, category: 'suspension' },
    { name: 'Замена рычагов', price: 5000, category: 'suspension' },
    { name: 'Ремонт бампера', price: 5000, category: 'bodywork' },
    { name: 'Ремонт крыла', price: 7000, category: 'bodywork' },
    { name: 'Ремонт вмятин (PDR)', price: 3000, category: 'bodywork' },
    { name: 'Ремонт царапин', price: 2000, category: 'bodywork' },
    { name: 'Покраска бампера', price: 8000, category: 'painting' },
    { name: 'Покраска двери', price: 7000, category: 'painting' },
    { name: 'Покраска капота', price: 10000, category: 'painting' },
    { name: 'Покраска крыла', price: 6000, category: 'painting' },
    { name: 'Полная покраска авто', price: 120000, category: 'painting' },
    { name: 'Замена лобового стекла', price: 5000, category: 'glass' },
    { name: 'Замена бокового стекла', price: 3000, category: 'glass' },
    { name: 'Ремонт сколов', price: 1500, category: 'glass' },
    { name: 'Полировка стёкол', price: 3500, category: 'glass' },
    { name: 'Тонировка стёкол', price: 7000, category: 'glass' },
    { name: 'Замена ремня безопасности', price: 3500, category: 'seatbelts' },
    { name: 'Ремонт ремня безопасности', price: 2000, category: 'seatbelts' },
    { name: 'Замена замка ремня', price: 2500, category: 'seatbelts' },
    { name: 'Замена подушки безопасности', price: 8000, category: 'airbags' },
    { name: 'Сброс ошибки подушек', price: 2000, category: 'airbags' },
    { name: 'Замена блока подушек', price: 12000, category: 'airbags' },
    { name: 'Установка парктроников', price: 5000, category: 'parking-assist' },
    { name: 'Установка камеры заднего вида', price: 4000, category: 'parking-assist' },
    { name: 'Установка кругового обзора', price: 25000, category: 'parking-assist' },
    { name: 'Диагностика парктроников', price: 1000, category: 'parking-assist' },
    { name: 'Чип-тюнинг Stage 1', price: 15000, category: 'chip-tuning' },
    { name: 'Чип-тюнинг Stage 2', price: 25000, category: 'chip-tuning' },
    { name: 'Удаление EGR/DPF', price: 8000, category: 'chip-tuning' },
    { name: 'Программное отключение катализатора', price: 5000, category: 'chip-tuning' },
    { name: 'Бронирование капота', price: 12000, category: 'film-protection' },
    { name: 'Бронирование бампера', price: 8000, category: 'film-protection' },
    { name: 'Бронирование крыльев', price: 6000, category: 'film-protection' },
    { name: 'Полное бронирование авто', price: 80000, category: 'film-protection' },
    { name: 'Бронирование фар', price: 3000, category: 'film-protection' },
    { name: 'Мойка двигателя', price: 2500, category: 'detailing' },
    { name: 'Химчистка салона', price: 5000, category: 'detailing' },
    { name: 'Полировка кузова', price: 8000, category: 'detailing' },
    { name: 'Нанесение керамики', price: 25000, category: 'detailing' },
    { name: 'Озонирование салона', price: 3000, category: 'detailing' },
    { name: 'Шумоизоляция дверей', price: 8000, category: 'soundproofing' },
    { name: 'Шумоизоляция арок', price: 12000, category: 'soundproofing' },
    { name: 'Шумоизоляция капота', price: 5000, category: 'soundproofing' },
    { name: 'Шумоизоляция багажника', price: 7000, category: 'soundproofing' },
    { name: 'Полная шумоизоляция авто', price: 45000, category: 'soundproofing' }
];

const servicesTabs = document.querySelector('.services__tabs')

servicesCategoryData.forEach(el => {
    const markup = `<button class="tab" data-tab="${el.key}">${el.name}</button>`
    servicesTabs.insertAdjacentHTML('beforeend', markup)
})

servicesTabs.addEventListener('click', e => {
    const tab = e.target.closest('.tab')

    if (tab) {
        // Находим текущую активную вкладку ВНУТРИ контейнера и удаляем у неё класс
        const currentActive = servicesTabs.querySelector('.tab--active')
        if (currentActive) {
            currentActive.classList.remove('tab--active')
        }

        // Добавляем класс активности кликнутой вкладке
        tab.classList.add('tab--active')

        // Рендерим данные
        renderServices(tab.dataset.tab)
    }
})

function getServicesByCategory(categoryKey) {
    if (categoryKey === 'all') {
        return servicesData;
    }
    return servicesData.filter(service => service.category === categoryKey);
}

function renderServices(categoryKey) {
    const filtered = getServicesByCategory(categoryKey);
    const servicesItems = document.querySelector('.services__items')

    servicesItems.innerHTML = filtered.map(service => `
        <div class="services__item">
            <h3 class="services__item-name">${service.name}</h3>
            <span class="services__item-line"></span>
            <p class="services__item-price">${service.price.toLocaleString('ru-RU')} BYN</p>
        </div>
    `).join('');
}

const allTab = servicesTabs.querySelector('.tab[data-tab="all"]')
if (allTab) {
    allTab.classList.add('tab--active')
}
renderServices('all')