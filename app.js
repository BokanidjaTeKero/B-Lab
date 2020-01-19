


console.log('************************************************');
console.log('          JS BOM HOMEWORK  ');
console.log('************************************************');

/*************************************************************************************
									TASK 1
**************************************************************************************/

console.log('Task 1: ');

function al() {

	var status = navigator.onLine;

	if(status === false){
		status = 'off line';
	} else {
		status = 'on line'
	}

	alert('Browser is ' + status);
}

al();

/*************************************************************************************
									TASK 2
**************************************************************************************/

console.log('Task 2: ');

function reloadPage() {

	location.reload();
}

// reloadPage();

/*************************************************************************************
									TASK 3
**************************************************************************************/

console.log('Task 3: ');

function cameAndGo() {

	setTimeout(go,3000);
}

function go() {

		google();
		setTimeout(goBack,3000);
}

function google() {
	location.href('www.google.com');
}

function goBack() {
	history.back();
}

// cameAndGo();

/*************************************************************************************
									TASK 4
**************************************************************************************/

console.log('Task 4: ');

var number = 0;

function printNumber() {
	number++;
	console.log('Number is ' + number);
	
	if(number >= 15) {
		clearInterval(int);
	}
}

// var int = setInterval(printNumber, 1000);

/*************************************************************************************
									TASK 5
**************************************************************************************/

console.log('Task 5: ');

function randomNumber() {

	console.log(Math.round(Math.random() * 10));
}

randomNumber();

/*************************************************************************************
									TASK 6
**************************************************************************************/

console.log('Task 6: ');

var users = [
	{
		name: 'Pablo',
		age: 54,
		status: 'inactive'
	},
	{
		name: 'Ronaldinho',
		age: 38,
		status: 'inactive'
	},
	{
		name: 'Tito',
		age: 88,
		status: 'inactive'
	},
	{
		name: 'Ragnar',
		age: 36,
		status: 'inactive'
	},
	{
		name: 'Mihajlo',
		age: 1,
		status: 'inactive'
	},
]


function checkOut(users) {

	var inputName = prompt('Please enter your name...'); //izbacuje poruku da korisnik ukuca
														// svoje ime, i cuvamo ga u varijablu.


	
	var nameTrueOrfalse = users.some(function(user) { //uzimamo users arej i proveravamo da li 
	 	//se uneto ime poklapa makar sa jednim od imena.vraca true ili false.stavljamo u varijablu 	
	return user.name.toLowerCase() === inputName.toLowerCase()
	})


	//ubaci alert za kad nema tj za kad nije nasao usera


	var theOne = [];

	users.forEach(function(element) {
		if(element.name.toLowerCase() === inputName.toLowerCase()){
			element.status = 'active';
			theOne[theOne.length] = element;
			localStorage.setItem('loggedInUser', element.name)
		}
	})

	setTimeout(userLogOut, 60000);
}



function userLogOut() {

		localStorage.removeItem('loggedInUser');
}




checkOut(users);


