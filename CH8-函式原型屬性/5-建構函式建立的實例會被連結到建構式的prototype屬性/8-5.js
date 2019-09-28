Array.prototype.foo = 'foo'; // 現在所有的 Array() 實例都繼承一個 foo 屬性
var myArray = new Array();

// 使用 *.constructor.prototype 以較繁瑣的方式來追蹤 foo
console.log(myArray.constructor.prototype.foo);
// logs foo

// 當然也可以使用鏈結
// 使用原型鏈，在 Array.prototype.foo 尋找屬性
console.log(myArray.foo);
// logs foo