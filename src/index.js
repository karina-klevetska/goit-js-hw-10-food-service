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

refs.themeSwitch.addEventListener('change', changeTheme);


function changeTheme (event) {
    if (refs.themeSwitch.checked === true) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK)
    };
};

function createFoodCard(cards) {
    return foodCard(cards);
};



refs.menu.insertAdjacentHTML('beforeend', cardMarkup);
