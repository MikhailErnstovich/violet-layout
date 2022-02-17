const rightBtn = document.querySelector('.cards__control-btn_right');
const leftBtn = document.querySelector('.cards__control-btn_left');
const container = document.querySelector('.cards');

rightBtn.addEventListener('click', function(){
    const cards = document.querySelectorAll('.cards__card');
    let current = parseInt(container.dataset.current);
    cards[current].classList.toggle('cards__card_hidden');
    if(current !== cards.length - 1){
        container.dataset.current++;
        cards[current + 1].classList.toggle('cards__card_hidden');
    } else {
        container.dataset.current = 0;
        cards[0].classList.toggle('cards__card_hidden');
    }
});

leftBtn.addEventListener('click', function(){
    const cards = document.querySelectorAll('.cards__card');
    let current = parseInt(container.dataset.current);
    cards[current].classList.toggle('cards__card_hidden');
    if(current !== 0){
        container.dataset.current--;
        cards[current - 1].classList.toggle('cards__card_hidden');
    } else {
        container.dataset.current = cards.length - 1;
        cards[cards.length - 1].classList.toggle('cards__card_hidden');
    }
});