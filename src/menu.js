const createMenu = () => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const buttons = Array.from(document.getElementsByTagName('button'))
    buttons.forEach(button => button.classList.remove('currentTab'));
    const menuBtn = document.querySelector('#menuBtn');
    menuBtn.classList.add('currentTab');

    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'menuPage');

    const food = document.createElement('div');
    food.classList.add('menu-list', 'food');
    const drinks = document.createElement('div');
    drinks.classList.add('menu-list', 'drinks');

    food.innerHTML = `
    <h3> Food </h3>
    <span class="item">Dish 1</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Dish 2</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Dish 3</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Dish 4</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Dish 5</span><span class="dots"></span><span class="price">$1</span>
    `

    drinks.innerHTML = `
    <h3> Drinks </h3>
    <span class="item">Drink 1</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Drink 2</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Drink 3</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Drink 4</span><span class="dots"></span><span class="price">$1</span>
    <span class="item">Drink 5</span><span class="dots"></span><span class="price">$1</span>
    `

    menuPage.append(food, drinks);
    main.appendChild(menuPage);
};

export { createMenu };