import { setupPage, createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import './style.css';

const container = document.querySelector('#content');

container.appendChild(setupPage());
createHome();

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.querySelector('#homeBtn');
    const menuBtn = document.querySelector('#menuBtn');
    const contactBtn = document.querySelector('#contactBtn');
    
    homeBtn.addEventListener('click', createHome);
    menuBtn.addEventListener('click', createMenu);
    contactBtn.addEventListener('click', createContact);
});