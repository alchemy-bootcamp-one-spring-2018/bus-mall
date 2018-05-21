#Assets for BUSMALL Lab

data.js holds the Product constructor and the array of Product elements.  It exports only the array itself.
The data class does not have ANY methods.  

getRandomNumberSet.js exports a single function to create array of random numbers of any specified length and maximum.
It excludes the numbers that were returned the previous time it was called.  
(This means that a user won't be presented with the same photo two times in a row.)

ImageItem.js and ReportItem.js each take a single instance of the product class and then return, respectively,
a dom rendering of the image and the report row.

index.js and results.js each create an instance of App and call the appropriate function(s).

Two constants at the top of App.js hold parameters that can be quickly changed as desired. 
They are currently set as:

        this.productsToShow = 3;  // the number of products displayed at one time for the user to choose from
        this.maxClicks = 10; // the maximum number of decisions a user is asked to make in one session

To do:  Retain number of total clicks even when index.html is closed.
