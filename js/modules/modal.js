function initModal(modalSelector, closeBtnSelector, openBtnSelector = null, timerDelay = null) {
    const modal = document.querySelector(modalSelector);
    const openBtn = openBtnSelector ? document.querySelector(openBtnSelector) : null;
    const closeBtns = document.querySelectorAll(closeBtnSelector);  // ВСЕ кнопки закрытия

    let timerUsed = false;

    if (!modal) return;

    function open() {
        modal.classList.remove('none');
        document.body.classList.add('overflow');
    }

    function close() {
        modal.classList.add('none');
        document.body.classList.remove('overflow');
    }

    // Кнопка открытия (если есть)
    if (openBtn) {
        openBtn.addEventListener('click', open);
    }

    // ВСЕ кнопки закрытия
    if (closeBtns.length > 0) {
        closeBtns.forEach(btn => {
            btn.addEventListener('click', close);
        });
        console.log(`Найдено кнопок закрытия: ${closeBtns.length}`);
    } else {
        console.log('Кнопки закрытия не найдены');
    }

    // Закрытие по клику на фон
    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('none')) close();
    });

    // Открытие по таймеру
    if (timerDelay && timerDelay > 0 && !timerUsed) {
        setTimeout(() => {
            if (modal.classList.contains('none')) open();
            timerUsed = true;
        }, timerDelay * 1000);
    }

    return { open, close };
}

initModal('#request-form-modal', '.close', '.contact__button')
initModal('#reviews-form-modal', '.close', '.reviews__notif-button')