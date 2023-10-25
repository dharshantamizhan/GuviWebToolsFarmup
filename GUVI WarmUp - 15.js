/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	if (word1 == undefined) {
		return -1;
	} else if (word1 == "") {
		return 0;
	} else if (!isNaN(word1)) {
		return -1;
	} else {
		return word1.length;
	}
	
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/