const background = document.querySelector('.background');
const loadingText = document.querySelector('.loading-text');

let text = 0;
let loading = setInterval(abc, 20);

function abc() {
    text++;
    if (text === 100) {
        clearInterval(loading);
    }
    loadingText.innerText = text + '%';
    loadingText.style.opacity = convert(text, 0, 100, 1, 0);

    background.style.filter = `blur(${convert(text, 0, 100, 30, 0)}px)`
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Convert từ dải số này sang dải số khác
const convert = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
