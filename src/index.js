import foodCard from './templates/card.hbs';
import cards from './menu.json';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    themeSwitch: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu'),
};

const cardMarkup = createFoodCard(cards);
const currentTheme = localStorage.getItem('theme');
const parsedCurrentTheme = JSON.parse(currentTheme)


refs.themeSwitch.addEventListener('change', changeTheme);

if (parsedCurrentTheme === null) {
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
} else if (parsedCurrentTheme === Theme.DARK) {
    refs.body.classList.add(parsedCurrentTheme);
    refs.themeSwitch.setAttribute('checked', true);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
} else {
    refs.body.classList.add(parsedCurrentTheme);
}

function changeTheme () {
    if (refs.themeSwitch.checked === true) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
        refs.themeSwitch.setAttribute('checked', true);
        localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK)
        refs.themeSwitch.setAttribute('checked', false);
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
    };
};

function createFoodCard(cards) {
    return foodCard(cards);
};

refs.menu.insertAdjacentHTML('beforeend', cardMarkup);
