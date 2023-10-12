// task 1
let arr1_1 = ['a','b','c'];
let arr1_2 = [1,2,3];
let arrBoth = arr1_1.concat(arr1_2);
console.log(`task 1: ${arrBoth}`);

// task 2
let arr2 = ['a','b','c'];
let arrResult = arr2.concat(1,2,3);
console.log(`task 2: ${arrResult}`);

// task 3
let arr3 = [1,2,3];
arr3.reverse();
console.log(`task 3: ${arr3}`);

// task 4
let arr4 = ['js','css','jq'];
console.log(`task 4: ${arr4[arr4.length - 1]}`);

// task 5
let arr5 = [1,2,3,4,5];
let arrSlice = arr5.slice(-2);
console.log(`task 5: ${arrSlice}`);

// task 6
let arr6 = [1,2,3,4,5];
arr6.splice(1,2);
console.log(`task 6: ${arr6}`);

// task 7
let arr7 = [1,2,3,4,5];
let arrSplice = arr7.splice(1,3);
console.log(`task 7: ${arrSplice}`);

// task 8
let arr8 = [1,2,3,4,5];
arr8.splice(1,2,'a','b','c');
console.log(`task 8: ${arr8}`);

// task 9
let arr9 = [1,2,3,4,5];
arr9.splice(1,0,'a','b');
arr9.splice(-1,0,'c');
arr9.splice(arr9.length, 0, 'e');
console.log(`task 9: ${arr9}`);

// task 10
let arr10 = [3,4,1,2,7];
arr10.sort()
console.log(`task 10: ${arr10}`);

