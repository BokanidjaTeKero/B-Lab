
var imagesList = [
	'./images/arthas.jpg',
	'./images/goku.jpg',
	'./images/neo.png',
	'./images/ronaldinho.jpeg',
 	'./images/bruceLee.jpg'
]


var mainDiv = document.querySelector('.main-div .images-row');



function addImages() {

	for(var i = 0; i < imagesList.length; i++) {
		createImg(imagesList[i]);
	}
}


function createImg(src) {
	
	var div = document.createElement('div');
	div.classList.add('my-img');

	var img = '<img src="' + src + '" />'

	div.innerHTML = img;
	mainDiv.appendChild(div);
}


function switchPosition() {

	var div = document.querySelectorAll('.my-img');
	
	var firstDiv = div[0];
	var lastDiv = div[div.length - 1];

	lastDiv.after(firstDiv);
}


var counter = 0;

function tumbnailsActive() {

	var tumbnailDiv = document.querySelectorAll('.dot');
	tumbnailDiv[counter].style.backgroundColor = 'grey';

	if(counter < tumbnailDiv.length - 1) {
		counter++
	} else {
		counter = 0;
	}

	tumbnailDiv[counter].style.backgroundColor = 'green';
}


function firstTumbActive() {
	var tumbnailDiv = document.querySelectorAll('.dot');
	tumbnailDiv[0].style.backgroundColor = 'green';
}


addImages();
setInterval(switchPosition, 5000);
firstTumbActive();
setInterval(tumbnailsActive, 5000);