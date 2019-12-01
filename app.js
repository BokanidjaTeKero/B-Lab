
/*************************************************************************************
					HOME WORK - JS ARRAYS & LOOPS HOMEWORK 
**************************************************************************************/

console.log('**************');
console.log('HOME WORK - JS ARRAYS & LOOPS HOMEWORK ');
console.log('**************');

/*************************************************************************************
									TASK 1
**************************************************************************************/

console.log(' Task: 1');
console.log(' Repack old array to the new one, in the same order: ');

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
	dataNew[i] = dataOld[i]
}

console.log(dataOld, dataNew);

/*************************************************************************************
									TASK 2
**************************************************************************************/

console.log(' Task: 2');
console.log(' Repack old array to the new one, in the reverse order: ');

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
	dataNew[i] = dataOld[dataOld.length - 1 -i]
}

console.log(dataOld, dataNew);

/*************************************************************************************
									TASK 3
**************************************************************************************/

console.log(' Task: 3');
console.log(' Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one : ');

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var z = dataNew.length;

for ( i = 0; i < dataOld.length; i++) {
	dataNew[z + i] = dataOld[i];
}

console.log(dataNew)

/*************************************************************************************
									TASK 4
**************************************************************************************/

console.log(' Task: 4');
console.log(' Create a new array that contains data from both arrays, starting with data from array a: ');

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for ( i = 0; i < a.length; i++) {
	c[i] = a[i];
}

for ( j = 0; j < b.length; j++) {
	c[a.length + j] = b[j]
}

console.log(c)

/*************************************************************************************
									TASK 5
**************************************************************************************/

console.log(' Task: 5');
console.log(' Create a new array that contains data from both arrays, but in alternating order, one element from array a, then one element from array b, and so on. In the end it should look like this:')
console.log(' ==>  [12, 88, 56, 7, 32, 13, 44] <== ')
 
var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

for (i = 0 , w = 0; i < a.length; i++ , w+=2) {
	c[w] = a[i];
}

for (i = 0 , q = 1 ; i < b.length; i++ , q+= 2) {
	c[q] = b[i];
}

console.log(c);

/*************************************************************************************
									TASK 6
**************************************************************************************/

console.log(' Task: 6');

var star = '*';

console.log( star );
console.log( star + star );
console.log( star + star + star );
console.log( star + star + star + star );
console.log( star + star + star + star + star );
console.log( star + star + star + star + star + star );

/*************************************************************************************
									TASK 7
**************************************************************************************/

console.log(' Task: 7');

var space = ' '; 

console.log( star + star + star + star + star + star + star + star + star );
console.log( star + space + space + space + space + space + space + space + star );
console.log( star + space + space + space + space + space + space + space + star );
console.log( star + space + space + space + space + space + space + space + star );
console.log( star + space + space + space + space + space + space + space + star );
console.log( star + star + star + star + star + star + star + star + star );



