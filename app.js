
var body = document.querySelector('body');
var container = document.querySelector('.container');
var select = document.querySelector('select');
var breed = select.value;


select.addEventListener('change', breedChanging);

function breedChanging() {

	breed = select.value;
	console.log(breed);
	request();
}		 



function request() {

	var newRequest = new XMLHttpRequest();
	newRequest.open('GET','https://dog.ceo/api/breed/' + breed + '/images/random');

	newRequest.onload = function(event) {
	    if(newRequest.status === 200) {
	      var imgUrl = JSON.parse(newRequest.responseText).message;
	      var imgNumb = container.childNodes.length;

	  
	      if(imgNumb === 0) {
	      	createImg(imgUrl);
	      } else {
	      	changeSrc(imgUrl);
	      }

	    }
	  }
	newRequest.onerror = function() {
	    conosle.log('error');
	  }

	newRequest.send();
}



function createImg(imgUrl) {
	var img = document.createElement('img');

	img.setAttribute('src', imgUrl);
	container.appendChild(img);
}


function changeSrc(imgUrl) {
	
	container.querySelector('img').removeAttribute('src');
	container.querySelector('img').setAttribute('src', imgUrl);
}




request();
setInterval(request, 5000);