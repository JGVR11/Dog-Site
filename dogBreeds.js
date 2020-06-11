//DOGBREEDS HTML
const dogBreedPhotos = {
    dogBreeds: [
        {
            name: 'Bulldog',
            url: "Resources/Bulldog.jpg",
            description: "The Bulldog, also known as British Bulldog or English Bulldog, is considered a medium-sized breed. The Bulldog has a muscular body, wrinkled face and a distinctive pushed-in nose. According to the American Kennel Club, the Bulldog has a friendly, courageous and calm temperament with a life expectancy of 8 to 10 years."
        },
        {
            name: 'German-Shepherd',
            url: 'Resources/germanShepherd.jpg',
            description: 'German Shepherds are medium to large-sized dogs. German Shepherds are considered a very smart breed, and one of the prefer breeds for law enforcements. According to the American Kennel Club, the German Shepherd has a confident, courageous, and smart temperament.'
        },
        {
            name: 'Labrador-Retriever',
            url: 'Resources/labrador-retriever.jpg',
            description: 'labrador the anoying'
        },
        {
            name: 'Siberian Husky',
            url: 'Resources/siberian-husky.jpg',
            description: 'siberian the prettier'
        },
        {
            name: 'Pug ',
            url: 'Resources/pug.jpg',
            description: 'pug the best'
        }
    ]
}

//Parent Element where all the pictures and dog breed information are going to be
const parentElement = document.getElementById("dog-breed-info");


for (let index = 0; index < dogBreedPhotos.dogBreeds.length; index++) {
   let figureElement = document.createElement('figure'); 
   let figureCaption = document.createElement('figcaption');
   let imgElement = document.createElement('img');
   let descriptionElement = document.createElement('h3');
   let paragraphElement = document.createElement('p');
       

   imgElement.setAttribute('src', dogBreedPhotos.dogBreeds[index].url);
   figureCaption.innerHTML = dogBreedPhotos.dogBreeds[index].name;
   descriptionElement.innerHTML = "Description";
   descriptionElement.style.opacity = '1';

   descriptionElement.onclick = function() {
       if (descriptionElement.style.opacity === '1'){
        paragraphElement.innerHTML = dogBreedPhotos.dogBreeds[index].description;
        paragraphElement.style.display = 'block';
        descriptionElement.innerHTML = "Description ^";
        descriptionElement.style.opacity = '0.8';
       } else if (descriptionElement.style.opacity === '0.8') {
           paragraphElement.style.display = 'none';
           descriptionElement.style.opacity = '1';
           descriptionElement.innerHTML = "Description";
       }
   }



   figureElement.appendChild(imgElement);
   figureElement.appendChild(figureCaption);
   figureElement.appendChild(descriptionElement);
   figureElement.appendChild(paragraphElement);
   parentElement.appendChild(figureElement);
}




//HandleBars library
/*const source = document.getElementById('dog-breed-template').innerHTML;
const template = Handlebars.compile(source);

const context = {
    dogBreeds: [
        {
            name: 'Bulldog',
            url: "Resources/Bulldog.jpg",
            description: "The Bulldog, also known as British Bulldog or English Bulldog, is considered a medium-sized breed. The Bulldog has a muscular body, wrinkled face and a distinctive pushed-in nose. According to the American Kennel Club, the Bulldog has a friendly, courageous and calm temperament with a life expectancy of 8 to 10 years."

        },
        {
            name: 'German-Shepherd',
            url: 'Resources/germanShepherd.jpg',
            description: 'German Shepherds are medium to large-sized dogs. German Shepherds are considered a very smart breed, and one of the prefer breeds for law enforcements. According to the American Kennel Club, the German Shepherd has a confident, courageous, and smart temperament.'
        }
    ]
};

const compiledHTML = template(context);
const displayDogBreedsPhotos = document.getElementById('dog-breed-photos');
displayDogBreedsPhotos.innerHTML = compiledHTML;*/