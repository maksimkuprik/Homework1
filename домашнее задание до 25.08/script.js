{
    const title = document.querySelector('#main-title');
    const button = document.querySelector('#toggle-btn');
    if (title && button) {
        button.addEventListener('click', () => {
            if (title.style.display === 'none') {
                title.style.display = 'block';
                button.textContent = 'Скрыть';
            } else {
                title.style.display = 'none';
                button.textContent = 'Показать';
            }
        });
    }
}

{
    const paragraph = document.querySelector('#text-paragraph');
    const colorButton = document.querySelector('#color-btn');
    if (paragraph && colorButton) {
        colorButton.addEventListener('click', () => {
            if (paragraph.style.color === 'blue') {
                paragraph.style.color = '';
            } else {
                paragraph.style.color = 'blue';
            }
        });
    }
}

{
    const dynamicTitle = document.querySelector('#dynamic-title');
    const changeTextButton = document.querySelector('#change-text-btn');
    if (dynamicTitle && changeTextButton) {
        changeTextButton.addEventListener('click', () => {
            dynamicTitle.textContent = 'Привет, мир!';
        });
    }
}

{
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach((element) => {
        element.textContent = 'Новый текст';
    });
}

{
    const addButton = document.querySelector('#add-elem-btn');
    const container = document.querySelector('#elements-container');
    if (addButton && container) {
        addButton.addEventListener('click', () => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'Новый абзац';
            container.appendChild(newParagraph);
        });
    }
}

{
    const removeButton = document.querySelector('#remove-elem-btn');
    if (removeButton) {
        removeButton.addEventListener('click', () => {
            const firstDescription = document.querySelector('.description-remove');
            if (firstDescription) {
                firstDescription.remove();
            } else {
                console.log('Элементы для удаления больше не найдены.');
            }
        });
    }
}