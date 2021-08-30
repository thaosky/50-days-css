const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circlesList = document.querySelectorAll('.progress__circle');

let currentActive = 1;
update();
next.addEventListener('click', () => {
    if (currentActive < circlesList.length) {
        currentActive++;
    }
    update();
});

prev.addEventListener('click', () => {
    if (currentActive > 0) {
        currentActive--;
    }
    update();
});

function update() {
    circlesList.forEach((item, index) => {
        if (index < currentActive) {
            item.classList.add('progress__circle--active')
        } else {
            item.classList.remove('progress__circle--active');
        }
    });

    progress.style.width = (currentActive - 1) * 100 / (circlesList.length - 1) + '%';
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circlesList.length) {
        next.disabled = true;
    } else  {
        prev.disabled = false;
        next.disabled = false;
    }
}
