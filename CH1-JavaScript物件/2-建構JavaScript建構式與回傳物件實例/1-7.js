// 初始化一個名為 myArray 的 Array 物件
// myArray 是 Array 的實例
var myArray = new Array();

// myArray 是一個物件，也是一個 Array() 建構式的實例
console.log(typeof myArray);
// logs 物件！什麼？ 是的，陣列是物件類型之一

console.log(myArray);
// logs [ ]

console.log(myArray.constructor);
// logs Array()