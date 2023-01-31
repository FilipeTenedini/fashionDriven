import { verifyQt, updateObject } from "../functions/functions.js";

document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        const type = item.getAttribute('type');
        const selectedItem = document.querySelector(`.${type} .selected`);

        if (selectedItem){
            selectedItem.classList.remove('selected');
        }

        const model = item.querySelector('.list-option');
        model.classList.add('selected');
        
        // preciso dar update no objeto que será mandado
        verifyQt();
    });
});

document.querySelector('button').addEventListener('click', () => {
    updateObject();
});

export {  }