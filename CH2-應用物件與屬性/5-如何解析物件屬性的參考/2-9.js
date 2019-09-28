var myArray = [];

console.log(myArray.foo);
// logs undefined

/* 
 * JS 會在 Array.prototype 尋找 Array.prototype.foo，但找不到。
 * 接著它會在 Object.prototype 尋找，也找不到。
 * 所以回傳 undefined！
 */