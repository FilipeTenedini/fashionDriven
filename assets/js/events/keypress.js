import { data, apiRequests } from "../api/api.js";

document.querySelector('.user-name').addEventListener('keydown', (e) => {
    const name = document.querySelector('.user-name').value;

    if (name && e.key === 'Enter'){
        document.querySelector('.modal-content').classList.add('hidden');
        document.querySelector('.loading').classList.remove('hidden');

        data.owner = name;
        data.author = name;

        apiRequests.get();
    }
})


export { };