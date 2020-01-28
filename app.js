
var mainDiv = document.querySelector('main');
var input = document.querySelector('input');

var movieList = [
	{
		name: 'Interstellar',
		image: './assets/interstellar.jpg'
	},
	{
		name: 'Inception',
		image: './assets/Inception.jpg'
	},
	{
		name: 'The Last Samurai',
		image: './assets/The Last Samurai.jpg'
	},
	{
		name: 'Troy',
		image: './assets/Troy.jpg'
	},
	{
		name: 'Invincible',
		image: './assets/Invincible.jpg'
	},
	{
		name: 'Iron Man',
		image: './assets/Iron Man.jpg'
	},
	{
		name: 'The Transporter',
		image: './assets/The Transporter.jpg'
	},
	{
		name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
		image: './assets/Pirates of the Caribbean-The Curse of the Black Pearl.jpg'
	},
	{
		name: 'Thor',
		image: './assets/Thor.jpg'
	},
	{
		name: 'The Lord of the Rings: The Fellowship of the Ring',
		image: './assets/The Lord of the Rings-The Fellowship of the Ring.jpg'
	},
	{
		name: 'Ip Man',
		image: './assets/Ip Man.jpg'
	},
	{
		name: 'The Wolverine',
		image: './assets/The Wolverine.jpg'
	},
	{
		name: 'The Matrix',
		image: './assets/The Matrix.jpg'
	},
	{
		name: 'Snowden',
		image: './assets/Snowden.jpg'
	},
]

for( var i = 0; i < movieList.length; i++){
	createMoveiCard(movieList[i]);
}

function createMoveiCard(item) {
	var div = document.createElement('div');
	var btn = document.createElement('button');
	var imgDiv = document.createElement('div');
	var p = document.createElement('p');

	mainDiv.prepend(div);
	div.classList.add('movie-card');
	div.appendChild(btn);
	btn.classList.add('icon-big');
	div.appendChild(imgDiv);
	imgDiv.style.backgroundImage = 'url("' + item.image + '")';
	imgDiv.classList.add('movie-img');
	div.appendChild(p);
	p.textContent = item.name;

	btn.addEventListener('mousedown', function(btn) {
		
		btn.currentTarget.classList.add('icon-small');
		btn.currentTarget.classList.remove('icon-big');
		
  	});

  	btn.addEventListener('mouseup', function(btn) {

  		btn.currentTarget.classList.remove('icon-small');
  		btn.currentTarget.classList.add('icon-big');

  		btn.currentTarget.parentElement.remove();
  	});
}

function search() {
	var filter = input.value.toLowerCase();
	var movieCard = document.querySelectorAll('.movie-card');

	for(var i = 0; i < movieCard.length; i++) {
		var p = movieCard[i].querySelectorAll('.movie-card p')[0];
		var txtValue = p.textContent || p.innerText;

		if(txtValue.toLowerCase().indexOf(filter) > -1) {
			movieCard[i].style.display = '';
		} else {
			movieCard[i].style.display = 'none';
		}
	}
}

input.addEventListener('keyup', search);
