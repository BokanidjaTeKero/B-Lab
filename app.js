
/*************************************************************************************
							JS FUNCTIONS ADVANCED HOMEWORK 
**************************************************************************************/

console.log('************************************************');
console.log('          JS Predefinisane Funkcije HOMEWORK  ');
console.log('************************************************');

/*************************************************************************************
									TASK 1
**************************************************************************************/
console.log('Task 1: ');

var string = 'Lorem ipsum dolor sit amet';

function lowerCases(string) {

	console.log(string.toLowerCase());
}
lowerCases(string);

/*************************************************************************************
									TASK 2
**************************************************************************************/
console.log('Task 2: ');

function exist(string, word) {

	if(string.indexOf(word) > -1) {
		console.log(word.concat(' do exist in a string.'));
	} else {
		console.log(word.concat(' do NOT exist in a string.'));
	}
}

var word = 'sit';

exist(string, word);

/*************************************************************************************
									TASK 3
**************************************************************************************/
console.log('Task 3: ');

function theLastLetter(string) {

	var position = string.length;
	var key = string.charAt(position - 1);
	console.log('The last letter is ' + key.concat(' and it position is ',position));
}
theLastLetter(string);

/*************************************************************************************
									TASK 4
**************************************************************************************/
console.log('Task 4: ');

function spliteReturn(string) {

	console.log(string.split(' ', 3));
}

spliteReturn(string);

/*************************************************************************************
									TASK 5
**************************************************************************************/

console.log('Task 5: ');

string = 'Piter is an actor.';
var wordOne = 'Piter';
var wordTwo = 'actor';


function lastTwo(word) { // funkcija koja prima rec, proverava da li pripada stringu,
						 // ako pripada deli je na dva dela i stavlja ih u array a ako
	var item = [];		 // ne pripada stringu stampa da ne pripada.
						 // skladisti se u array jer ne mogu vratiti dva returna
	if(string.indexOf(word) > -1) {
		
		item[item.length] = word.substring(0, word.length - 2);
		item[item.length] = word.substring(word.length - 2, word.length);
	} else {
		console.log(word.concat(' do NOT exist in a string.'));
	}

	return item;
}


function concat() {		//funkcija koja iscitava dva areja, i pakuje tj sastavlja nove reci
	var newWords = [];	// te ih pakuje u novi arej

  	var wordOneParts = lastTwo(wordOne);
  	var wordOnePartOne = wordOneParts[0];
  	var wordOnePartTwo = wordOneParts[1];

  	var wordTwoParts = lastTwo(wordTwo);
  	var wordTwoPartOne = wordTwoParts[0];
  	var wordTwoPartTwo = wordTwoParts[1];

  	newWords[newWords.length] = wordOnePartOne.concat(wordTwoPartTwo);
  	newWords[newWords.length] = wordTwoPartOne.concat(wordOnePartTwo);

  	return newWords;
  }

 
function makeNewString(string, wordOne, wordTwo) { // funkcija koja prima pocetni string i 
												 // dve reci. uklanja te dve reci iz stringa
	var txt = string.substring(wordOne.length, string.length - wordTwo.length - 1);
												// iscitava nove reci , i spaja ih sa ostatkom 
	var newWords = concat();					// stringa.
	var wordOneNew = newWords[0];
	var wordTwoNew = newWords[1];
										// nastanak var txt je hard kodovan iskljucivo samo za ovaj primer!
	var result = wordOneNew.concat(txt, wordTwoNew);
	console.log(result);
}

makeNewString(string, wordOne, wordTwo);

/*************************************************************************************
									TASK 6
**************************************************************************************/

console.log('Task 6: ');

var someData = [34, 23, 14, 56, 23, 44, 65];

function removeReturn(someData) {

	var ind = someData.indexOf(56);

	someData.splice(ind,1);
	console.log(someData);
}

removeReturn(someData);

/*************************************************************************************
									TASK 7
**************************************************************************************/

console.log('Task 7: ');

var someData = [34, 23, 14, 56, 23, 44, 65];

function makeItSim(someData) {
	var otherData = [];

	someData.shift();  // uklanja prvi element areja
	var removed = someData.splice(3,someData.length - 1)
	// stvara novi arej od uklonjenih elemenata
	removed.reverse(); // menja redosled indeksa u areju
	otherData = someData.concat(removed); // spajamo dva areja u novi arej

	console.log(otherData);
}

makeItSim(someData);

/*************************************************************************************
									TASK 8
**************************************************************************************/

console.log('Task 8: ');

var someData = [334, 233, 212, 199, 154, 122];

function repacking(someData) {
	var someOtherData = [];

	someData.forEach(function(item) {

		someOtherData[someOtherData.length] = item;
	});

	console.log(someOtherData);
}

repacking(someData);

/*************************************************************************************
									TASK 9
**************************************************************************************/

console.log('Task 9: ');

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]

function averageGrade(students) {

	var newData = [];

	students.forEach(function(element) {
		if(element.avgGrade >= 8.6) {
			element.avgGrade = element.avgGrade.toFixed(2);
			newData[newData.length] = element;
		}
	})

	console.log(newData);

}

averageGrade(students);

