alert("JavaScript works!");

/***********************String Library***********************/
// Test for correct phone number input
var testPhoneNumber = function (phoneNumber) {
	var validNumber =   /^\d{3}-\d{3}-\d{4}$/; // regular expression tests for ###-###-####
	if(!validNumber.exec(phoneNumber)) {
		console.log("Sorry, " + phoneNumber + " is an invalid phone number");
		return false; 
	} else {
		console.log("" + phoneNumber);
		return true; 
		// MAKEUP: return Boolean, deliverable 3, deliverable 2
	}
};

// Does a string follow an aaa@bbb.ccc pattern like an email address?
// Test for Correct Email
var testEmailAddress = function (emailAddress) {
	var validEmail = /^([A-Za-z0-9]+([_.]+[A-Za-z0-9]+)*@[A-Za-z0-9]*(.){1}[a-zA-Z]{2,4})$/; // Regular Expression
	if(!validEmail.exec(emailAddress)) {
		console.log("Sorry, " + emailAddress + " is an invalid Email Address");
		return false; 
	} else {
		console.log("" + emailAddress);
		return true;
	}
};

// Is the string a URL?
// Test for correct URL input
var testURL = function(webSite) {
	var validURL = /^(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9\.]+(.){1}[a-z]{3}$/;
	if(!validURL.exec(webSite)) {
		console.log("Sorry, " + webSite + " is an invalid URL");
		return false; 
	} else {
		console.log("" + webSite);
		return true;
	}
};

/*******************Number Library*******************/
//Format a number to use a specific number of decimal places
//format for 2 decimal places
var twoDecimalPlaces = function (number) {
	var validEntry= number.toFixed(2);
	if(validEntry) {
		console.log("" + validEntry); 
	}
};

console.log("Test for correct phone number format: ")
testPhoneNumber("123-456-7890");
console.log("Test for correct email formal: ");
testEmailAddress("jemcphe11@gmail.com");
console.log("Test for proper URL format: ")
testURL("http://www.JamesIsAwesome.com");
console.log("Test for number that displays with 2 decimal places: ")
twoDecimalPlaces(11.5);
console.log("Test whether number is above or below a number with a certain percentage: ")
