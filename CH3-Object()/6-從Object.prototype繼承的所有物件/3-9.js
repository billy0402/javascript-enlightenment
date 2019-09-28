Object.prototype.foo = 'foo';

var myString = 'empty string';

console.log(myString.foo);
// logs 'foo'，它會經由原型鏈，在 Object.prototype.foo 找到