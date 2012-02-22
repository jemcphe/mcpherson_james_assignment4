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
	var validEmail = /^([A-Za-z0-9]+([_.]+[A-Za-z0-9]+)*@[A-Za-z0-9]*(.){1}[a-zA-Z]{2,4})$/;
	if(!validEmail.exec(emailAddress)) {
		console.log("Sorry, " + emailAddress + " is an invalid Email Address");
		return false; 
	} else {
		console.log(emailAddress + " is a valid Email Address!");
		return true;
	}
};

testPhoneNumber("123-456-7890");
testEmailAddress("jemcphe11@gmail.com");