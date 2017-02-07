"use strict";

var CarLot = (function(otherCarLot){

	////// The name of the method called in the activateEvents.js file
	otherCarLot.changeCard = function(){

		/////// Grab each card 
		var carCards = document.getElementsByClassName("car-card");
		/////// A variable that identifies the target
		var chosenCard = event.currentTarget;
		/////// The input text
		// inputFunction(chosenCard);


		/////// For loop that assigns arguments to be passed

		for (var i = 0; i < carCards.length; i++){
			changeBackgroundAndBorder(i, carCards, chosenCard);

		}
			inputFunction(chosenCard);



		function changeBackgroundAndBorder(){
			console.log('if statements')
			
			if (carCards[i]===chosenCard){
				carCards[i].classList.toggle('dynamic-class');
			}
			if (carCards[i]!==chosenCard){
				carCards[i].classList.remove('dynamic-class');
			}

			// inputFunction(chosenCard);
		};

		function inputFunction(){
			console.log('inputFunction yall')
		
			var input = document.getElementById('input-box');
			input.focus();
			input.value = "";

			input.addEventListener("keypress", function(){
				if (chosenCard.classList.contains("dynamic-class")) {
				    chosenCard.childNodes[9].innerHTML = "Description: " + input.value;
				}
			});

			
		};


	};



	/////// The 2 functions are the code that changes each card




	return otherCarLot;

})(CarLot || {});


////////////////////////
////////////////////////

//	Reference the code

////////////////////////
////////////////////////