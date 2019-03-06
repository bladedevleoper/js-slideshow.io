const imgDisplay = document.querySelector('#image-display');
// const rightArrow = document.querySelector('#right');

const allImages = document.querySelector('#img-container');

//gets all images
let all = allImages.querySelectorAll('img');

var imageContainer = document.querySelector('.selector');
let counter = 0;
var newImg = document.createElement('img');
newImg.setAttribute('id', 'img-size');

newImg.setAttribute('src', all[0].src);
imgDisplay.appendChild(newImg);

let imageSelected = all[counter];



imgDisplay.addEventListener('click', (e) => {

    if (counter > all.length) {
        counter = 0;
        newImg.setAttribute('src', all[0].src);

    } else if (counter == 0 && e.target.id == 'left') {

        counter--;
        newImg.setAttribute('src', all[[all.length - 1]].src);

    } else {

        if (e.target.tagName == 'SPAN' && e.target.id == 'right') {
            counter++;
            newImg.setAttribute('src', all[counter].src);
            
        }

        if (e.target.tagName == 'SPAN' && e.target.id == 'left') {
            
            counter--;
            newImg.setAttribute('src', all[counter].src);
        
        }
    }

    

});


