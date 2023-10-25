/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	///Your code Starts here 
	
	delete obj[key];
	if (obj[key] === undefined) {
		return true;
	} else {
		return false;
	}
	
	
	///Your code Ends here
}

removeProperty(obj, "mykey");
/*
Lines For TestCase

obj.mykey === undefined;
*/