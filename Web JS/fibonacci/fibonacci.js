var first = 0;
var second = 1;
var a = 1;

function fibonacci(x) {
	while (a <= x) {
		console.log(a);
		first = second;
		second = a;
		a = first + second;
	}
}

var arr = [5, 4, 3, 2, 1];

function sort(arr) {
	for (i = 0; i < arr.length; i++) {
		for (j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

function printArr(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

sort(arr);
printArr(arr);

//fibonacci(21);