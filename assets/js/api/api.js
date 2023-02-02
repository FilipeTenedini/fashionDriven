const BASE = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';
const data = {};

const apiRequests = {

    get: () => {
        fetch(`${BASE}`)
        .then(response => response.json())
        .then((json) => {
            document.querySelector('.modal').classList.add('hidden');
            const lastOrdersSpace = document.querySelector('.last-orders--models');
            lastOrdersSpace.innerHTML = '';

            json.forEach(element => {
                lastOrdersSpace.innerHTML += `
                <li class="last-orders-model">
                    <img src="${element.image}" alt="tshirt picture">
                    <p>Criador: ${element.owner}</p>
                </li>    
                
                `;
            });
            
        })
        .catch(e => console.log('ezinhu'))
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

export { data, apiRequests };