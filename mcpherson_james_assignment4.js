alert("JavaScript works!");

/***********************String Library***********************/
// Test for correct phone number input
var testPhoneNumber = function (phoneNumber) {
	var validNumber =   /^\d{3}-\d{3}-\d{4}$/; // regular expression tests for ###-###-####
	if(!validNumber.exec(phoneNumber)) {
		console.log("Sorry, " + phoneNumber + " is an invalid phone number");
		return false; 
	} else {
		console.log(phoneNumber + " is a valid phone number!");
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
		console.log(emailAddress + " is a valid Email Address!");
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
		console.log(webSite + " is a valid URL!");
		return true;
	}
};


testPhoneNumber("123-456-7890");
testEmailAddress("jemcphe11@gmail.com");
testURL("http://www.JamesIsAwesome.com");
