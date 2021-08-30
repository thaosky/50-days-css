const progress__line = document.getElementById('progressLine');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const listItems = document.querySelectorAll('.progress__item');

let itemActive = 1;
updateUI();

prev.addEventListener('click', () => {

    if (itemActive > 1) {
        itemActive--;
    }
    updateUI();
});

next.addEventListener('click', () => {

    if (itemActive < listItems.length) {
        itemActive++;
    }

    updateUI();

});

function updateUI() {
    // active circle
    listItems.forEach((item, index) => {
        if (index + 1 <= itemActive) {
            item.classList.add('progress__item--active');
        } else {
            item.classList.remove('progress__item--active')
        }

    });

    // update progress
    progress__line.style.width = (itemActive - 1) / (listItems.length - 1) * 100 + '%'

    // disabled button
    next.disabled = itemActive === listItems.length;
    prev.disabled = itemActive === 1;
}
