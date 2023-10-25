/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	
	if (isNaN(num)) {
		return -1;
	} else if (num % 1 != 0) {
		return -1;
	} else {
		return -(num);
	}
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/