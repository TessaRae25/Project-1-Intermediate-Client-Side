"use strict";

var htmlForm = document.forms["cakeform"];

/* array for my sizeServing buttons on my HTML*/
var cakeAmount = new Array ();
	cakeAmount ["6"] = 30;
	cakeAmount ["8"] = 35;
	cakeAmount ["10"] = 40;
	cakeAmount  ["12"] = 45;
	cakeAmount ["14"] = 50;
	cakeAmount ["16"] = 60;
	cakeAmount ["18"] = 65;
	cakeAmount ["20"] = 70;
	cakeAmount ["22"] = 80;

/* array for flavorCake % */
var cakeFlavor = new Array ();
	cakeFlavor ["Vanilla"] = 5;
	cakeFlavor ["Chocolate"] = 5; 
	cakeFlavor ["Strawberry"] = 5;
	cakeFlavor ["Butterscotch"] = 7;
	cakeFlavor ["Marbled"] = 10;
	cakeFlavor ["Red Velvet"] = 10;
	cakeFlavor ["Carrot"] = 12;

/* array for typeIcing % */
var flavorIcing = new Array ();
	flavorIcing ["Buttercream"] = 2;
	flavorIcing ["Glossy Glaze"] = 2;
	flavorIcing ["Cream Cheese"] = 5;
	flavorIcing ["Fudge"] = 5;
	flavorIcing ["Meringue"] = 5;
	flavorIcing ["Ganache"] = 5;
	flavorIcing ["Rolled Fondant"] = 7;

/* array for typeFilling % */
var fillingFlavor = new Array ();
	fillingFlavor ["Vanilla Custard"] = 3; 
	fillingFlavor ["Pastry Cream"] = 3;
	fillingFlavor ["White Chocolate"] = 6;
	fillingFlavor ["Chocolate Mousse"] = 6; 
	fillingFlavor ["English Lemon Curd"] = 6;
	fillingFlavor ["Chocolate Ganache"] = 6;
	fillingFlavor ["Raspberry Mousse"] = 7;
	fillingFlavor ["Fresh Berries"] = 8;
	fillingFlavor ["Belgium Chocolate"] = 8;
	fillingFlavor ["Cannoli"] = 1;

/* array for topperType */
var cakeTopper = new Array ();
	cakeTopper ["Bride & Groom"] = 50;
	cakeTopper ["Sparklers"] = 70;
	cakeTopper ["Small Centerpiece"] = 120;
	cakeTopper ["Large Centerpiece"] = 200;

/* array for decorType % */
var typeDecor = new Array ();
	typeDecor ["Piped Icing"] = 5;
	typeDecor ["Caramel Crumble"] = 10;
	typeDecor ["Chocolate Crumble"] = 10;
	typeDecor ["Edible Pearls"] = 15;
	typeDecor ["Mirror Glaze"] = 15;
	typeDecor ["Layered Buttercream"] = 15;
	typeDecor ["Buttercream Folding"] = 15;
	typeDecor ["Floral Lace"] = 15;
	typeDecor ["Fruit Decor"] = 20;
	typeDecor ["Piped Florals"] = 20;
	typeDecor ["Gumpaste Florals"] = 25;

/* array for preCut */
var precutCake = new Array ();
	precutCake ["Yes"] = 20;
	precutCake ["No"] = 0;


function getTotal () {
	 /* Base price */
	var cakeBasePrice = 275;

	 /* Sales tax w/o % */
	var saleTax = 1.055;
	
	 /* Below is the math that adds non percentages together. Using queryselector, I am pulling elements from input with stated ids from my index.html. to get the values from my arrays, I added the array names in front of my query selector to get the value. */
	 var saleTotal = parseInt(cakeAmount[document.querySelector("input[id='sizeServing']:checked").value]) + parseInt(cakeTopper[document.querySelector("input[id='topperType']:checked").value]) + parseInt(precutCake[document.querySelector("input[id='preCut']:checked").value]) + cakeBasePrice * saleTax;


	/*  equation for the % of said variable. The base function I was trying to go with is taking to saleTotal from above, and multiplying it by the base number for the %, then dividing by 100 to get the total. */
	var percentOfFlavor = parseInt(cakeFlavor[document.querySelector("input[id='flavorCake']:checked").value]) * saleTotal / 100;

	var percentOfIcing = parseInt(flavorIcing[document.querySelector("input[id='typeIcing']:checked").value]) * saleTotal / 100;

	var percentOfFilling = parseInt(fillingFlavor[document.querySelector("input[id='typeFilling']:checked").value]) * saleTotal / 100;

	var percentOfDecor = parseInt(typeDecor[document.querySelector("input[id='decorType']:checked").value]) * saleTotal / 100;

	var percentTotal = percentOfFlavor + percentOfIcing + percentOfFilling + percentOfDecor;

// function totalRound() {
// 	var saleTotalRound
// }
	

		/* the display of the result */
		document.getElementById('totalPrice').innerHTML = "Grand Total for Cake: $"+saleTotal + percentTotal;
}






























