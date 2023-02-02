import { data, apiRequests } from "../api/api.js";

function verifyQt(){
    const verifiedQt = document.querySelectorAll('.selected').length;
    const maxQt = 3;

    if (verifiedQt === maxQt){
        const button = document.querySelector('.confirm')
        button.removeAttribute('disabled');
        button.classList.add('funcional');
    }
}

function verifyUrl(url){
    try{
        const validUrl = new URL(url);
        return true;
    } catch {
        alert('link inválido');
        return false;
    }
}

function updateObject(){
    const image = document.querySelector('.model-link').value;
    if (verifyUrl(image)){
        const [model, neck, material] = document.querySelectorAll('.selected');

        data.model = model.parentNode.getAttribute('model');
        data.neck = neck.parentNode.getAttribute('model');
        data.material = material.parentNode.getAttribute('model');
        data.image = image;
        
        apiRequests.post();
    }
}
export { verifyQt, verifyUrl, updateObject };