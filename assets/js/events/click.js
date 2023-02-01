import { verifyQt, updateObject } from "../functions/functions.js";
import { data, apiRequests } from "../api/api.js";


document.querySelector('.login-btn').addEventListener('click', () => {
    const name = document.querySelector('.user-name').value;

    if(name){
        document.querySelector('.modal-content').classList.add('hidden');
        document.querySelector('.loading').classList.remove('hidden');

        data.owner = name;
        data.author = name;

        sessionStorage.setItem(name, name)
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
});


export {  }