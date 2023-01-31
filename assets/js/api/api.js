const BASE = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';
const data = {};

const apiRequests = {

    get: () => {
        fetch(`${BASE}`)
        .then(response => response.json())
        .then((json) => {
            const lastOrders = json.slice(0,10);
            const lastOrdersSpace = document.querySelector('.last-orders--models');

            lastOrdersSpace.innerHTML = '';

            lastOrders.forEach(element => {
                lastOrdersSpace.innerHTML += `
                <div class="last-orders-model">
                    <img src="${element.image}" alt="">
                    <p>Criador: ${element.owner}</p>
                </div>    
                
                `;
            });
            
        })
        .catch(e => console.log(e))
    },

    post: () => {
        fetch(BASE,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        })
        .then()
        .then(() => apiRequests.get())
        .catch(e => console.log(e));
    }
}

apiRequests.get();

export { data, apiRequests };