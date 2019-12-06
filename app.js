
/*************************************************************************************
							JS CALLBACK FUNCTIONS HOMEWORK 
**************************************************************************************/

console.log('************************************************');
console.log('          JS CALLBACK FUNCTIONS HOMEWORK ');
console.log('************************************************');

/*************************************************************************************
									TASK 5
**************************************************************************************/

console.log('Task 5: ');

var numbers = [ 2, 15, 42, 3, 55, 66];
var number = 33;

function calculating(numbers, number) {

	var newArr = [];

	for (i = 0; i < numbers.length; i++) {
		if (number < numbers[i]) {
			newArr[newArr.length] = numbers[i];
		} 
	}

	console.log(newArr)

}

function colecting(numbers, number) {

	calculating(numbers, number);

}

colecting(numbers, number);

/*************************************************************************************
									TASK 6
**************************************************************************************/

console.log(' Task 6:  ');

var numbersArr = [1, 2, 4, 15, -5, 77];

function max(numbersArr) {

	var maxNumb = numbersArr[0];

	for(i = 0; i < numbersArr.length; i++) {

		if(typeof maxNumb === 'number' && typeof numbersArr[i] === 'number') {
			if(maxNumb > numbersArr[i]) {
				maxNumb = maxNumb;
			} else if (maxNumb < numbersArr[i]) {
				maxNumb = numbersArr[i];
			} else if (maxNumb === numbersArr[i]) {
				maxNumb = maxNumb;
			}
		}
	}
	return maxNumb;
}

function min(numbersArr) {

	var minNumb = numbersArr[0];

	for(i = 0; i < numbersArr.length; i++) {
		if(typeof minNumb === 'number' && typeof numbersArr[i] === 'number') {
			if(minNumb < numbersArr[i]) {
				minNumb = minNumb;
			} else if (minNumb === numbersArr[i]) {
				minNumb = minNumb;
			} else if (minNumb > numbersArr[i]) {
				minNumb = numbersArr[i];
			}
		}
	}
	return minNumb;
}

function multiply(min, max) {

	var result = min(numbersArr) * max(numbersArr);

	console.log(result);
}

multiply(min, max);

/*************************************************************************************
									TASK 7
**************************************************************************************/

console.log(' Task 7:  ');

var numArr = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

var delBig = function (uniqueNumbers) {

	var bigNum = uniqueNumbers[0];

	for(i = 0; i < uniqueNumbers.length; i++) {
		if(bigNum > uniqueNumbers[i]) {
			bigNum = bigNum;
		} else if(bigNum < uniqueNumbers[i]) {
			bigNum = uniqueNumbers[i];
		} else if(bigNum = uniqueNumbers[i]) {
			bigNum = bigNum;
		}
	}
	

	for(i = 0; i < uniqueNumbers.length; i++) {
		if(bigNum == uniqueNumbers[i]) {
			delete uniqueNumbers[i];
		}
	}

	console.log(uniqueNumbers);

}

var printArr = function(numArr, delBig) {

	var uniqueNumbers = [];
	

	for(i = 0; i < numArr.length; i++) {
		var k = 0;
		if(typeof numArr[i] === 'number' ) {
			for(j = 0; j < numArr.length; j++) {
				if(numArr[i] == numArr[j]) {
					k = k + 1;		
				} 
			}
			if(k < 2) {
				uniqueNumbers[uniqueNumbers.length] = numArr[i];
			}
		} 		
	}

	delBig(uniqueNumbers);
	
}

printArr(numArr, delBig);
