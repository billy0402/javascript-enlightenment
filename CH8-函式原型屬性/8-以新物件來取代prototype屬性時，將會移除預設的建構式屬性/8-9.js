var Foo = function Foo() { };

Foo.prototype = { constructor: Foo };

var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo);
// logs true
console.log(FooInstance.constructor);
// logs Foo()