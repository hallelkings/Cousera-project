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

// AJAX AND JSON
// This code is being used to test Ajax and JSON on the Home Page of this website (index.html)
// var completer = 1;
// var artisteProfile =document.getElementById("artisteProfile")
// var btn = document.getElementById("artisteName")

// btn.addEventListener("click", function () 
// 		{
// 		var request = new XMLHttpRequest();
// 		request.open('GET', 'js/artisteInf' + completer + '.json');
// 		request.onload = function () {
// 			var ourData = JSON.parse(request.responseText);
// 			renderedHTML(ourData);
// 		}
// 		request.send();	
// 		completer++
// 		if (completer > 1) {
// 			btn.classList.add("hide-me");
// 		}
// 	}
// )

// function renderedHTML(data) {
// 	var testingString = ""
// 	for (i = 0; i< data.length; i++) {
// 		testingString += "<p>" + data[i].name + " is " + data[i].age + " years old and " + data[i].favoriteColor + " is his favorite color" + "</p>"
// 	}
// 	artisteProfile.insertAdjacentHTML('beforeend', testingString)
// }

// TESTING ONLINE/OFFLINE STATUS
// if (navigator.onLine) {
// 	console.log("I am online")
// } 
// else {console.log("I am offline")};


//** W E B   S C R I P T  -  B E G I N S **//


// PRE-REQUISITES

/*Preloader - Begins*/
document.addEventListener("DOMContentLoaded", 
	function (event) {
		function hideLoader() {
				$('#loader').hide();
			}

		$(window).ready(hideLoader);

		setTimeout(hideLoader, 20 * 1000);
	}
);
/*Preloader - Ends*/

