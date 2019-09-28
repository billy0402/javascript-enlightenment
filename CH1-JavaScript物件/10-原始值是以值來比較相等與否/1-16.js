var price1 = 10;
var price2 = 10;
var price3 = new Number('10'); // 因為使用 new，所以它是一個複合數字物件
var price4 = price3;

console.log(price1 === price2);
// logs true

console.log(price1 === price3);
// logs false，因為 price3 儲存一個複合數字物件，但 price1 是一個原始值

console.log(price4 === price3);
// logs true，因為複合值是以參考來比對，而不是值

// 如果我們更改 price4 變數，讓它存有一個原始值的話將會如何？
price4 = 10;

console.log(price4 === price3);
// logs false，現在 price4 是原始值，而不是複合值