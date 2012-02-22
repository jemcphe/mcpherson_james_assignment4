alert("JavaScript works!");

//var validNumber = new RegExp("/ ^ \d{3}- \d{3}- \d{4}$/") ;

var testPhoneNumber = function (phoneNumber) {
	var validNumber =   /^\d{3}-\d{3}-\d{4}$/;
	if(!validNumber.exec(phoneNumber)) {
		console.log("Sorry, " + phoneNumber + " is an invalid phone number");
		return false;
	} else {
		console.log(phoneNumber + " is a valid phone number!");
		return true;
	}
};

testPhoneNumber("123-456-7890");
