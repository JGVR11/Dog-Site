//INDEX HTML
document.getElementById('previous-arrow').innerHTML = '<';
document.getElementById('next-arrow').innerHTML = '>';
const dogPhotos = ['Resources/Smiley-Dog.jpg', 'Resources/husky.jpg', 'Resources/Dogs1.jpg', 'Resources/dogs-playing.jpg', 'Resources/dog-under-blanket.jpg'];

let photoAlbum = document.getElementById('photo-album');
let photoCount = document.getElementById('photo-count');
let previousArrow = document.getElementById('previous-arrow');
let nextArrow = document.getElementById('next-arrow');

//function that goes to the next photo in the dogs album
const getNextPhoto = () => {
   if (photoCount.innerHTML === '1 of 5') {
       photoAlbum.setAttribute('src', dogPhotos[1]);
       photoCount.innerHTML = '2 of 5';
   } else if (photoCount.innerHTML === '2 of 5') {
       photoAlbum.setAttribute('src', dogPhotos[2]);
       photoCount.innerHTML = '3 of 5';
   } else if (photoCount.innerHTML === '3 of 5') {
       photoAlbum.setAttribute('src', dogPhotos[3]);
       photoCount.innerHTML = '4 of 5';
   }  else if (photoCount.innerHTML === '4 of 5') {
       photoAlbum.setAttribute('src', dogPhotos[4]);
       photoCount.innerHTML = '5 of 5';
   }
    
};

//function that gets the previous photo from the dogs album
const getPreviousPhoto = () => {
    if (photoCount.innerHTML === '2 of 5') {
        photoAlbum.setAttribute('src', dogPhotos[0]);
        photoCount.innerHTML = '1 of 5';
    } else if (photoCount.innerHTML === '3 of 5') {
        photoAlbum.setAttribute('src', dogPhotos[1]);
        photoCount.innerHTML = '2 of 5';
    } else if (photoCount.innerHTML === '4 of 5') {
        photoAlbum.setAttribute('src', dogPhotos[2]);
        photoCount.innerHTML = '3 of 5';
    } else if (photoCount.innerHTML === '5 of 5') {
        photoAlbum.setAttribute('src', dogPhotos[3]);
        photoCount.innerHTML = '4 of 5';
    }
};

nextArrow.onclick = getNextPhoto;
previousArrow.onclick = getPreviousPhoto;
