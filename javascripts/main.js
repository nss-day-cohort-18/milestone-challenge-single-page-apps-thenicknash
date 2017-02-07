"use strict";

// var CarLot = (function(otherCarLot){

var carOuput = document.getElementById('car-output');


////// Function that posts JSON content to the DOM

function postToDOM(data) {

	////// For loop that goes through JSON array
	////// And provides the HTML layout for the content

	for( var i = 0; i < data.length; i++){
		var maker = data[i].maker;
		var model = data[i].model;
		var year = data[i].year;
		var price = data[i].price;
		var description = data[i].description;

		carOuput.innerHTML += `<div class="col-md-4 car-card">
							   <p>Make: ${maker}</p>
							   <p>Model: ${model}</p>
							   <p>Year: ${year}</p>
							   <p>Price: ${price}</p>
							   <p>Description: ${description}</p>
							   </div>`;

	}

	CarLot.eventListeners();

}

/////// This initiates the JSON iife ////////

CarLot.loadSuccess();
