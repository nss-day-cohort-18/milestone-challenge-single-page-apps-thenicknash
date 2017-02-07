"use strict";

////// Main CarLot iife

var CarLot = (function (otherCarLot) {

	var inventory = [];

	/////// XHR

	var dataRequest = new XMLHttpRequest();

	otherCarLot.loadSuccess = function(){

		dataRequest.addEventListener("load", function(){

			console.log("Success on load!");

			////// Parsing JSON file and calling postToDOM function
			var data = JSON.parse(event.target.responseText);
			inventory.push(data);
			console.log("data",  data);
			console.log("inventory: ", inventory);
			postToDOM(data);
		});

	};

	otherCarLot.loadError = function(event) {
		console.log("Failed!", event);
	};

	dataRequest.open("GET", "../inventory.json");
	dataRequest.send();

	
	return otherCarLot;

})(CarLot || {});


// window.onload = CarLot.loadSuccess();