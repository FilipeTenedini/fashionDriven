import { allItems } from '../db/data.js';

allItems.forEach((item)=>{
    document.querySelector(`.${item.type}`).innerHTML += `
    <li>
        <div class="list-option">
            <img src="./assets/images/${item.src}.png" alt="">
        </div>
        <p class="item-name">${item.name}</p>
    </li>
    `
});

export { };