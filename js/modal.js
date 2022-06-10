const modal = document.querySelector('.modal');

const open = document.querySelector('#title h1');
open.addEventListener('click', () => {
    modal.classList.add('act');
});

const close = document.querySelector('.modal_content button');
close.addEventListener('click', () => {
    modal.classList.remove('act');
});

