<h1 align="center">~Max's Pizza Parlor~</h1>
<div align="center">
<img src="https://github.com/MaxBrockbank.png" width="200px" height="auto" >
</div>
<p align="center">Authored by Max Brockabnk</p>
<p align="center">Updated on Nov 6th, 2020</p>

## Description
Welcome to Max's Pizza Parlor. Start by building your own pizza, choosing from our 4 sizes and our vast selection of toppings, and we will ring you up with the check so you can get on your way. This is a practice for using JavaScript Objects, Constructors, and Pototypes.

## Set-up Instructions
1. Clone this repository to your desktop
2. Open index.html in the browser of your choice
* _Alternatively you can just click [HERE](#)

## Technologies Used
* HTML
* CSS/Bootstrap
* JavaScript/jQuery

## Known Bugs

## Specs

#### Describe: Pizza();
1. Test: Build a pizza object passing in userinput for size and toppings
2. Expect(Pizza(size, toppings).toEqual(newPizzaObject))

#### Describe: gatherToppingsInput();
1. Test: Gather info for all checked checkboxes and push to an array
2. Expect(gatherToppingsInput().toEqual([pepperoni, sausage, mushrooms]))

#### Describe: Pizza.compilePrice();
1. Test: Prototype method to compile values from user inputs for the final price
2. Expect(Pizza.compilePrice().toEqual(this.price = 15))

#### Describe: Pizza.compilePrice();
1. Test: Prototype method to compile values from user inputs for the final price
2. Expect(Pizza.compilePrice().toEqual(this.price = 15))

#### Describe: Orders();
1. Test: Create an Orders object with an array for all the pizza orders to be stored in
2. Expect(Orders().toEqual(newOrdersObject))

#### Describe: Orders.addOrder();
1. Test: Take pizza order as an argument and add it to pizzas array and increment indexing key-value
2. Expect(Orders.addOrder(pizza).toEqual(Orders{
  this.pizzas = [pizza];
  this.indexing = 1;
}))

#### Describe: Orders.findOrder();
1. Test: Take submit button id and use it to find the coresponding order
2.

#### Describe: newPizzaForm();
1. Test: Dynamically create a new form for a new pizza object when you click the Create New Pizza button
2. Expect(newPizzaForm().toEqual());







## Legal
* Copyright © 2020 Max Brockbank
* This software is licensed under the MIT license