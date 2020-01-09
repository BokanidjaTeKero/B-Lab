
/*************************************************************************************
							JS FUNCTIONS ADVANCED HOMEWORK 
**************************************************************************************/

console.log('************************************************');
console.log('          JS FUNCTIONS ADVANCED HOMEWORK  ');
console.log('************************************************');

/*************************************************************************************
									TASK 1
**************************************************************************************/
console.log('Task 1: ');

function Student(student) {

	this.name = student[0];
	this.lastName = student[1];
	this.age = student[2];
	this.averageGrade = student[3];
}

var data = [
	['Marko', 'Markovic', 14, 3.5],
	['Djordje', 'Djordjevic', 15, 4.5],
	['Petar', 'Petrovic', 14, 3],
	['Branko', 'Brankovic', 15, 5],
];

function listOfStudents(data) {

	for(i = 0; i < data.length; i++) {
		this[data[i][0].toLowerCase()] = new Student(data[i]);
	}
};

listOfStudents(data);

console.log(marko, djordje, petar, branko);

/*************************************************************************************
									TASK 2
**************************************************************************************/
console.log('Task 2: ');

function Player(name, age, goalsScored, yellowCard) {

	this.name = name;
	this.age = age;
	this.goalsScored = goalsScored;
	this.yellowCard = yellowCard;
}	

var milanBorjan = new Player('Milan', 32, 0, 1);
var milanRodic = new Player('Milan', 28, 2, 2);
var markoGobeljic = new Player('Marko', 27, 1, 3);
var mirkoIvanic = new Player('Mirko', 26, 3, 1);
var dusanJovancic = new Player('Dusan', 29, 2, 1);
var elFardouBen = new Player('Ben', 30, 13, 2);
var markoMarin = new Player('Marko', 30, 9, 2);
var milanPavkov = new Player('Milan', 25, 12, 3);


console.log(milanBorjan, milanRodic, markoGobeljic, mirkoIvanic, dusanJovancic, elFardouBen, markoMarin,milanPavkov);


/*************************************************************************************
									TASK 3
**************************************************************************************/
console.log('Task 3: ');

function Playerr(player) {

	this.name = player[0];
	this.lastName = player[1];
	this.age = player[2];
	this.goalsScored = player[3];
	this.yellowCard = player[4];
}	

var zvezda = [
	['Milan','Borjan', 32, 0, 1],
	['Milan','Rodic', 28, 2, 2],
	['Marko','Gobeljic', 27, 1, 3],
	['Mirko','Ivanic', 26, 3, 1],
	['Dusan','Jovancic', 29, 2, 1],
	['Ben','ElFardou', 30, 13, 2],
	['Marko','Marin', 30, 9, 2],
	['Milan','Pavkov', 25, 12, 3],
];

function favoritePlayers(players) {

	for(i = 0; i < players.length; i++) {
		this[players[i][0].toLowerCase() + '_' + players[i][1].toLowerCase()] = new Playerr(players[i]);
	}
};

favoritePlayers(zvezda);

console.log(milan_borjan,milan_rodic,marko_gobeljic,mirko_ivanic,dusan_jovancic,
		ben_elfardou,marko_marin,milan_pavkov);


/*************************************************************************************
									TASK 4
**************************************************************************************/
console.log('Task 4: ');

function Calculator(item) {

	this.num1 = item[0];
	this.num2 = item[1];
	this.sing = item[2];
	this.operation = function(num1, num2, sing) {
						var result;
						if(this.sing === '-'){
							result = this.num1 - this.num2;
						} else if(this.sing === '+') {
							result = this.num1 + this.num2;
						} else if(this.sing === '/') {
							result = this.num1 / this.num2;
						} else if(this.sing === '*') {
							result = this.num1 * this.num2;
						}

						return result;
					}
}

var myArr = [
	[5, 6, '*'],
	[12, 4, '/'],
	[31, 12, '+'],
	[25, 10, '-'],
]

for(var i = 0; i < myArr.length; i++) {
	this[name(i)] = new Calculator(myArr[i]);
	console.log(this[name(i)]);
}

function name(i) {
	var orderedNumber;

	if(i === 0) {
		orderedNumber = 'Zero';
	} else if(i === 1) {
		orderedNumber = 'One';
	} else if(i === 2) {
		orderedNumber = 'Two';
	} else if(i ===3) {
		orderedNumber = 'Three';
	}

	return 'object' + orderedNumber;
}
