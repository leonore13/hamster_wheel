// A function that takes in a string of words, and returns the string but with every first letter of each word capitalized
function capitalizeMe (example) {
    return example.split(' ')
	    .map((word) => word.length ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
	    .join(' ');
}

console.log(capitalizeMe("agr ebw s a"));
console.log(capitalizeMe(" a gr ebw s a"));
console.log(capitalizeMe("  a gr ebw s a"));
console.log(capitalizeMe("    a gr ebw s a"));
console.log(capitalizeMe(" agr ebw s a "));
console.log(capitalizeMe(" agr ebw s a   aer "));



