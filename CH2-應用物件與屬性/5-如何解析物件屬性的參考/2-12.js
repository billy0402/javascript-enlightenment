// myArray 與 Array.prototype 沒有 toLocaleString() 方法
var myArray = ['foo', 'bar'];

// 實際上 toLocaleString() 定義於 Object.prototype.toLocaleString 方法
console.log(myArray.toLocaleString());
//logs 'foo,bar'