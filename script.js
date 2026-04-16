const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('.order-btn');
const closeBtn = document.querySelector('.close-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

const modalSecond = document.querySelector('.modalSecond');
const openBtn = document.querySelector('.btn'); 
const closeBtnSecond = document.querySelector('.close-modal-second');


openBtn.addEventListener('click', () => {
    modalSecond.style.display = 'flex';
});
closeBtnSecond.addEventListener('click', () => {
    modalSecond.style.display = 'none';
});
modalSecond.addEventListener('click', (e) => {
    if (e.target === modalSecond) {
        modalSecond.style.display = 'none';
    }
});