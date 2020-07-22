//Query Parameters Object
const queryParam = {
    qKey: 'q=',
    qValue: ''
};

//The line below 
const bestDogs = {
    germanShep: 'German Shepherd',
    husky: 'Siberian Husky',
    chihuahuas: 'Chihuahua',
    goldenRetriever: 'Golden Retriever',
    labradorRetriever: 'Labrador Retriever',
    boxer: 'Boxer',
    pitbull: 'American Pit Bull Terrier',
    yorkshire: 'Yorkshire Terrier',
    dachshund: 'Dachshund',
    australianShep: 'Australian Shepherd'
};


const germanShepherd = queryParam;
germanShepherd.qValue = bestDogs.germanShep;
getData(germanShepherd);

const sibHusky = queryParam
sibHusky.qValue = bestDogs.husky;
getData(sibHusky);

const chihuahua = queryParam;
chihuahua.qValue = bestDogs.chihuahuas;
getData(chihuahua);

const goldenRetrv = queryParam;
goldenRetrv.qValue = bestDogs.goldenRetriever;
getData(goldenRetrv);

const labradorRetrv = queryParam;
labradorRetrv.qValue = bestDogs.labradorRetriever;
getData(labradorRetrv);

const box = queryParam;
box.qValue = bestDogs.boxer;
getData(box);

const pitb = queryParam;
pitb.qValue = bestDogs.pitbull;
getData(pitb);

const yorky = queryParam;
yorky.qValue = bestDogs.yorkshire;
getData(yorky);

const dachsHund = queryParam;
dachsHund.qValue = bestDogs.dachshund;
getData(dachsHund);

const australianShepherd = queryParam;
australianShepherd.qValue = bestDogs.australianShep;
getData(australianShepherd);

//Top 10 Dog Breeds Photos
const bestDogsPhotos = {
    topTenDogs: [
     //#1-German Shepherd
        {
            src: 'Resources/germanShepherd.jpg'
        },
     //#2-Siberian Husky
        {
            src: 'Resources/siberian-husky.jpg'
        },
     //#3-Chihuahua
        {
            src: 'Resources/chihuahua.jpg'
        },
     //4-Golden Retriever
        {
            src: 'Resources/golden-retriever.jpg'
        },
     //#5-Labrador-Retriever
        {
            src: 'Resources/labrador-retriever.jpg'
        },
     //#6-Boxer
        {
            src: 'Resources/boxer.jpg'
        },
     //#7-Pitbull-Terrier
        {
            src: 'Resources/chihuahua.jpg'
        },
     //#8-Yorky
        {
            src: 'Resources/yorkshire-terrier.jpg'
        },
     //#9-dachshund 
        {
            src: 'Resources/dachshund.jpg'
        },
     //#10-Australian-Shepherd
        {
            src: 'Resources/australian-shepherd.jpg'
        }
    ]
 };
 
const gridContainer = document.getElementById('best-dogs-container');
for (let index=0; index < bestDogsPhotos.topTenDogs.length; index++){
    const imgElement = document.createElement('img');

    imgElement.setAttribute('id', 'top-ten-dogs');
    imgElement.setAttribute('src', bestDogsPhotos.topTenDogs[index].src);
    gridContainer.appendChild(imgElement);
}

/*function getBestDogs() {
    for (let index=0; index < bestDogs.length; index++) {
        let dog = queryParam;
        dog.qValue = bestDogs[index];
        getData(dog);
    }
};

getBestDogs();*/






