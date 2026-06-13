const badges = ['#ремонт', '#обслуживание', '#диагностика']
const heroBadges = document.querySelector('.hero__badges')

badges.forEach(el => {
    const markup = `<span class="badge">${el}</span>`
    heroBadges.insertAdjacentHTML('beforeend', markup)
})