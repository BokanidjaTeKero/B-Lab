

/*************************************************************************************
					HOME WORK - JS Uvod, Varijable, Operatori
**************************************************************************************/

console.log('**************');
console.log('HOME WORK - JS Uvod, Varijable, Operatori');
console.log('**************');

/*************************************************************************************
									TASK 1
**************************************************************************************/

var Peter;
var Jim;
var result1;
var result2;
var word;
var sentence;
var sentence1;
var sentence2;
var sentence3;


Peter = 3500 + "$";
Jim = 5000 + "$";
result1 = true;
result2 = false;
sentence1 = 'The result is ';
sentence2 = '. Because Peter has';
sentence3 = 'money than Jim.';
case1 = sentence1 + result2;
case2 = sentence1 + result1;


if(Peter < Jim){
	word = " less ";
} else if(Peter > Jim){
	word = " more ";
} 

sentence = sentence2 + word + sentence3;

console.log('Task 1:');

if( Peter < Jim ) {
	console.log ( case1 + sentence );
} else if ( Peter > Jim ) {
	console.log ( case2 + sentence );
} else {
	console.log ('No winners!'); 
}

/*************************************************************************************
									TASK 2
**************************************************************************************/

var John;
var Mike;

John = 38;
word = Mike = John - 23;

sentence2 = 'Mike is ';
sentence3 = ' years old.';

sentence = sentence2 + word + sentence3;

console.log('Task 2:');
console.log ( sentence );

/*************************************************************************************
									TASK 3
**************************************************************************************/

var firstFlock;
var secondFlock;

firstFlock = 78;
secondFlock = 57;

firstFlock = firstFlock - 12;
secondFlock = secondFlock + 12 - 4;

console.log('Test 3');
console.log( sentence1 + ( firstFlock >= secondFlock ) + '. Because first flock now have '
			+ firstFlock + ' birds, and the second flock have ' + secondFlock + '.');

