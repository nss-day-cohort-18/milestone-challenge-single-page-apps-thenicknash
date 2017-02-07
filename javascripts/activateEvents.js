"use strict";

/////// Assign event listeners

var CarLot = (function(otherCarLot) {

	/////// This method assign an event listener to each
	/////// card that is added to the DOM

	otherCarLot.eventListeners = function(){
		console.log('eventListeners are here');
		var numberOfCards = document.getElementsByClassName('car-card');

		///// For loop is where the magic happens

		for(var i = 0; i < numberOfCards.length; i++){
			console.log('looping');
			numberOfCards[i].addEventListener("click", CarLot.changeCard);

		}
	};

	////// Makes methods declared public

	return otherCarLot;

})(CarLot || {});

