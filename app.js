

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


/*************************************************************************************
					HOME WORK - JS Data tipovi & Kondicionali
**************************************************************************************/

console.log('**************');
console.log('HOME WORK - JS Data tipovi & Kondicionali');
console.log('**************');

/*************************************************************************************
									TASK 1
**************************************************************************************/

var num1;
var num2;
var num3;
var num4;
var num5;

num1 = 15;
num2 = -2;
num3 = 22;
num4 =  0;
num5 = 13;
sentence = 'The largest number is ';
sentence1 = ' From a series of five numbers ';
sentence2 = ' which one is the largest number?'


console.log('Task 1:');
console.log( sentence1 + num1 + ', ' + num2 + ', ' + num3 + ', ' + num4 + ', ' + num5 + ', ' + sentence2 );


if ( num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 )
{
    console.log( sentence + num1 );
}
else if ( num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 )
{
    console.log( sentence + num2 );
}
else if ( num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 )
{
    console.log( sentence + num3 );
}
else if ( num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5 )
{
    console.log( sentence + num4 );
}
else
{
    console.log( sentence + num5 );
}

/*************************************************************************************
									TASK 2
**************************************************************************************/

console.log('Task 2:');

num1 = 3;
num2 = -7;
num3 = 2;

sentence = 'We have three numbers : ';
sentence1 = ' is a possitive number.';
sentence2 = ' is a negative number.';
sentence3 = ' Product sing of this numbers is ';
var sentence4 = '+ .';
var sentence5 = '- .';

console.log( sentence + num1 + ', ' + num2 + ', ' + num3 );

function possitiveNegativeNum(x) {
	var x;

	if ( x >= 0 ) {
		console.log( x + sentence1 );
	} else {
		console.log( x + sentence2 );
	}
}

function possitiveNegative( x, y, z) {
	var x;
	var y;
	var z;

	if ( x > 0 && y > 0 && z > 0 ) {
	    console.log( sentence3 + sentence4 );
	} else if ( x < 0 && y < 0 && z < 0 ) {
	    console.log( sentence3 + sentence5 );
    } else if (x > 0 && y < 0 && z < 0 ) {
	    console.log( sentence3 + sentence5 );
	} else if ( x < 0 && y > 0 && z < 0 ) {
	    console.log( sentence3 + sentence5 );
	} else {
	    console.log( sentence3 + sentence5 );
	}
}

possitiveNegativeNum( num1 );
possitiveNegativeNum( num2 );
possitiveNegativeNum( num3 );
possitiveNegative( num1, num2, num3 );


/*************************************************************************************
									TASK 3
**************************************************************************************/

console.log('Task 3:');

sentence = ' Zdravo Svete '; // serbian
sentence1 = ' Halo Dunia ';	// indonesian
sentence2 = ' Sannu Duniya '; // hausa
sentence3 = ' မင်္ဂလာပါကမ္ဘာလောက '; // myanmar
sentence4 = ' こんにちは世界 '; // japanese


var lang = ' brr ';

switch(lang) {
	case ' serbian ' :
		console.log( sentence );
	break;
	case ' indonesian ' :
		console.log( sentence1 );
	break;
	case ' hausa ' :
		console.log( sentence2 );
	break;
	case ' myanmar ' :
		console.log( sentence3 );
	break;
	case ' japanese ' :
		console.log( sentence4 );
	break;
	default:
		console.log( sentence, sentence1, sentence2, sentence3, sentence4 );
}

/*************************************************************************************
									TASK 4
**************************************************************************************/

console.log('Task 4:');

var userAge;
var someAge;

userAge = 90;
someAge = 28;


function usersAges(userAge, someAge) {
	var x = userAge;
	var y = someAge;

	x >= y ? olderOris(x, y) : less(y);

	function less(y) {
		var y;
		console.log( ' User is less than ' + y + ' years old. ' );
	}

	function olderOris(x, y) {
		var x;
		var y;

		if ( x > y ) {
			console.log( ' User is older than ' + y + ' years. ' );
		} else {
			console.log( ' User is ' + y + ' years old. ' );
		}
	}
}


usersAges(userAge, someAge);




