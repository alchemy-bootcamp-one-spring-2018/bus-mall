#Assets for BUSMALL Lab

data.js holds the Product constructor and the array of Product elements.  It exports only the array itself.
The data class does not have ANY methods.  

getRandomNumberSet.js exports a single function to create array of random numbers of any specified length and maximum.

ImageItem.js and ReportItem.js each take a single instance of the product class and then render, respectively,
the image and the report row.

main.js creates an instance of App and calls the first function.

Two constants at the top of App.js hold parameters that can be quickly changed as desired. 
They are currently set as:

        this.productsToShow = 3;
        this.maxClicks = 10;


To do:
It's separated into components, and only App has direct access to the data.
But I didn't figure out how to have App send a function that the child classes respond to.