"use strict";

//shorthand for document.ready()
$( () => {

	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	const phonePattern = /^\s*\+?\s*([0-9][\s-]*){9,}$/;

	// The focus() is done in the HTML with autofocus
	// also I changed the input types to try and handle
	// some of the validation before it gets tot the JS file.

/* ======= FOCUSOUT SECTION ========*/

	//validate the arrival date field when it loses focus
	$('#arrival_date').focusout( () => {
		const arrival_date = $('#arrival_date').val().trim();
		if (arrival_date == "") {
			$('#arrival_date').next().text("Please enter an arrival date.");
		} else {
			$('#arrival_date').next().text("");
		}
	});// end arrival_date focusout

	//validate the nights field when it loses focus
	$('#nights').focusout( () => {
		const nights = $('#nights').val().trim();
		if (nights == "") {
			$('#nights').next().text("Please enter a number of nights.");
		} else {
			$('#nights').next().text("");
		}
	});// end nights focusout

	//validate the name field when it loses focus
	$('#name').focusout( () => {
		const name = $('#name').val().trim();
		if (name == "") {
			$('#name').next().text("Please enter a name.");
		} else {
			$('#name').next().text("");
		}
	});// end name focusout

	// validate email field when it loses focus
	$('#email').focusout( () => {
		const email = $('#email').val().trim();
		if (email == "") {
			$('#email').next().text("Please enter an email.");
		} else if ( !emailPattern.test(email) ) {
			$('#email').next().text("Please enter a valid email address.");
		} else {
			$('#email').next().text("");
		}
	});// end email focusout

	//validate the phone number when it loses focus
	$('#phone').focusout( () => {
		const phone = $('#phone').val().trim();
		if (!phone) {
			$('#phone').next().text("Please enter a phone number.");
		} else if ( !phonePattern.test(phone) ) {
			$('#phone').next().text("Please enter a valid phone number.");
		} else {
			$('#phone').next().text("");
		}
	});// end phone focusout

	

/* ---------SUBMIT SECTION-------- */

	$('#submit').click( (evt) => {
		//validation and cleaning will go here
		let isValid = true;
		console.log(evt);

		// validate the arrival date field isn't empty
		const arrival_date = $('#arrival_date').val().trim();
		if (arrival_date == "") {
			$('#arrival_date').next().text("Please enter an arrival date.");
			isValid = false;
		} else {
			$('#arrival_date').next().text("");
		}

		// make sure the ngiths aren't empty
		const nights = $('#nights').val().trim();
		if (nights == "") {
			$('#nights').next().text("Please enter a number of nights.");
			isValid = false;
		} else {
			$('#nights').next().text("");
		}

		// validate the name isn't empty
		const name = $('#name').val().trim();
		if (name == "") {
			$('#name').next().text("Please enter a name.");
			isValid = false;
		} else {
			$('#name').next().text("");
		}

		//validate the email
		const email = $('#email').val().trim();
		if (email == "") {
			$('#email').next().text("Please enter an email.");
			isValid = false;
		} else if ( !emailPattern.test(email) ) {
			$('#email').next().text("Please enter a valid email address.");
			isValid = false;
		} else {
			$('#email').next().text("");
		}

		//validate the phone number
		const phone = $('#phone').val().trim();
		if (phone == "") {
			$('#phone').next().text("Please enter a phone number.");
			isValid = false;
		} else if ( !phonePattern.test(phone) ) {
			$('#phone').next().text("Please enter a valid phone number.");
			isValid = false;
		} else {
			$('#phone').next().text("");
		}

		// final check before submission
		if (isValid) {
			$('form').submit();
		} else {			
			evt.preventDefault();
		}
	})
}); // end ready