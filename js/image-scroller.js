const imgDisplay = document.querySelector('#image-display');
// const rightArrow = document.querySelector('#right');

const allImages = document.querySelector('#img-container');

//gets all images
let all = allImages.querySelectorAll('img');

var imageContainer = document.querySelector('.selector');

var getSrc = imageContainer.getAttribute('src');

// let i = 0;
//get the image to change with the src of setAttribute(src, all[i])
//this will be placed inside of the event listener
//i++;



//insertImage.
//get current array number
//then store that in a variable
//then swap the image in the image-display with the array pointer


imgDisplay.addEventListener('click', (e) => {

    if (e.target.tagName == 'SPAN' && e.target.id == 'right') {
        console.log('right arrow being pressed');
    }

    if (e.target.tagName == 'SPAN' && e.target.id == 'left') {
        console.log('left arrow being pressed');
    }

});
