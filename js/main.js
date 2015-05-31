function askQuestions () {


	var firstName = prompt ('what is your first name?');
	var lastName = prompt ('what is your last name?');

	var fullName = firstName + " " + lastName;

	$('h2').text('Hello ' + fullName);

	var age = prompt ('how old are you?');

	if(age >=18) {
		console.log("welcome adult!'")

	} else if (age >=13)
	{
		console.log('Come back in a few years!');
	} else {
	console.log('go away child!');

	}


	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly')
	{
		console.log('hey general!');
}


var faveColor = prompt ('what is your favorite color?').toLowerCase();

if (faveColor == 'red' || 
	faveColor == 'green' || 
	faceColour == 'blue' || 
	faveColor== 'yellow') {

	$("h1").css('color', faveColor);

}

}

//when the page has loaded 

$(function() {

	$('img').on('click', askQuestions);

	//hide all the content
	$('h3').next().hide(); 

	//when the user clicks h3 
	$('h3').on('click', function(){

		//hide the next element
		$(this).next ().slideToggle(500);

});


});


