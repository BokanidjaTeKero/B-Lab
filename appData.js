
var fcBarcelona = {

	teamName : 'Barcelona',
	teamLogo : './images/laLiga/barcelona/barcelonaLogo.png',
	playerProperties : [
		{
			image : './images/laLiga/barcelona/lionelMessi.png',
			name : 'Lionel',
			lastName : 'Messi',
			number : 10,
			position : 'Foward',
			age : 32,
		},
		{
			image : './images/laLiga/barcelona/antoanGrizman.png',
			name : 'Antoine',
			lastName : 'Griezmann',
			number : 17,
			position : 'Foward',
			age : 28,
		},
		{
			image : './images/laLiga/barcelona/arthur.png',
			name : 'Arthur',
			lastName : 'Melo',
			number : 8,
			position : 'Middle',
			age : 23,
		},
		{
			image : './images/laLiga/barcelona/arthurVidal.png',
			name : 'Arthur',
			lastName : 'Vidal',
			number : 22,
			position : 'Middle',
			age : 32,
		},
		{
			image : './images/laLiga/barcelona/frenkiDeJong.png',
			name : 'Frenkie',
			lastName : ' de Jong',
			number : 21,
			position : 'Middle',
			age : 22,
		},
		{
			image : './images/laLiga/barcelona/gerardPike.png',
			name : 'Gerard',
			lastName : ' Pique',
			number : 3,
			position : 'Defender',
			age : 32,
		},
		{
			image : './images/laLiga/barcelona/ivanRaketic.png',
			name : 'Ivan',
			lastName : ' Raketic',
			number : 4,
			position : 'Middle',
			age : 31,
		},
		{
			image : './images/laLiga/barcelona/jordiAlba.png',
			name : 'Jordi',
			lastName : ' Alba',
			number : 18,
			position : 'Defender',
			age : 30,
		},
		{
			image : './images/laLiga/barcelona/luisSuarez.png',
			name : 'Luis',
			lastName : ' Suarez',
			number : 9,
			position : 'Foward',
			age : 32,
		},
		{
			image : './images/laLiga/barcelona/nelsonSemedo.png',
			name : 'Nelson',
			lastName : ' Semedo',
			number : 2,
			position : 'Defender',
			age :26,
		},
		{
			image : './images/laLiga/barcelona/osmanDembele.png',
			name : 'Ousmane',
			lastName : ' Dembele',
			number : 11,
			position : 'Foward',
			age : 22,
		},
		{
			image : './images/laLiga/barcelona/samjuelUmtiti.png',
			name : 'Samuel',
			lastName : ' Umtiti',
			number : 23,
			position : 'Defender',
			age : 26,
		},
		{
			image : './images/laLiga/barcelona/sergioRoberto.png',
			name : 'Sergi',
			lastName : ' Roberto',
			number : 20,
			position : 'Defender',
			age : 27,
		},
		{
			image : './images/laLiga/barcelona/serhioBuskets.png',
			name : 'Sergio',
			lastName : ' Busquets',
			number : 5,
			position : 'Defender',
			age : 31,
		},
		{
			image : './images/laLiga/barcelona/terStegen.png',
			name : 'Marc',
			lastName : ' ter Stegen',
			number : 1,
			position : 'Goalkeeper',
			age : 27,
		}
	]
}

//***************************************************************************************************
//***************************************************************************************************
//***************************************************************************************************

var header = document.querySelector('section.team-header');
var firstEleven = document.querySelector('section.first-eleven');
var subs = document.querySelector('section.substitutions');

function addHeader() {

	var logo = '<img src="' + fcBarcelona.teamLogo + '" />';
	var teamName = '<h1>' + fcBarcelona.teamName + '</h1>';

	header.innerHTML = logo + teamName + logo;
}

function addSomeCssClass() {

	var logoSecon = document.querySelectorAll('section.team-header img');
	logoSecon[1].setAttribute('class', 'right');
}

function getRandomNumber(arr) {
	return Math.floor(Math.random()* arr.length);
}

function addPlayer() {
	while(fcBarcelona.playerProperties.length){
		var randomNumber = getRandomNumber(fcBarcelona.playerProperties);
		var container = fcBarcelona.playerProperties.length > 4 ? firstEleven : subs;

		container.appendChild(createPlayer(fcBarcelona.playerProperties[randomNumber]));

		fcBarcelona.playerProperties.splice(randomNumber, 1);
	}
}

function createPlayer(player) {
	var playerCard = document.createElement('div');
	playerCard.classList.add('player-card');

	var img = '<img src="' + player.image + '" />';
	var number = '<span class="player-number">' + player.number + '</span>';
	var name = '<span>' + player.name + '</span>';
	var lastName = '<span>' + player.lastName + '</span>';
	var fullName = '<p>' + name + lastName + '</p>';
	var position = '<h3>' + player.position + '</h3>';
	var age = '<h3>' + player.age + '</h3>'; 

	playerCard.innerHTML = img + number + fullName + position + age;

	return playerCard
}

function makeSubstitution() {
	var firstSquad = document.querySelectorAll('.first-eleven .player-card');
	var subs = document.querySelectorAll('.substitutions .player-card');

	var firstSquadNumber = getRandomNumber(firstSquad);
	var subsNumber = getRandomNumber(subs);

	var firstSquadPlayer = firstSquad[firstSquadNumber];
	var subsPlayer = subs[subsNumber];

	var subPrevious = subsPlayer.previousSibling;
	var subNext = subsPlayer.nextSibling;

	firstSquadPlayer.after(subsPlayer);

	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);
}

addHeader();
addSomeCssClass();
addPlayer();
setInterval(makeSubstitution, 5000);
