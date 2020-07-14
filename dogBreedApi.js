//This is the URL for TheDogApi.
const url = 'https://api.thedogapi.com/v1/breeds/search?';

function renderResponse(response) {
    const error = document.createElement('h2');

    const gridContainer = document.getElementById('best-dogs-container');

    if (!response) {
        console.log(response.status);
    }

    if(!response.length) {
        error.innerHTML = "Try Again! No dogs found.";
        gridContainer.appendChild(error);
    }

    for (let index = 0; index < response.length; index++){
        const dogName = document.createElement('h3');
        const bred_for = document.createElement('h3');
        

        dogName.innerHTML = response[index].name;
        bred_for.innerHTML = response[index].bred_for;

        gridContainer.appendChild(dogName);
        gridContainer.appendChild(bred_for);
    }
};

//This is the function making the GET request to TheDogApi.
async function getData(queryParam) {
    try{
        const endpoint = `${url}${queryParam.qKey}${queryParam.qValue}`;
        const response = await fetch(endpoint);

        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
            //console.log(jsonResponse);
            //const dogBreedInfo = [jsonResponse[0].name, jsonResponse[0].bred_for];
            //console.log(dogBreedInfo);
            //return dogBreedInfo;
        }

    }catch(error) {
        console.log(error);
    }
};
