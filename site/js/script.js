// DEFINING VARIABLES AND FUNCTIONS
// var message = "in Global";
// console.log("this is " + message);

// var a = function () {
// 	var message = "in a"
// 	console.log("a is " + message);
// 	b();
// };

// var b = function () {
// 	console.log("b is " + message);
// 	};

// a();

// DIFFERENCE BETWEEN UNDEFINED AND NOT DEFINED
// var x;
// console.log(x)
// if (x == undefined) {
// 	console.log("x is undefined");
// }
// else {
// 	console.log("x is defined")
// }

// STRING CONCATENATION
// var word = "Hello"
// console.log(word)
// word += " People"
// word = word + " People"
// console.log(word + " !")

// SOLVING BASIC MATHS WITH JS/MATH OPERATIONS
// console.log((4*2)/2)
// console.log("a"/2)

// BASIC EQUALITY/TYPE COERCION
// var x = 4;
// var y = "4";
// if (x == y) {
// 	console.log("x is equal to y");
// }
// else {
// 	console.log("x is not equal to y")
// }

// STRICT EQUALITY
// var x = 4;
// var y = "4";
// if (x === y) {
// 	console.log("x is equal to y");
// }
// else {
// 	console.log("x is not equal to y");
// };

// TRUE AND FALSE
// if (null || false || "" || undefined || 0 || NaN) {
// 	console.log("All True")
// }
// else {
// 	console.log("All False")
// };

// if (null || true || "" || "Hello World!" || 0 || NaN) {
// 	console.log("All True")
// }
// else {
// 	console.log("All False")
// };

// if (true && 1 && -1 && "Hello World!" && "false") {
// 	console.log("All True")
// }
// else {
// 	console.log("All False")
// };

// if (true && 0 && -1 && "" && "false" && false) {
// 	console.log("All True")
// }
// else {
// 	console.log("All False")
// };

// FOR LOOP/NUMBER SERIE SUM
// var loop = 0;
// for (var x = 0; x < 10; x++) {
// console.log(x);
// loop = loop + x
// };
// // console.log("The Sum of 0 to 9 is " + loop);

// // OBJECT CREATION
// // var kingsmusic = new Object();
// // kingsmusic.ceo = "Hallel Kings";
// // kingsmusic.name = new Object();
// // kingsmusic.name["first name"] = "Hallel";
// // kingsmusic.name["last name"] = "Eze";
// // console.log(kingsmusic);
// // console.log(kingsmusic["name"]["first name"]);

// // OBJECT CREATION (BETTER WAY)/ OBJECT LITERAL
// // var kingsMusic = {
// // 	ceo: "Hallel Kings",
// // 	name: {
// // 		firstName: "Hallel",
// // 		lastName: "Eze"
// // 	}
// // };
// // console.log(kingsMusic);

// // FUNCTIONS (FIRST CLASS DATA TYPES) ARE OBJECTS
// function multiplyBy(multiplier) {
// 	var func = function (x) {
// 		return multiplier * x;
// 	};

// 	return func;
// }

// var multiplyBy3 = multiplyBy(3);
// console.log(multiplyBy3(10));
// var doubleAll = multiplyBy(2);
// console.log(doubleAll(1000));

// function multiplicationOperation(x, yOperation) {
// 	return yOperation(x);
// }

// var result1 = multiplicationOperation(5, doubleAll)
// console.log(result1);

// PASSING VARIABLES BY VALUE
// var a = 5;
// var b = a;
// b = 10;
// console.log(a);
// console.log(b);

// function passValue(value) {
// 	console.log("old value");
// 	console.log(value);

// 	value = 5;
// 	console.log("intermediate change");
// 	console.log(value)
// }

// var newValue = 7;
// passValue(newValue)
// console.log("last change");
// console.log(newValue);

// PASSING VARIABLES BY REFERENCE
// var a = {x: 5};
// var b = a;
// b = 6;
// console.log(b);

// function passValue(value) {
// 	console.log("old value");
// 	console.log(value);

// 	value.x = 5
// 	console.log("intermediate change");
// 	console.log(value);
// }

// var newValue = {x: 7};
// passValue(newValue)
// console.log("last change");
// console.log(newValue);

// FUNCTION CONSTRUCTORS
// function Circle(radius) {
// 	this.radius = radius;
// }

// Circle.prototype.getArea = 
// function () {
// 		return Math.PI * Math.pow(this.radius, 2)
// 	}

// myCircle = new Circle(10);
// console.log(myCircle.getArea());

// myCircle = new Circle(20);
// console.log(myCircle.getArea());

// OBJECT LITERAL AND THE "this" KEYWORD
// var literalCircle = {
// 	radius: 10,

// 	getArea: function () {
// 		var self = this;

// 		var increaseRadius = function () {
// 		self.radius = 20;
// 	};
// 	increaseRadius();

// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// }

// console.log(literalCircle.getArea());

// ARRAYS
// var array = new Array();
// array[0] = function (name) {
// 	console.log("Hello " + name)
// }
// array[1] = "Hallel"
// array[2] = 2
// array[3] = {
// 	Course: "HTML, CSS & JS",
// 	School: "John Hopkins"
// }

// console.log(array[1]);
// array[0](array[1]);

// SHORTHAND ARRAY
// var names = ["Hallel", "Kings", "Umeke", "Eze"]
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i])
// }