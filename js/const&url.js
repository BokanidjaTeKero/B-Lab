
const submitBtn = document.querySelector('.search-button');
const input = document.querySelector('.keyword-input');
const minCal = document.querySelector('.min-calories-input');
const maxCal = document.querySelector('.max-calories-input');
const recipesPage = document.querySelector('#recipes');
const recipesCounter = document.querySelector('.recipe-count-number');
const health = document.querySelectorAll('#food-form select')[0];
const diet = document.querySelectorAll('#food-form select')[1];
const leftArrow = document.querySelector('.goLeft');
const rightArrow = document.querySelector('.goRight');
const paginationElementContainer = document.querySelector('.paginationElements');
const paginationContainer = document.querySelector('.pagination');
const loader = document.querySelector('.loader');

const url = (input, health, diet, minCal, maxCal, num = 0) => {
	const key = '0a5a92325d15d099bdb12116ab6dbfb0';
	const id = '14f36e30';
	let mainUrl;
	let httpsAndInputPart =  `https://api.edamam.com/search?q=${input}`;
	let idAndKeyPart = `&app_id=${id}&app_key=${key}&count=10&from=${num}0`;

	let healthValue = '';
	if(health.value) {
		healthValue =  `&health=${health}`;
	}
	
	let dietValue = '';
	if(diet.value) {
		dietValue = `&diet=${diet}`;
	}
	let healthAndDietPart = `${healthValue}${dietValue}`; 

	let minCalValue = '';
	let maxCalValue = '';
	if(minCal && maxCal) {
		minCalValue = `&calories=${minCal}`;
		maxCalValue = `-${maxCal}`;
	}
	let caloriesPart = `${minCalValue}${maxCalValue}`;

	mainUrl = `${httpsAndInputPart}${healthAndDietPart}${idAndKeyPart}${caloriesPart}`;

	return mainUrl;
}

export  {submitBtn, input, minCal, maxCal, recipesPage, recipesCounter, health, diet, leftArrow, rightArrow, paginationElementContainer, paginationContainer, loader, url};