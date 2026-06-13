function initDateFormatMask(selector) {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            // Ограничиваем длину (максимум 8 цифр: 2+2+4)
            if (value.length > 8) value = value.slice(0, 8);

            let formatted = '';
            if (value.length > 0) {
                // День (ДД)
                let day = value.substring(0, 2);
                if (day.length === 2) {
                    const dayNum = parseInt(day);
                    if (dayNum > 31) day = '31';
                    if (dayNum < 1 && dayNum !== 0) day = '01';
                }
                formatted = day;

                // Месяц (ММ)
                if (value.length > 2) {
                    let month = value.substring(2, 4);
                    if (month.length === 2) {
                        const monthNum = parseInt(month);
                        if (monthNum > 12) month = '12';
                        if (monthNum < 1 && monthNum !== 0) month = '01';
                    }
                    formatted += '.' + month;
                }

                // Год (ГГГГ)
                if (value.length > 4) {
                    let year = value.substring(4, 8);
                    if (year.length === 4) {
                        const yearNum = parseInt(year);
                        const currentYear = new Date().getFullYear();
                        if (yearNum < 1900) year = '1900';
                        if (yearNum > currentYear + 100) year = String(currentYear + 100);
                    }
                    formatted += '.' + year;
                }
            }

            const cursorPosition = e.target.selectionStart;
            const originalLength = e.target.value.length;

            e.target.value = formatted;

            const newLength = formatted.length;
            let newCursorPosition = cursorPosition + (newLength - originalLength);

            // Корректировка позиции курсора для точек
            if (formatted[newCursorPosition - 1] === '.' && cursorPosition !== originalLength) {
                newCursorPosition++;
            }

            e.target.setSelectionRange(newCursorPosition, newCursorPosition);
        });

        // Валидация при потере фокуса
        input.addEventListener('blur', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length === 8) {
                const day = parseInt(value.substring(0, 2));
                const month = parseInt(value.substring(2, 4));
                const year = parseInt(value.substring(4, 8));

                const date = new Date(year, month - 1, day);
                const isValid = date.getFullYear() === year &&
                    date.getMonth() === month - 1 &&
                    date.getDate() === day;

                if (!isValid) {
                    e.target.style.borderColor = 'red';
                    e.target.style.backgroundColor = '#fff0f0';
                } else {
                    e.target.style.borderColor = '';
                    e.target.style.backgroundColor = '';
                }
            } else if (value.length > 0 && value.length !== 8) {
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


initDateFormatMask('.date')