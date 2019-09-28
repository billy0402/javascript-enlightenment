var Foo = function Foo() { };

Foo.prototype = new Object(); // 將 prototype 屬性改為一個空物件

var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo);
// logs false，我們已經移除參考
console.log(FooInstance.constructor);
// logs Object()，不是 Foo()

/* 比較未更改 prototype 值的程式 */

var Bar = function Bar() { };

var BarInstance = new Bar();

console.log(BarInstance.constructor === Bar);
// logs true
console.log(BarInstance.constructor);
// logs Bar()