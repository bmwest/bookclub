function logRange(start, end) {
	let numList = [];

  for (i = start; i <= end; i++) {
  	numList.push(i);
  }

  console.log(numList);
}

logRange(1, 10);
// [1,2,3,4,5,6,7,8,9,10]

function sumRange(start, end) {
	let numSum = 0;

  for (i = start; i <= end; i++) {
  	numSum += i;
  }

  console.log(numSum);
}

sumRange(1,10);
// 55

function stepRange(start, end, step = 1) {
	let stepNumList = [];

  for (i = start; step > 0 ? i <= end : i !== end; i += step) {
  	stepNumList.push(i);
  }

 	step < 0 ? stepNumList.push(end) : "";
  console.log(stepNumList);
}

stepRange(1, 10, 2);
// [1, 3, 5, 7, 9]
stepRange(5, 2, -1);
// [5, 4, 3, 2]


function reverseArray(array) {
	let reversed = [];
  let index = array.length;

	for (i = 0; i <= array.length; i++ ) {
    index --;
  	reversed.push(array[index]);
  }

	console.log(reversed);
}

reverseArray([4, 3, 2, 1]);
// [1, 2, 3, 4]

function reverseArrayInPlace(array) {
	reverseArray(array);
}

reverseArrayInPlace([4, 3, 2, 1])
// [1, 2, 3, 4]

function deepEqual(ting1, ting2) {
	if (ting1 === ting2) {
  	console.log(true);
  } else {
  	console.log(false);
  }
}

deepEqual(10, 10);
// true

deepEqual(reverseArrayInPlace([4, 3, 2, 1]), reverseArray([4, 3, 2, 1]));
// true

deepEqual(reverseArray([4, 3, 2, 1]), [4, 3, 2, 1].reverse());
// false
