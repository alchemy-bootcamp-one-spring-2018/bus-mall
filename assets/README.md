#Assets for BUSMALL Lab

data.js holds the constructor and the array of class elements.  It exports only the array itself.

chooser.js exports a single function to create array of random numbers of any specified length and maximum.

main.js holds the globals and the main program flow.

Two constants at the top of main.js hold parameters that can be quickly changed as desired.
const IMAGES_TO_SHOW = 3;
const MAX_GUESSES = 12;


To do:
1. make it prettier
2. display a count to the user of how many more decisions they'll have to make.  (Currently might have a one-off error in the count.)
3. make it more component-ized.  It's pretty well separated by concern, but main is not providing functions that the other files respond to.  