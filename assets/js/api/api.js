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
        .then(() => {
            apiRequests.get();
            
            const key = `${data.owner}${localStorage.length}`;
            localStorage.setItem(key, JSON.stringify(data));
        })
        .catch(e => console.log(e));
    }
}

export { data, apiRequests };