
var key = '0a5a92325d15d099bdb12116ab6dbfb0';
var id = '14f36e30';
var submitBtn = document.querySelector('.search-button');
var input = document.querySelector('.keyword-input');
var minCal = document.querySelector('.min-calories-input');
var maxCal = document.querySelector('.max-calories-input');
var recipesPage = document.querySelector('#recipes');
var recipesCounter = document.querySelector('.recipe-count-number');
var health = document.querySelectorAll('#food-form select')[0];
var diet = document.querySelectorAll('#food-form select')[1];
var leftArrow = document.querySelector('.goLeft');
var rightArrow = document.querySelector('.goRight');
var paginationElementContainer = document.querySelector('.paginationElements');
var paginationContainer = document.querySelector('.pagination');
var loader = document.querySelector('.loader');


var gif = document.createElement('img');
gif.setAttribute('src', './img/loader.gif');
loader.appendChild(gif);
loader.style.display = 'none';


function btnDisableEnable() {

	if (input.value.length > 2 ) {
	    submitBtn.disabled = false;
	}
	else {
	    submitBtn.disabled = true;
	}
}

function onSubmit() {
	
	sessionStorage.setItem('inputValue', input.value);
	sessionStorage.setItem('healthValue', health.value);
	sessionStorage.setItem('dietValue', diet.value);
	sessionStorage.setItem('minCalValue', minCal.value);
	sessionStorage.setItem('maxCalValue', maxCal.value);

	input.value.trim() && getRecipe(input);
	input.value = '';
	health.value = '';
	diet.value = '';
	minCal.value = '';
	maxCal.value = '';
}

function getRecipe(searchValue) {
	var newRequest = new XMLHttpRequest();

	newRequest.open('GET', 'https://api.edamam.com/search?q=' + input.value + '&health=' + health.value + '&diet=' + diet.value + '&app_id=' + id + '&app_key=' + key + '&count=10&from=0&calories=' + minCal.value + '-' + maxCal.value);

	newRequest.onload = function() {
		listRecipe(JSON.parse(newRequest.responseText));
		loader.style.display = 'none';
	}

	newRequest.onerror = function() {
	    alert("You must select all input's");
	 };

	newRequest.send();
	loader.style.display = 'block';
}

function listRecipe(recipes) {
	recipesPage.innerHTML = '';
	recipesCounter.innerHTML = recipes.count + 1;
	pagination(recipes);

	var recipesGroup = recipes.hits;

	recipesGroup.forEach(function(recipes) {
		
		addMeal(recipes);		
	})	  
}

function addMeal(recipe) {
	var mealCard = document.createElement('div');
	mealCard.classList.add('recipe-element');
	
	var mealName = '<h3>' + recipe.recipe.label + '</h3>';
	var mealImg = '<img src="' + recipe.recipe.image + '" />';
	var mealCalories = '<span class="calories" >' + Math.ceil(recipe.recipe.calories / recipe.recipe.yield) + '</span>';

	var lista = recipe.recipe.healthLabels;
	var healthLabelsList = [];

	for(var i = 0; i < lista.length; i++) {
		var healthLabels = '<label class="label">' + lista[i] + '</label>';
		healthLabelsList[healthLabelsList.length] = healthLabels;
	}

	var healthLabelsContainer = '<div class="labels">' + healthLabelsList + '</div>';

	mealCard.innerHTML = mealImg + mealName + mealCalories + healthLabelsContainer;

	recipesPage.appendChild(mealCard);

	return mealCard
}

/*Dodavanje stranica, sve osim samih 'linkova' ka odredjenoj stranici je dodato u HTML-u.
Ostatak sam dodavao u kodu ispod. Samim klikom na submit btn glavni kontejner sa stranicama 
dobija display flex umesto display none. Na osnovu broja recepata koje smo pronasli postavljam 
varijablu numberOfPages koja je jednaka zaokruzenom razlomku broja recepata i broja 10.
zatim pravim novi prazan array u koji cu smestati po jedan BROJ koji ce predstavljati tekst
thumbnaila. osim sto predstavlja tekst , za svaki od njih sam napravio span element i dodao 
ga u KONTEJNER gde ce biti smesteni svi, takodje sam svakom elementu dodao po event,
da kada korisnik klikne na odredjeni element, on salje novi request, koji je smesten u 
funkciji qetPageWithRec */


