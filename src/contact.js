import image from './outdoor.jpeg';

const createContact = () => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const buttons = Array.from(document.getElementsByTagName('button'))
    buttons.forEach(button => button.classList.remove('currentTab'));
    const contactBtn = document.querySelector('#contactBtn');
    contactBtn.classList.add('currentTab');

    const contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'contactPage');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us'

    const contactDetails = document.createElement('div');
    contactDetails.innerHTML = `
    <div id="address">
    <p>123 Street</p>
    <p>Manhattan, NY</p>
    </div><br>
    <div id="hours">
    <p>Hours:</p>
    <p>Weekdays 8:00AM - 9:00PM</p>
    <p>Weekends 8:00AM - 11:00PM</p>
    </div><br>
    <div id="email">email@email.com</div>
    <div id="number">(123) 456 7890</div>
    `

    const img = new Image();
    img.src = image;

    contactPage.append(contactHeader, contactDetails, img);
    main.appendChild(contactPage);
};

export { createContact };