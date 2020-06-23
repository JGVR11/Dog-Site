const fetch = require("node-fetch");

const url = 'https://api.thedogapi.com/v1/breeds?';
const queryParams = {
    breedKey: 'attach_breed=',
    breedValue: '5',
    pageKey: 'page=',
    pageValue: '5',
    limitKey: 'limit=',
    limitValue: '5'
};

async function getData() {
    try{
        const endpoint = `${url}${queryParams.breedKey}${queryParams.breedValue}&${queryParams.pageKey}${queryParams.pageValue}&${queryParams.limitKey}${queryParams.limitValue}`;
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse[0].name);
            console.log(jsonResponse[0].temperament);
            return jsonResponse;
        }
    } catch(error) {
        console.log(error);
    }
}
getData();