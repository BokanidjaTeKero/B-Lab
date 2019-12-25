
/*************************************************************************************
							JS ARRAY FUNCTION OBJECTS HOMEWORK
**************************************************************************************/

console.log('************************************************');
console.log('          JS ARRAY FUNCTION OBJECTS HOMEWORK ');
console.log('************************************************');

/*************************************************************************************
									TASK 1
**************************************************************************************/
console.log('Task 1: ');

var numbers = [1,2,3]
var counter = 1;

function counting(numbers, counter) {

	for(i = 0; i < numbers.length; i++) {
		for(j = 0; j < numbers.length; j++) {
			console.log('At position '+ i +', subposition '+ j+', value is '+ counter);
			counter ++;
		}
	}
}

counting(numbers, counter);

/*************************************************************************************
									TASK 2
**************************************************************************************/
console.log('Task 2: ');


Object.prototype.printNameAge = function() {
	var name = this.name;
	var age = this.age;

	console.log(name, age);
}

var ar = [
	{
		name: 'mica',
		age: 34
	},
	{
		name: 'rosa',
		age: 4
	},{
		name: 'goca',
		age: 3
	}
]

function printNewMethod(ar) {

	for(i = 0; i < ar.length; i++) {
		ar[i].printNameAge();
	}
}

printNewMethod(ar);

/*************************************************************************************
									JS PRACTISING
**************************************************************************************/
console.log('Task 1.1: ');

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

someData.make = make;

function make() {
	var bbb = {};

	bbb[this.name] = this.name;
	bbb[this.lastName] = this.lastName;
	bbb[this.status] = this.status;

	console.log(bbb)
}

someData.make();

//***********************************************************************************

console.log('Task 2.1 : ');


var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

function repack(someData) {
	var newArr = [];

	for(i = 0; i < someData.length; i++) {
		if( typeof someData[i] === 'object') {
			for(j = 0; j < someData[i].length; j++){
				newArr[newArr.length] = someData[i][j];
			}
		} else {
			newArr[newArr.length] = someData[i];
		}
	}
	console.log(newArr)
}


repack(someData);


//***********************************************************************************

console.log('Task 3 :');

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

function doAll(someData) {

	finishThem(someData, join(loopAndGet(someData)));

}

function loopAndGet(someData) {
	var araj = [];

	for(i = 0; i < someData.length; i++) {
		if(typeof someData[i] === 'object') {
			araj[araj.length] = someData[i];
		}
	}
	return araj;
}

function join(arr) {
	var arr3 = [];

	for(i = 0; i < arr.length; i++){
		for(j = 0; j < arr[i].length; j++){
			arr3[arr3.length] = arr[i][j];
		}
	}
	return arr3;
	
}

function finishThem(someData, someOtherData) {

	for(i = 0; i < someOtherData.length; i++) {
		someData[someData.length] = someOtherData[i];
	}
	console.log(someData);
}


doAll(someData);


//***********************************************************************************


console.log('Task 4 :');

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};



function isThereAName(someData) {

	if(someData.name) {
		yes(someData);
	} else {
		no(someData);
	}

	console.log(someData);
};



function yes(someData) {

	delete someData.name;
};



function no(someData) {

	someData.name = "Peter";
};


isThereAName(someData);

//***************************************************

console.log('task 5 :');

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

console.log(someData);

someData.isThereAName = function() {

	if(someData.name) {
		var name = someData.name;
		
		someData.removeName = function(name) {
			this.name = name;
			
			delete someData.name;
			console.log(someData)
			
			someData.addName = function(name) {
				this.name = name;
				someData.name = name;
				console.log(someData);
			}
			someData.addName(name);
		};
		someData.removeName(name);
	} 
}

someData.isThereAName();
