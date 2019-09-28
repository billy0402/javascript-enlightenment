var myArray = new Array();
myArray[50] = 'blue';
console.log(myArray.length);
// logs 51 (0 也被算進來)，因為 JS 在 "blue" 之前建立了 0 至 50 的值 (undefined)