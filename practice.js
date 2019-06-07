
// console.log("Hello from exercises");

const array1 = [3,1];

function orderArray (array1) {
	// console.log("Hello from in function");

	if (array1[1]<array1[0]) {
		[array1[0], array1[1]] = [array1[1], array1[0]];
		return array1;
	} else {
		return array1;
	}

}

console.log("Should Be: 1, 3:", orderArray(array1));
console.log("Should Be: 1, 5:", orderArray([1, 5]));
console.log("Should Be: 10, 20:", orderArray([20, 10]));