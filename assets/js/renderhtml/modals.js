import { data } from "../api/api.js";

function renderCartModal(){
    const cartArea = document.querySelector('.cart-area');
    cartArea.classList.remove('hidden');
    cartArea.innerHTML = `
<section class="cart-items">
    <p class="empty-cart hidden">
        SEU CARRINHO ESTÁ VAZIO...
        QUE TAL APROVEITAR NOSSAS OFERTAS ESPECIAIS?
        CLIQUE AQUI E CONFIRA ;)
    </p>
    <div class="client-items">
        <div class="cart-header">
            <p> 
                Seus ítens salvos até agora ;)
            </p>
        </div>
    </div>
</section>

`;
renderClientItems();
}

function renderClientItems(){
    const clientItems = document.querySelector('.client-items');

    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.includes(data.owner)){
            const item = JSON.parse(localStorage.getItem(key))
            clientItems.innerHTML+=`
                <div class="client-product">
                    <div class="product-img">
                        <img src="${item.image}" alt="t-shirt picture">
                        <p>Estampa</p>
                    </div>
                    <div class="product-details">
                        <img src="./assets/images/${item.material}.png" alt="">
                        <p>${item.material}</p>
                    </div>
                    <div class="product-details">
                        <img src="./assets/images/${item.model}.png" alt="">
                        <p>${item.model}</p>
                    </div>
                    <div class="product-details">
                        <img src="./assets/images/${item.neck}.png" alt="">
                        <p>${item.neck}</p>
                    </div>
                </div>
            `;
        }
      }
}


export { renderCartModal, renderClientItems }