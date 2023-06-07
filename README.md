# Etch-a-Scetch

In this Project the Goal was to Programm a simple Etch-a-Sketch that has a 16x16 grid to beginn with and can change size based on user input.
The main goal was to practice the use of Javascript to change css and html values via Javascript based on user Inputs.

First we have the function createGrid().
![image](https://github.com/Murc96/Etch-a-Scetch/assets/133204473/12ea2cbf-8590-4565-b810-a9cdbb33775a)

This function creates the grid in css with columns and rows and also a div for every box in html inside the container class div.
It starts with a value of 16x16 and changes based of the user input provided after clicking on the start/reset button.

At the end it opens the gridListeners() function.
![image](https://github.com/Murc96/Etch-a-Scetch/assets/133204473/69847473-3cc7-48da-99d5-e36f833d348a)

The way i did this there is a random r,g and b value assigned to each box before we even trigger the event listener so the value cant change again when the user hovers over the same box multiple times.
After that if the user hovers over the box with the mouse the r,g and b values will be assigned to the background color of the box being hovered over and change to that random generated color.

And last but not least we have our click event for the start/reset button.
![image](https://github.com/Murc96/Etch-a-Scetch/assets/133204473/7d9cbc68-8aa6-48b9-9179-93ae70313a0b)

it is linked to an arrow function that at first will call another function ( that deletes all the div boxes already created by the default 16x16 grid.
It does so by checking if the main div (container) has any first child objects and if so it will remove them until there is none left.
After that it will ask the user for an input to define the desired grid size and check if its inbetween 1 and a 100 if so it will call the createGrid function but this time handing over the grid size desired by the user.
(for example if the user enters 50 it will create a 50x50 grid)
if the number isnt inbetween 1 - 100 it will alert the user that it needs to be in that range and only delete the existing grid. Leaving the User only with the Start/Reset button to click.
