Object.prototype.foo = 'object-foo';
Array.prototype.foo = 'array-foo';
var myArray = new Array();

console.log(myArray.foo);
// logs 'array-foo'，在 Array.prototype.foo 找到

myArray.foo = 'bar';

console.log(myArray.foo);
// logs 'bar'，在 Array.foo 找到