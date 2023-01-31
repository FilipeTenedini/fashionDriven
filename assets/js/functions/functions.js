function verifyQt(){
    const verifiedQt = document.querySelectorAll('.selected').length;

    if (verifiedQt === 3){
        const button = document.querySelector('button')
        button.removeAttribute('disabled');
        button.classList.add('funcional');
    }
}
export { verifyQt };