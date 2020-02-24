
import * as constAndUrl from './const&url.js';
import * as paginationElements from './pagination.js';
const {submitBtn, input, minCal, maxCal, recipesPage, recipesCounter, health, diet, leftArrow, rightArrow, paginationElementContainer, paginationContainer, loader, url} = constAndUrl;
const {previousPage, nextPage} = paginationElements;

const gif = document.createElement('img');
gif.setAttribute('src', './img/loader.gif');
loader.appendChild(gif);
loader.style.display = 'none';


const btnDisableEnable = () => {

	if (input.value.length > 2 ) {
	    submitBtn.disabled = false;
	}
	else {
	    submitBtn.disabled = true;
	}
}

const onSubmit = () => {
	
	sessionStorage.setItem('inputValue', input.value);
	sessionStorage.setItem('healthValue', health.value);
	sessionStorage.setItem('dietValue', diet.value);
	sessionStorage.setItem('minCalValue', minCal.value);
	sessionStorage.setItem('maxCalValue', maxCal.value);

	input.value.trim() && getData(input);
	input.value = '';
	health.value = '';
	diet.value = '';
	minCal.value = '';
	maxCal.value = '';
}

const getData = searchValue => {
	loader.style.display = 'block';
	fetch(url(input.value, health.value, diet.value, minCal.value, maxCal.value), {
		method: 'GET',
		headers: {
			"apiKey": "0a5a92325d15d099bdb12116ab6dbfb0"
		}
	})
	.then(response => response.json())
	.then(data => {
		
		listRecipe(data);
		loader.style.display = 'none';
	})
	.catch(error => console.log(error))
}

const listRecipe = recipes => {
	recipesPage.innerHTML = '';
	recipesCounter.innerHTML = recipes.count;
	pagination(recipes);

	const recipesGroup = recipes.hits;

	recipesGroup.forEach( recipes => {
		
		addMeal(recipes);		
	})	  
}

const addMeal = recipe => {
	const mealCard = document.createElement('div');
	mealCard.classList.add('recipe-element');
	
	const mealName = `<h3>${recipe.recipe.label}</h3>`;
	const mealImg = `<img src="${recipe.recipe.image}" />`;
	const mealCalories = `<span class="calories" >${Math.ceil(recipe.recipe.calories / recipe.recipe.yield)}</span>`;

	const lista = recipe.recipe.healthLabels;
	const healthLabelsList = [];

	for(var i = 0; i < lista.length; i++) {
		const healthLabels = `<label class="label">${lista[i]}</label>`;
		healthLabelsList[healthLabelsList.length] = healthLabels;
	}

	const healthLabelsContainer = `<div class="labels">${healthLabelsList}</div>`;

	mealCard.innerHTML = `${mealImg}${mealName}${mealCalories}${healthLabelsContainer}`;

	recipesPage.appendChild(mealCard);

	return mealCard
}

const pagination = recipes => {
	paginationContainer.style.display = 'flex';
	paginationElementContainer.innerHTML = '';

	const numbersOfRecepies = recipes.count + 1;
	const numberOfPages = Math.ceil(numbersOfRecepies / 10);
	
	const pagesArray = [];

	for(var i = 0; i < numberOfPages; i++){
		pagesArray[pagesArray.length] = i
	}
	
	pagesArray.forEach( item => {
		const elem = document.createElement('span');
		elem.classList.add('paginationElement');
		elem.innerHTML =  item ;
		paginationElementContainer.appendChild(elem);
		elem.addEventListener('click', () => {
			dataPerPage(item)
			});		
	})	 
}

const dataPerPage = num => {
	loader.style.display = 'block';
	fetch(url(sessionStorage.inputValue, sessionStorage.healthValue, sessionStorage.dietValue, sessionStorage.minCalValue, sessionStorage.maxCalValue, num), {
		method: 'GET',
		headers: {
			"apiKey": "0a5a92325d15d099bdb12116ab6dbfb0"
		}
	})
	.then(response => response.json())
	.then(data => {
		listRecipe(data);
		loader.style.display = 'none';
	})
	.catch(error => console.log(error))
}

leftArrow.addEventListener('click', previousPage);
rightArrow.addEventListener('click', nextPage);

input.addEventListener('keyup', btnDisableEnable);
submitBtn.addEventListener('click', onSubmit);