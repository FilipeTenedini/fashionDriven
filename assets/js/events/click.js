import { verifyQt, updateObject } from "../functions/functions.js";
import { data, apiRequests } from "../api/api.js";
import { renderCartModal } from '../renderhtml/modals.js';


document.querySelector('.login-btn').addEventListener('click', () => {
    const name = document.querySelector('.user-name').value;

    if(name){
        document.querySelector('.modal-content').classList.add('hidden');
        document.querySelector('.loading').classList.remove('hidden');

        data.owner = name;
        data.author = name;

        apiRequests.get();
    }
});

document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        const type = item.getAttribute('type');
        const selectedItem = document.querySelector(`.${type} .selected`);

        if (selectedItem){
            selectedItem.classList.remove('selected');
        }

        const model = item.querySelector('.list-option');
        model.classList.add('selected');
        
        verifyQt();
    });
});

document.querySelector('.confirm').addEventListener('click', () => {
    updateObject();

    const key = `${data.owner}${localStorage.length}`;
    localStorage.setItem(key, JSON.stringify(data));
});

document.querySelector('.cart-space').addEventListener('click', ()=> {
    if (localStorage.length === 0 ){
        alert('Você ainda não criou nenhum ítem');
    } else {
        renderCartModal();
    }
});

const cart = document.querySelector('.cart-area');
cart.addEventListener('click', () => cart.classList.add('hidden'));
export {  }