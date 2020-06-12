//DOGBREEDS HTML
const dogBreedPhotos = {
    dogBreeds: [
        {
            name: '1) Bulldog',
            url: "Resources/Bulldog.jpg",
            description: "The Bulldog, also known as British Bulldog or English Bulldog, is considered a medium-sized breed. The Bulldog has a muscular body, wrinkled face and a distinctive pushed-in nose. According to the American Kennel Club, the Bulldog has a friendly, courageous and calm temperament with a life expectancy of 8 to 10 years."
        },
        {
            name: '2) German-Shepherd',
            url: 'Resources/germanShepherd.jpg',
            description: 'German Shepherds are medium to large-sized dogs. German Shepherds are considered a very smart breed, and one of the prefer breeds for law enforcements. According to the American Kennel Club, the German Shepherd has a confident, courageous, and smart temperament.'
        },
        {
            name: '3) Labrador-Retriever',
            url: 'Resources/labrador-retriever.jpg',
            description: 'labrador the anoying'
        },
        {
            name: '4) Siberian Husky',
            url: 'Resources/siberian-husky.jpg',
            description: 'siberian the prettier'
        },
        {
            name: '5) Pug ',
            url: 'Resources/pug.jpg',
            description: 'pug the best'
        },
        {
            name: '6) Golden Retriever',
            url: 'Resources/golden-retriever.jpg',
            description: "haha"
        },
        {
            name: '7) Poodle',
            url: 'Resources/poodle.jpg',
            description: "huhu"
        },
        {
            name: '8) Chihuahua',
            url: 'Resources/chihuahua.jpg',
            description: "hoho"
        },
        {
            name: '9) French Bulldog',
            url: 'Resources/french-bulldog.jpg',
            description: "hehe"
        },
        {
            name: '10) Pomeranian',
            url: 'Resources/pomeranian.jpg',
            description: 'hih'
        },
    ]
}

//Parent Element where all the pictures and dog breed information are going to be
const dogBreedInfo = document.getElementById("dog-breed-info");
const myModal = document.getElementById('my-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');


for (let index = 0; index < dogBreedPhotos.dogBreeds.length; index++) {
   let divElement = document.createElement('div');
   let figureElement = document.createElement('figure'); 
   let figureCaption = document.createElement('figcaption');
   let imgElement = document.createElement('img');
   let descriptionElement = document.createElement('h3');
   let paragraphElement = document.createElement('p');
   let modalImage = document.createElement('img');
   

   divElement.setAttribute('class', 'grid-item');
   imgElement.setAttribute('id', 'breed-photos');
   modalImage.setAttribute('id', 'modal-images');
   descriptionElement.setAttribute('class', 'breed-description');
   descriptionElement.innerHTML = "Description";
   descriptionElement.style.opacity = '1';

   descriptionElement.onclick = function() {
        modalImage.setAttribute('src', dogBreedPhotos.dogBreeds[index].url);
        paragraphElement.innerHTML = dogBreedPhotos.dogBreeds[index].description;
        myModal.style.display = 'block';
   }

   closeModal.onclick = function() {
       myModal.style.display = 'none';
   }

   imgElement.setAttribute('src', dogBreedPhotos.dogBreeds[index].url);
   figureCaption.innerHTML = dogBreedPhotos.dogBreeds[index].name;
   figureElement.appendChild(figureCaption);
   figureElement.appendChild(imgElement);
   figureElement.appendChild(descriptionElement);
   divElement.appendChild(figureElement);
   modalContent.appendChild(modalImage);
   modalContent.appendChild(paragraphElement);
   dogBreedInfo.appendChild(divElement);
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