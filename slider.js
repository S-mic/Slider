let imgVar = document.getElementById('image');
let imageArray = [
    'images/main pic.jpg',
    'images/pic 4.jpg',
    'images/pic 2.jpg',
    'images/pic 3.jpg',
    'images/pic 5.jpg',
    'images/pic 6.jpg',
    'images/pic 7.jpg'
];

let imageIndex = 0;

function slideShow() {
    imgVar.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;


    if (imageIndex >= imageArray.length) {
        imageIndex = 0
    }
}

setInterval(slideShow, 1000);