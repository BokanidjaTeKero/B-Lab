/*************************************************************************************
							JS OBJECTS HOMEWORK 
**************************************************************************************/

console.log('************************************************');
console.log('          JS OBJECTS HOMEWORK ');
console.log('************************************************');

/*************************************************************************************
									TASK 1
**************************************************************************************/
console.log('Task 1: ');

var person = {

	name : 'Mike',
	age : 28,
	married : true

}

function changeValue(person, age) {

	if(person.age !== age){
		person.age = age;
	}
return person;
}


function delProperty(person) {

	if(person.married === true || person.married === false) {
		delete person.married;
	}
return person;
}


function myFunction(person, age) {

	changeValue(person, age);
	delProperty(person)

	console.log(person)
}

myFunction(person, 34)

/*************************************************************************************
									TASK 2
**************************************************************************************/
console.log('Task 2: ');

var people = {

	name : 'Jack',
	age : 32,
	married : true	
}

var children = [
	
	{
		name : 'Janko',
		age : 3,
		gender : 'Male'
	},
	{
		name : 'Marko',
		age : 5,
		gender : 'Male'
	}
]

function haveChildren(people, children) {

	if(people.children === undefined){
		addChildren(people, children);
	} 
	console.log(people);

}

function addChildren(people,children) {
	
	people.children = children;

	return people;
}

haveChildren(people, children);

/*************************************************************************************
									TASK 3
**************************************************************************************/
console.log('Task 3: ');

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function print(text) {
	console.log(text);
}

function exam(students) {

	for(i = 0; i < students.length; i++) {
		students[i].passed ? print(students[i].name + ' passed exam.') : print(students[i].name + " didn't passed exam.");
	}
}

exam(students);

/*************************************************************************************
									TASK 4
**************************************************************************************/
console.log('Task 4: ');


function finder(prop, students) {
	var data = [];	
	

	for(i = 0; i < students.length; i++) {
		
			data[i] = students[i][prop];
		}	
	
	return data;
}


function gettingDataArr(students) {

	var names = finder('name', students);
	var ages = finder('age', students);
	var exams = finder('passed', students);

	console.log(names, ages, exams);
}

gettingDataArr(students);
// /*************************************************************************************
// 									TASK 5
// **************************************************************************************/
console.log('Task 5: ');


var person = {
	name: "Jack",
	age: 32,
	married: true
}

var newObj = Object.create(person);

function conAge(newObj, person) {

	newObj.name === person.name;
	newObj.age === person.age;
	newObj.married === person.married;

	console.log(newObj.age)
}

conAge(newObj, person)

// /*************************************************************************************
// 									TASK 6
// **************************************************************************************/
console.log('Task 6: ');

var person = {
	name: "Mike",
	age: 28,
	married: true,
	stampa : function(name, age) {

		console.log(this.name, this.age)
	}
}

person.stampa(person.name, person.age);

// /*************************************************************************************
// 									TASK 7
// **************************************************************************************/
console.log('Task 7: ');

var person = {
	added : function(name, age, married) {

		this.name = name;
		this.age = age;
		this.married = married;
	}
};

person.added('Bojan', 28, true)