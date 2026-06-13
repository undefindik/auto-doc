function initTimeMask(selector, useSeconds = false) {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            let maxLength = useSeconds ? 6 : 4;
            if (value.length > maxLength) value = value.slice(0, maxLength);

            let formatted = '';
            if (value.length > 0) {
                // Часы (ЧЧ)
                let hours = value.substring(0, 2);
                if (hours.length === 2) {
                    const hoursNum = parseInt(hours);
                    if (hoursNum > 23) hours = '23';
                }
                formatted = hours;

                // Минуты (ММ)
                if (value.length > 2) {
                    let minutes = value.substring(2, 4);
                    if (minutes.length === 2) {
                        const minutesNum = parseInt(minutes);
                        if (minutesNum > 59) minutes = '59';
                    }
                    formatted += ':' + minutes;
                }

                // Секунды (СС) - опционально
                if (useSeconds && value.length > 4) {
                    let seconds = value.substring(4, 6);
                    if (seconds.length === 2) {
                        const secondsNum = parseInt(seconds);
                        if (secondsNum > 59) seconds = '59';
                    }
                    formatted += ':' + seconds;
                }
            }

            const cursorPosition = e.target.selectionStart;
            const originalLength = e.target.value.length;

            e.target.value = formatted;

            const newLength = formatted.length;
            let newCursorPosition = cursorPosition + (newLength - originalLength);

            // Корректировка позиции курсора для двоеточий
            if (formatted[newCursorPosition - 1] === ':' && cursorPosition !== originalLength) {
                newCursorPosition++;
            }

            e.target.setSelectionRange(newCursorPosition, newCursorPosition);
        });

        // Валидация при потере фокуса
        input.addEventListener('blur', (e) => {
            const value = e.target.value.replace(/\D/g, '');
            const expectedLength = useSeconds ? 6 : 4;

            if (value.length === expectedLength) {
                const hours = parseInt(value.substring(0, 2));
                const minutes = parseInt(value.substring(2, 4));
                const seconds = useSeconds ? parseInt(value.substring(4, 6)) : 0;

                const isValid = hours >= 0 && hours <= 23 &&
                    minutes >= 0 && minutes <= 59 &&
                    (!useSeconds || (seconds >= 0 && seconds <= 59));

                if (!isValid) {
                    e.target.style.borderColor = 'red';
                    e.target.style.backgroundColor = '#fff0f0';
                } else {
                    e.target.style.borderColor = '';
                    e.target.style.backgroundColor = '';
                }
            } else if (value.length > 0 && value.length !== expectedLength) {
                e.target.style.borderColor = 'orange';
            } else {
                e.target.style.borderColor = '';
                e.target.style.backgroundColor = '';
            }
        });

        input.addEventListener('input', () => {
            input.style.borderColor = '';
            input.style.backgroundColor = '';
        });
    });
}

initTimeMask('.time')