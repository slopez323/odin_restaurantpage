import image from './resto.jpeg'

const setupPage = () => {
    const pageTemplate = document.createElement('div');
    pageTemplate.classList.add('page');
    const name = document.createElement('h1');
    name.innerHTML = '<span id="name1">restaurant</span> <span id="name2">name</span>';

    const body = document.createElement('div');
    body.classList.add('main');

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'homeBtn');
    homeBtn.classList.add('currentTab');
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menuBtn');
    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contactBtn');
   
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';
 
    buttons.append(homeBtn, menuBtn, contactBtn);
    pageTemplate.append(name, body, buttons);

    return pageTemplate;
};

const createHome = () => {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    
    const buttons = Array.from(document.getElementsByTagName('button'))
    buttons.forEach(button => button.classList.remove('currentTab'));
    const homeBtn = document.querySelector('#homeBtn');
    homeBtn.classList.add('currentTab');

    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'homePage');

    const img = new Image();
    img.src = image;

    const homeText = document.createElement('div');
    homeText.setAttribute('id', 'homeText');
    homeText.textContent = `Here's some random text describing the restaurant.`
    
    homePage.append(img, homeText);
    main.appendChild(homePage);
};

export {setupPage, createHome};