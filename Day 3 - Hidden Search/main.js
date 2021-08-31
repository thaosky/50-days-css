const search = document.querySelector('.search');
const input = document.querySelector('.search__input')
const btn = document.querySelector('.search__btn');

btn.addEventListener('click', () => {
    search.classList.toggle('search--active');

    // sau khi ấn nút search sẽ focus vào ô input luôn
    input.focus();
})
