var myArray = new Array();

// 在 myArray.foo 或 Array.prototype.foo 或 Object.prototype.foo 找不到 foo，所以它是 undefined
console.log(myArray.foo);
// logs undefined