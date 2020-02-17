
const fcBarcelona = {

	teamName : 'Barcelona',
	teamLogo : './images/barcelonaLogo.png',
	playerProperties : [
		{
			image : './images/lionelMessi.png',
			name : 'Lionel',
			lastName : 'Messi',
			number : 10,
			position : 'Foward',
			age : 32,
		},
		{
			image : './images/antoanGrizman.png',
			name : 'Antoine',
			lastName : 'Griezmann',
			number : 17,
			position : 'Foward',
			age : 28,
		},
		{
			image : './images/arthur.png',
			name : 'Arthur',
			lastName : 'Melo',
			number : 8,
			position : 'Middle',
			age : 23,
		},
		{
			image : './images/arthurVidal.png',
			name : 'Arthur',
			lastName : 'Vidal',
			number : 22,
			position : 'Middle',
			age : 32,
		},
		{
			image : './images/frenkiDeJong.png',
			name : 'Frenkie',
			lastName : ' de Jong',
			number : 21,
			position : 'Middle',
			age : 22,
		},
		{
			image : './images/gerardPike.png',
			name : 'Gerard',
			lastName : ' Pique',
			number : 3,
			position : 'Defender',
			age : 32,
		},
		{
			image : './images/ivanRaketic.png',
			name : 'Ivan',
			lastName : ' Raketic',
			number : 4,
			position : 'Middle',
			age : 31,
		},
		{
			image : './images/jordiAlba.png',
			name : 'Jordi',
			lastName : ' Alba',
			number : 18,
			position : 'Defender',
			age : 30,
		},
		{
			image : './images/luisSuarez.png',
			name : 'Luis',
			lastName : ' Suarez',
			number : 9,
			position : 'Foward',
			age : 32,
		},
		{
			image : './images/nelsonSemedo.png',
			name : 'Nelson',
			lastName : ' Semedo',
			number : 2,
			position : 'Defender',
			age :26,
		},
		{
			image : './images/osmanDembele.png',
			name : 'Ousmane',
			lastName : ' Dembele',
			number : 11,
			position : 'Foward',
			age : 22,
		},
		{
			image : './images/samjuelUmtiti.png',
			name : 'Samuel',
			lastName : ' Umtiti',
			number : 23,
			position : 'Defender',
			age : 26,
		},
		{
			image : './images/sergioRoberto.png',
			name : 'Sergi',
			lastName : ' Roberto',
			number : 20,
			position : 'Defender',
			age : 27,
		},
		{
			image : './images/serhioBuskets.png',
			name : 'Sergio',
			lastName : ' Busquets',
			number : 5,
			position : 'Defender',
			age : 31,
		},
		{
			image : './images/terStegen.png',
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

const header = document.querySelector('section.team-header');
const firstEleven = document.querySelector('section.first-eleven');
const subs = document.querySelector('section.substitutions');

const addHeader = () => {

	const logo = `<img src="${fcBarcelona.teamLogo}" />`;
	const teamName = `<h1>${fcBarcelona.teamName}</h1>`;

	header.innerHTML = logo + teamName + logo;
}

const addSomeCssClass = () => {

	const logoSecon = document.querySelectorAll('section.team-header img');
	logoSecon[1].setAttribute('class', 'right');
}

const getRandomNumber = arr => Math.floor(Math.random()* arr.length);

const addPlayer = () => {
	while(fcBarcelona.playerProperties.length){
		const randomNumber = getRandomNumber(fcBarcelona.playerProperties);
		const container = fcBarcelona.playerProperties.length > 4 ? firstEleven : subs;

		container.appendChild(createPlayer(fcBarcelona.playerProperties[randomNumber]));

		fcBarcelona.playerProperties.splice(randomNumber, 1);
	}
}

const createPlayer = player => {
	const playerCard = document.createElement('div');
	playerCard.classList.add('player-card');

	const img = `<img src="${player.image}"/>`;
	const number = `<span class="player-number">${player.number}</span>`;
	const name = `<span>${player.name}</span>`;
	const lastName = `<span>${player.lastName}</span>`;
	const fullName = `<p>${name}${lastName}</p>`;
	const position = `<h3>${player.position}</h3>`;
	const age = `<h3>${player.age}</h3>`; 

	playerCard.innerHTML = img + number + fullName + position + age;

	return playerCard
}

const makeSubstitution = () => {
	const firstSquad = document.querySelectorAll('.first-eleven .player-card');
	const subs = document.querySelectorAll('.substitutions .player-card');

	const firstSquadNumber = getRandomNumber(firstSquad);
	const subsNumber = getRandomNumber(subs);

	const firstSquadPlayer = firstSquad[firstSquadNumber];
	const subsPlayer = subs[subsNumber];

	const subPrevious = subsPlayer.previousSibling;
	const subNext = subsPlayer.nextSibling;

	firstSquadPlayer.after(subsPlayer);

	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);
}

addHeader();
addSomeCssClass();
addPlayer();
setInterval(makeSubstitution, 5000);
