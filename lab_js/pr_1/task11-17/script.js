// task 11
const obj = {js: 'test', jq: 'hello', css: 'world'};
console.log(`task 11: ${Object.keys(obj)}`);

// task 12
let str12 = 'aaa@bbb@ccc';
console.log(`task 12: ${str12.replace(/@/g,'!')}`);

// task 13
let str13 = '2025-12-31';
console.log(`task 13: ${str13.replace(/-/g,' / ')}`);

// task 14
let str14 = 'я вчу javascript!';
let arrSplit = str14.split('');
console.log(`task 14: ${arrSplit}`);

// task 15
let arr15 = [];
for (let i = 1; i <= 5; i++) {
    arr15.push('x'.repeat(i));
}
console.log(`task 15: ${arr15}`);

// task 16
function arrayFill(value, length) {
    const resultArray = [];
    for (let i = 0; i < length; i++) {
      resultArray.push(value);
    } 
    return resultArray;
}  

const arr16 = arrayFill('x', 5);  
console.log(`task 16: ${arr16}`);

// task 17
function calculateTotalSum(arr) {
    let totalSum = 0;
    for (const element of arr) {
      if (Array.isArray(element)) {
        totalSum += calculateTotalSum(element);
      } 
      else {
        totalSum += element;
      }
    }
  
    return totalSum;
}
  
const arr17 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const totalSum = calculateTotalSum(arr17);
console.log(`task 17: Sum = ${totalSum}`);
