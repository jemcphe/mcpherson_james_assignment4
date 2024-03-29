//Scalable Data Infrastructure
//Term: 1202
//Project 4
//02/23/2012

alert("JavaScript works!");

/***********************String Library***********************/
// Test for correct phone number input
var testPhoneNumber = function (phoneNumber) {
	var validNumber =   /^\d{3}-\d{3}-\d{4}$/; // regular expression tests for ###-###-####
	if(!validNumber.exec(phoneNumber)) {
		var result = console.log("Sorry, " + phoneNumber + " is an invalid phone number");
		return result;
	} else {
		var result = console.log("" + phoneNumber);
		return result; 
	}
};

// Does a string follow an aaa@bbb.ccc pattern like an email address?
// Test for Correct Email
var testEmailAddress = function (emailAddress) {
	var validEmail = /^([A-Za-z0-9]+([_.]+[A-Za-z0-9]+)*@[A-Za-z0-9]*(.){1}[a-zA-Z]{2,4})$/; // Regular Expression
	if(!validEmail.exec(emailAddress)) {
		var result = console.log("Sorry, " + emailAddress + " is an invalid Email Address");
		return result; 
	} else {
		var result = console.log("" + emailAddress);
		return result;
	}
};

// Is the string a URL?
// Test for correct URL input
var testURL = function(webSite) {
	var validURL = /^(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9\.]+(.){1}[a-z]{3}$/;
	if(!validURL.exec(webSite)) {
		var result = console.log("Sorry, " + webSite + " is an invalid URL");
		return result; 
	} else {
		var result = console.log("" + webSite);
		return result;
	}
};

/*******************Number Library*******************/
//Format a number to use a specific number of decimal places
//format for 2 decimal places
var twoDecimalPlaces = function (number) {
	var validEntry= number.toFixed(2);
	return validEntry;
};

//Given a string version of a Number, return the value as an actual Number
var stringToNumber = function (number) {
	isNaN(number);
	if(isNaN(number)) {
		var invalidEntry = console.log(number + " is not a number");
		return invalidEntry;
	} else {
		var conversion = console.log("" + Number(number));
		return conversion;
	}
};

/******************** Array Library *********************/

//Find the Total Value of Numbers in an Array
var getArrayTotal = function (array) {
	var total = array.reduce(
		function (a, b) {
			return a + b;
		}); // reduces array from left to right, leaving us with a single Lump Sum Value.
	var result = console.log("" + total);
	return result;
};

console.log("Test for correct phone number format: ");
testPhoneNumber("123-456-7890");
console.log("Test for correct email format: ");
testEmailAddress("jemcphe11@gmail.com");
console.log("Test for proper URL format: ");
testURL("http://www.JamesIsAwesome.com");
console.log("Test for number that displays with 2 decimal places: ");
console.log("" + twoDecimalPlaces(11.5));
console.log("Convert String to Number: ");
stringToNumber("777");
console.log("Find the Total Value of the numbers in an Array: ");
getArrayTotal([1, 2, 3, 4]);
