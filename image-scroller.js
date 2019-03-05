const imgDisplay = document.querySelector('#image-display');
// const rightArrow = document.querySelector('#right');

const allImages = document.querySelector('#img-container');

//gets all images
let all = allImages.querySelectorAll('img');

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
