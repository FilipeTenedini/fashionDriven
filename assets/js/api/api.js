const apiRequests = {

    get: () => {
        fetch('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
        .then(response => response.json())
        .then((json) => {
            const lastOrders = json.slice(0,10);
            console.log(lastOrders)
            const lastOrdersSpace = document.querySelector('.last-orders--models');
            lastOrdersSpace.innerHTML = '';

            lastOrders.forEach(element => {
                lastOrdersSpace.innerHTML += `
                <div class="last-orders-model">
                    <img src="${element.image}" alt="">
                    <p>Criador: ${element.owner}</p>
                </div>    
                
                `
            });
            
        })
        .catch(e => console.log(e))
    }
}

apiRequests.get();