/* Scroll To Top Button - Begins */
document.getElementById("backTotop").addEventListener("click", 
	function (event) {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
/* Scroll To Top Button - Ends */

// START HEADER

/*Fixing Mobile Nav Menu collapse - Begins*/

$(function () { //Same as document.addEventListener("DOMContentLoaded", ...) 

	// Same as document.querySelector("#navbar-toggle").addEventListener("blur", ...) 
	$("#navbarToggle").blur(function (event) {
		var screenwidth = window.innerWidth;
		if (screenwidth < 768) {
			$("#collapsable-nav").collapse('hide')
		}
	});

	// In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
   // Solution: force focus on the element that the click event fired on
	$("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

/*Fixing Mobile Nav Menu Collapse - Ends*/

/* Appearance Setting Function Integration - Starts */
var appearanceMode = document.querySelector(".appearance-btn");
var appearanceModalbox = document.querySelector(".hidden-box");
	appearanceModalbox.classList.add("hide-me");

appearanceMode.addEventListener("click", function () {
	var appearanceModalbox = document.querySelector(".hidden-box");
	appearanceModalbox.classList.remove("hide-me");
});

var cancelButton = document.querySelector(".appearance-cancel-btn");

cancelButton.addEventListener("click", function () {
	var appearanceModalbox = document.querySelector(".hidden-box");
	appearanceModalbox.classList.add("hide-me");
});
/* Appearance Setting Functionality Integration - Ends */

/*Adding Functionality To Dark/Light Mode Toggle - Starts*/

var darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", function () {
	 body = document.body;
	 body.classList.add("darkmode");
});

var lightMode = document.querySelector(".light-mode");

lightMode.addEventListener("click", function () {
	 body = document.body;
	 body.classList.remove("darkmode");
});
/*Adding Functionality To Dark/Light Mode Toggle - Ends*/

// END HEADER

// START BODY

/*Fan Feedback Page Form - Begins*/

// console.log(document.getElementById("top"))
// console.log(document instanceof HTMLDocument)
document.addEventListener("DOMContentLoaded", 
	function (event) {
		function loveForm (event) {

	//  Form Validation - Begins
	if (document.getElementById("me").value === null || document.getElementById("me").value === "") {
		alert("Please input your name");
		event.preventDefault();
		return(false);
	} 
	else if (document.getElementById("message").value === null || document.getElementById("message").value === "") {
		alert("Please input your message");
		event.preventDefault();
		return(false);
	}
	// Form Validation - Ends

	this.textContent = "submitted";

	notif = document.getElementById("notif");

	if (navigator.onLine === true) {
		document.querySelector(".inner").action = "https://formspree.io/f/xnqwakal";
		notif.classList.add("submitted-notif");
		notif.innerHTML = "sending";
		document.getElementById("do-not-reload").innerHTML = "Please do not reload your browser..."
		console.log("I am Online");
	} 
	else {
		notif.classList.add("not-submitted-notif");
		notif.innerHTML = 'not sent';
		document.querySelector(".inner").action = null;
		console.log("I am not Online")
		event.preventDefault();
	}

	var messageForm =
		document.getElementById("input");

	messageForm.classList.add("hide-me")

	var name = 
		document.getElementById("me").value;
	var messageName = name;
		document.getElementById("fan-name").innerHTML = messageName;
	
	var mail = 
		document.getElementById("mail").value;
	var messageMail = mail;
		document.getElementById("fan-mail").innerHTML = messageMail;

	var message = 
		document.getElementById("message").value;
	var messageContent = message;
		document.getElementById("fan-content").innerHTML = messageContent;

	var prefix = 
		document.getElementById("prefix");
		prefix.innerHTML = "Message: "
		}

	// UNOBTRUSIVE EVENT BINDING
	document.querySelector("#submit-message").addEventListener("click", loveForm);
	document.querySelector("#submit-message").addEventListener("onSubmit", loveForm);
	}
);

/*Fan Feedback Page Form - Ends*/

/*Music Submission Form - Begins*/

document.addEventListener("DOMContentLoaded", 
	function (event) {
		function songSubmission (event) {
			// Form Validation - Begins
			if (document.getElementById("song-name").value === null || document.getElementById("song-name").value === "") {
				alert("Please input the Title of your Track");
				event.preventDefault();
				return(false);	
			}
			else if (document.getElementById("artist-name").value === null || document.getElementById("artist-name").value === "") {
				alert("Please input the Stage Name of you or the Artist you're Legally representing");
				event.preventDefault();
				return(false);
			}
			else if (document.getElementById("genre").value === null || document.getElementById("genre").value === "") {
				alert("Please input your genre");
				event.preventDefault();
				return(false);
			} 
			else if (document.getElementById("file").value === null || document.getElementById("file").value === "") {
				alert("No file uploaded");
				event.preventDefault();
				return(false)
			};
			// Form Validation - Ends
			songBox = document.querySelector("inner")
			inner.classList.add("hide-me")
			event.preventDefault();

			var songName = 
				document.getElementById("song-name").value;
			var songTitle = songName;
				document.getElementById("song-title").innerHTML = songTitle;

			var artist = 
				document.getElementById("artist-name").value;
			var artiste = artist;
				document.getElementById("artiste-name").innerHTML = artiste;

			var featuredArtist = 
				document.getElementById("featured-artist").value;
			var featuredArtiste = featuredArtist;
				if (document.getElementById("featured-artist").value === null || document.getElementById("featured-artist").value === "") {
					document.getElementById("featured-artiste").innerHTML = featuredArtiste;
				} 
				else {document.getElementById("featured-artiste").innerHTML = " ft " + featuredArtiste};

			var genre = 
				document.getElementById("genre").value;
			var songGenre = genre;
				document.getElementById("song-genre").innerHTML = songGenre;

			var facebook = 
				document.getElementById("facebook-id").value;
			var facebookId = facebook;
				document.querySelector(".facebook").innerHTML = facebookId;

			var youtube = 
				document.getElementById("youtube-id").value;
			var youtubeId = youtube;
				document.querySelector(".youtube").innerHTML = youtubeId;
			
			var spotify = 
				document.getElementById("spotify-id").value;
			var spotifyId = spotify;
				document.querySelector(".spotify").innerHTML = spotifyId;

			var instagram = 
				document.getElementById("instagram-id").value;
			var instagramId = instagram;
				document.querySelector(".instagram").innerHTML = instagramId;

			var curatorsMessage = 
				document.getElementById("curator-message").value;
			var messageForcurators = curatorsMessage;
				document.getElementById("curators-message").innerHTML = messageForcurators;
				if (document.getElementById("curator-message").value === null || document.getElementById("curator-message").value === "") {
					document.getElementById("prefix").innerHTML = ""
				} 
				else {document.getElementById("prefix").innerHTML = "Message:"};

			if (navigator.onLine === true) {
				document.getElementById("notif").innerHTML = "sending"
				document.getElementById("notif").classList.add("submitted-notif")
				document.getElementById("do-not-reload").innerHTML = "Please do not reload your browser..."
			} 
			else {
				document.getElementById("notif").innerHTML = "not sent"
				document.getElementById("notif").classList.add("not-submitted-notif")
			}
		}

	// UNOBTRUSIVE EVENT BINDING
	document.querySelector("#submit-song").addEventListener("click", songSubmission);
	document.querySelector("#submit-song").addEventListener("onSubmit", songSubmission);
	}
);

songBox = document.querySelector(".inner")
if (window.innerWidth < 992) {
	songBox.classList.add("input")
}
else {songBox.classList.add("big-input")};
/*Music Submission Form - End*/

/*Integrating File Upload Button - Begins*/
var fileUpload = document.querySelector("#file");
var fileUploadbutton = document.querySelector(".upload-btn");
var fileUploadtext = document.querySelector(".upload-text");

fileUploadbutton.addEventListener("click", function () {
	fileUpload.click();
});

fileUpload.addEventListener("change", function () {
	if (fileUpload.value) {
		fileUploadtext.innerHTML = fileUpload.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
	} else {
		fileUploadtext.innerHTML = "No file chosen, yet."
	}
});
/*Integrating File Upload Button - Ends*/
