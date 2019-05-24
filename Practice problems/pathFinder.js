const subPathArray1 = [
['D', 'E'],
['E', 'F']
];
const subPathArray2 = [
['A', 'B'],
['C', 'D']
];
const subPathArray3 = [
['B', 'C'],
['A', 'B']
];

function myFunction(array) {
	if (array.length <= 1) {
    	return array;
    } else if (array.length == 2) {
    	if (array[0][1] == array[1][0]) {
        	return array[0] + ',' + array[1][1];
        } else if (array[1][1] == array[0][0]) {
       		return array[1] + ',' + array[0][1];
        } else {
        	return 'No path available.'
        }
    } else {
    	//recursive function here
    }

return array;
}
