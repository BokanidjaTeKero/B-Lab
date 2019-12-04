

/*************************************************************************************
							JS FUNCTIONS HOMEWORK 
**************************************************************************************/

console.log('************************************************');
console.log('          JS FUNCTIONS HOMEWORK ');
console.log('************************************************');

/*************************************************************************************
									TASK 1
**************************************************************************************/
console.log("Task 1: ")

var myArr = [ 1, 2, 3, 4 ];

function reverseOrder(arr) {
	var arr = arr;
	var newArr = [];
	for( i = 0; i < arr.length; i++) {
		newArr[i] = arr[arr.length - i - 1];
	}
	console.log(newArr);
}


reverseOrder(myArr);

/*************************************************************************************
									TASK 2
**************************************************************************************/
console.log("Task 2: ")

var type = "t";

function typeOf(type) {
	var type = type;
	console.log(typeof type);
}


typeOf(type);

/*************************************************************************************
									TASK 3
**************************************************************************************/
console.log("Task 3: ")

var names = ['Mikelandjelo', 'Leonardo', 'Donatelo', 'Rafaelo', 'Splinter'];

function longestName(namesArr) {

	var max = names[0];

	for ( i = 1; i < names.length; i++) {
		if(names[i].length > max.length) {
			max = names[i];	
		}
	}
	console.log(max);
}

longestName(names);

/*************************************************************************************
									TASK 4
**************************************************************************************/
console.log("Task 4: ")

var numbers = [ 2, 4, 23, 444, -555, 32, 23113, 323, 3, 0, -5, -17 ]

function minNum(num) {

	var min = numbers[0];
	var noviM = [];
	var secondMin = noviM[0];
	var max = numbers[0];
	var noviMax = [];
	var secondMax = noviMax[0];

	
// Pretraga za najmanjim brojem

	for ( i = 1; i < numbers.length; i++) {
		if ( typeof min === 'number' && typeof numbers[i] === 'number') {
			if ( min < numbers[i] ) {
				min = min;
			} else if ( min == numbers[i]) {
				min = min;
			} else {
				min = numbers[i];
			}
		} else {
			console.log(numbers[i] + ' type is not a number!')
		}	
	}

	// console.log(min);

// Pravljenje novig niza, koji je jednak prvom nizu ali bez najmanjeg broja 

	for ( i = 0; i < numbers.length; i++) {

		if ( min > numbers[i] || min < numbers[i]) {
			noviM[i] = numbers[i];
			
		}
	}
	
	// console.log(noviM)

// Pretraga za najmanjim brojem drugog niza ( ili  ti drugim najmanjim prvog niza )

	for ( i = 1; i < noviM.length; i++) {
		if ( secondMin < noviM[i] ) {
			secondMin = secondMin;
		} else if ( secondMin == noviM[i]) {
			secondMin = secondMin;
		} else {
			secondMin = noviM[i];
		}
	}

	// console.log(secondMin);

// Pretraga za najvecim brojem

	for ( i = 1; i < numbers.length; i++) {
		if ( typeof max === 'number' && typeof numbers[i] === 'number') {
			if ( max < numbers[i] ) {
				max = numbers[i];
			} else if ( max == numbers[i]) {
				max = max;
			} else {
				max = max;
			}
		} else {
			console.log(numbers[i] + ' type is not a number!')
		}	
	}

	// console.log(max);

// Pravljenje novog niza, koji je jednak prvom nizu ali bez najveceg broja 

	for ( i = 0; i < numbers.length; i++) {

		if ( max > numbers[i] ) {
			noviMax[i] = numbers[i];
			
		}
	}
	
	// console.log(noviMax)

// Pretraga za najvecim brojem drugog niza ( ili  ti drugim najveceg prvog niza )

	for ( i = 1; i < noviMax.length; i++) {
		if ( secondMax > noviMax[i] ) {
			secondMax = secondMax;
		} else if ( secondMax == noviMax[i]) {
			secondMax = secondMax;
		} else {
			secondMax = noviMax[i];
		}
	}

	// console.log(secondMax);


console.log('Second lowest and second greatest number are ' + secondMin + ' and ' + secondMax)

}

minNum(numbers);
