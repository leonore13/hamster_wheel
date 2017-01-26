// A function that takes in a string of words, and returns the string but with every first letter of each word capitalized
function capitalizeMe (example) {

	let newString = "";

	for (let i = 0; i < example.length; i++) {
		if (example.charAt(i) == " ") {
			newString = newString.concat(" ");
		}
		else if ((example.charAt(i) != " ") && ((example.charAt(i-1)) == " ") || (i == 0)) {
			let k = example.charAt(i).toUpperCase();
			newString = newString.concat(k);
		}
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



