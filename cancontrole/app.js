
var imagesList = [
	'./images/arthas.jpg',
	'./images/goku.jpg',
	'./images/neo.png',
	'./images/ronaldinho.jpeg',
 	'./images/bruceLee.jpg'
]


var mainDiv = document.querySelector('.main-div .images-row');
var leftBtn = document.getElementById('left-btn');
var rightBtn = document.getElementById('right-btn');



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

function moveLeft() {
	var slika = document.querySelector('.my-img');
	var duzina = slika.offsetWidth;
	
	mainDiv.style.marginRight = duzina + 10 + 'px';
}

function toNormal() {
	var slika = document.querySelector('.my-img');
	var duzina = slika.offsetWidth;

	mainDiv.style.margin = 10 + 'px';
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
setInterval(moveLeft, 5000);
setInterval(switchPosition, 5000);
setInterval(toNormal, 5000);
firstTumbActive();
setInterval(tumbnailsActive, 5000);




function lastBecomeFirst() {

	var div = document.querySelectorAll('.my-img');
	
	var firstDiv = div[0];
	var lastDiv = div[div.length - 1];

	firstDiv.before(lastDiv);	
}

function moveRight() {
	var slika = document.querySelector('.my-img');
	var duzina = slika.offsetWidth;
	
	mainDiv.style.marginLeft = duzina + 10 + 'px';
}



function tumbnailsActiveBack() {

	var tumbnailDiv = document.querySelectorAll('.dot');
	tumbnailDiv[counter].style.backgroundColor = 'grey';

	if(counter > 0) {
		counter--
	} else {
		counter = tumbnailDiv.length - 1;
	}

	tumbnailDiv[counter].style.backgroundColor = 'green';
}





function rightBtnClick() {
	moveLeft();
	switchPosition();
	toNormal();
	tumbnailsActive();
	console.log('right btn')
}

rightBtn.addEventListener('click', rightBtnClick);

function leftBtnClick() {
	lastBecomeFirst();
	moveRight();
	toNormal();
	tumbnailsActiveBack();
}

leftBtn.addEventListener('click', leftBtnClick);