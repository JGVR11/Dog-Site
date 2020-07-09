//H3 Elements that contain the value name, life span, what the bred is for, and temperament of the different breeds.
//const dogName = document.createElement('h3');
//const bred_for = document.createElement('h3');
//const life_span = document.createElement('h3');
//const temperament = document.createElement('h3');
//const error = document.createElement('h2');

//The code below attach all of the H3 elements above to the DIV element with the id of "best-dogs-container" to the bestDogs html file.
//const gridContainer = document.getElementById('best-dogs-container');

/*gridContainer.appendChild(life_span);
gridContainer.appendChild(temperament);*/


function renderResponse(response) {
    const dogName = document.createElement('h3');
    const bred_for = document.createElement('h3');
    const error = document.createElement('h2');

    const gridContainer = document.getElementById('best-dogs-container');

    if (!jsonResponse) {
        console.log(response.status);
    }

    if(!jsonResponse.length) {
        error.innerHTML = "Try Again! No suggestions found.";
        gridContainer.appendChild(error);
    }

    for (let index = 0; index < response.length; index++){
        const name = dogName;
        const dogBredFor = bred_for;

        name.innerHTML = response[index].name;
        dogBredFor = response[index].bref_for;

        gridContainer.appendChild(name);
        gridContainer.appendChild(dogBredFor);
    }
};

module.exports = renderResponse;