function pagination(recipes) {
	paginationContainer.style.display = 'flex';
	paginationElementContainer.innerHTML = '';

	var numbersOfRecepies = recipes.count + 1;
	var numberOfPages = Math.ceil(numbersOfRecepies / 10);
	
	var pagesArray = [];

	for(var i = 0; i < numberOfPages; i++){
		pagesArray[pagesArray.length] = i
	}
	
	pagesArray.forEach(function(item) {
		var elem = document.createElement('span');
		elem.classList.add('paginationElement');
		elem.innerHTML =  item ;
		paginationElementContainer.appendChild(elem);
		elem.addEventListener('click', function() {
			getPageWithRec(item)
			});		
	})	 
}

/* getPageWithRec funkcija , sadrzi novi rikvest. Isti je poput pocetnog rikvesta , stim da se razlikuje 
'&from' dodata je dinamicka vrednost. Ona ce predstavljati svaki onaj gore navedeni BROJ odozgo i na njega ce 
se dodavati broj 0. tako da ce recimo za page 0 klikom na nju , korisnik dobiti recepte od 1-10, 
za page 4 dobice recepte od 40og do 50og. PROBLEM KOJI MI SE JAVLJA JE DA 10u ILI 11u STRANU PA KA VECIM 
STRANAMA , NECE DA MENJA FROM. zakuca ga na broju 100 i to je to, takodje zakuca i to: 100 kao i za more na false
 . Do sada nisam pronasao resenje ali radicu na tome.
takodje sam ubacio pet varijable koje sam smestio u sessionStorage, svaka od njih predstavlja input.value,
health.value kao i diet.value, minCal.value i maxCal.value. Dobijaju svoje vrednosti nakon prvog popunjavanja forme te klikom na subbmit.
kasnije ih koristim u novom rikvestu za svaki iduci page */

function getPageWithRec(num) {
	var pageRequest = new XMLHttpRequest();

	pageRequest.open('GET', 'https://api.edamam.com/search?q=' + sessionStorage.inputValue + '&health=' + sessionStorage.healthValue + '&diet=' + sessionStorage.dietValue + '&app_id=' + id + '&app_key=' + key + '&count=10&from=' + num + '0&calories=' + sessionStorage.minCalValue + '-' + sessionStorage.maxCalValue);

	pageRequest.onload = function() {
		listRecipe(JSON.parse(pageRequest.responseText));
		console.log(JSON.parse(pageRequest.responseText));
	}
	pageRequest.send();
}

/* Gore navedeni KONTEJNER , sadrzi osim thumbnailova, i strelice za saltanje stranica. Ceo kontejner se 
pomera u zavisnosti od pritisnute strelice. pomeranje se vrsi tako sto dobija marginu levu/desnu,
prvi clan niza postaje poslednji ili poslednji postaje prvi kao i restartovanje margine. redosled 
izvrasavanja funkicja zavisi od kliknute strelice.*/

function marginMove(where) {
	var elem = document.querySelector('.paginationElement');
	var width = elem.offsetWidth;

	if(where === 'left') {
		paginationElementContainer.style.marginRight = width + 10 + 'px';	
	} else if (where === 'right') {
		paginationElementContainer.style.marginLeft = width + 10 + 'px';
	}
}

function normalizeMargin() {
	var elem = document.querySelector('.paginationElement');
	var duzina = elem.offsetWidth;

	paginationElementContainer.style.margin = 10 + 'px';
}

function switchPosition(where) {

	var elem = document.querySelectorAll('.paginationElement');
	
	var firstElem = elem[0];
	var lastElem = elem[elem.length - 1];

	if(where === 'after') {
		lastElem.after(firstElem);	
	} else if (where === 'before') {
		firstElem.before(lastElem);
	}
}

function previousPage() {

	marginMove('left');
	switchPosition('before');
	normalizeMargin();
}

function nextPage() {
	
	switchPosition('after');
	marginMove('right');
	normalizeMargin();
}



leftArrow.addEventListener('click', previousPage);
rightArrow.addEventListener('click', nextPage);

input.addEventListener('keyup', btnDisableEnable);
submitBtn.addEventListener('click', onSubmit);