var myArray = ['blue', 'green', 'orange', 'red'];
console.log(myArray.length);
// logs 4

myArray.length = 99;
console.log(myArray.length);
// logs 99，不要忘記我們正在設定長度，而不是索引

myArray.length = 1; // 移除值，只保留一個，所以 index[1] 不見了！
console.log(myArray[1]);
// logs undefined

console.log(myArray);
// logs '["blue"]'