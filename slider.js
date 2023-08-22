let imgVar = document.getElementById('Image');
let imageArray = ['images/main pic', 'images/pic 1', 'images/pic 2', 'images/pic 3', 'images/pic 5', 'images/pic 6', 'images/pic 7', 'images/pic 4'];

let imageIndex = 0;

function slideShow() {
    imgVar.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;


    if (imageArray >= imageArray.length) {
        imageIndex = 0
    }
} 
setInterval(slideShow, 3000);