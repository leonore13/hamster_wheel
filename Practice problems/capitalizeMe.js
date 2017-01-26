// A function that takes in a string of words, and returns the string but with every first letter of each word capitalized
function capitalizeMe (example) {

	let newString = "";

	for (let i = 0; i < example.length; i++) {
		// If I'm a space, print a space in my place
		if (example.charAt(i) == " ") {
			newString = newString.concat(" ");
		}
		// If I'm not a space and the character before me is a space, or if I'm the first letter of the string,
		// then I'm the first character of a word. Therefore capitalize me!
		else if ((example.charAt(i) != " ") && ((example.charAt(i-1)) == " ") || (i == 0)) {
			let k = example.charAt(i).toUpperCase();
			newString = newString.concat(k);
		}
		// I'm just a regular letter that doesn't need to be cap'd and just concat'd
		else {
			newString = newString.concat(example.charAt(i));
		}
	}
	return newString;
}


console.log(capitalizeMe("agr ebw s a"));
console.log(capitalizeMe(" a gr ebw s a"));
console.log(capitalizeMe("  a gr ebw s a"));
console.log(capitalizeMe("    a gr ebw s a"));
console.log(capitalizeMe(" agr ebw s a "));
console.log(capitalizeMe(" agr ebw s a   aer "));



