import { data, apiRequests } from "../api/api.js";

function verifyQt(){
    const verifiedQt = document.querySelectorAll('.selected').length;
    const maxQt = 3;

    if (verifiedQt === maxQt){
        const button = document.querySelector('button')
        button.removeAttribute('disabled');
        button.classList.add('funcional');
    }
}

function verifyUrl(url){
    try{
        const validUrl = new URL(url)
        console.log(validUrl)
        return true
    } catch {
        return false
    }
}

function updateObject(){
    const image = document.querySelector('input').value;
    if (verifyUrl(image)){
        const [model, neck, material] = document.querySelectorAll('.selected');

        data.model = model.parentNode.getAttribute('model');
        data.neck = neck.parentNode.getAttribute('model');
        data.material = material.parentNode.getAttribute('model');
        data.image = image;
        data.owner = '';
        data.author = '';

        apiRequests.post();
    }
    // pegar valor do autor e owner
    //salvar o id da requisição post no localStorage.
}
export { verifyQt, verifyUrl, updateObject };