function initBYPhoneMask(selector) {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        const mask = '+375 (__) ___-__-__';
        input.placeholder = mask;
        input.maxLength = mask.length;

        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            let cursorPosition = e.target.selectionStart;
            const originalLength = e.target.value.length;

            if (value.startsWith('375')) {
                value = value.substring(3);
            } else if (value.startsWith('80')) {
                value = value.substring(2);
            } else if (value.startsWith('8') && value.length === 1) {
                value = '';
            }

            let formatted = '';
            if (value.length > 0) {
                formatted = '+375 (' + value.substring(0, 2);
                if (value.length > 2) formatted += ') ' + value.substring(2, 5);
                if (value.length > 5) formatted += '-' + value.substring(5, 7);
                if (value.length > 7) formatted += '-' + value.substring(7, 9);
            }

            e.target.value = formatted;

            const newLength = formatted.length;
            cursorPosition = cursorPosition + (newLength - originalLength);

            if (cursorPosition < 7 && newLength > 0) cursorPosition = 7;

            e.target.setSelectionRange(cursorPosition, cursorPosition);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                const valueWithoutDigits = e.target.value.replace(/\D/g, '');

                // Если цифр кода оператора и номера не осталось, не даем стереть "+375"
                if (valueWithoutDigits === '375' && e.target.selectionStart <= 6) {
                    e.preventDefault();
                }
            }
        });
    });
}

initBYPhoneMask('.phone');