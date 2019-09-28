var Foo = function Foo() { };

Foo.prototype = { x: 1 }; // 以下的 log 都是一樣的

var FooInstance = new Foo();

console.log(FooInstance.x);
// logs 1

Foo.prototype.x = 2;

console.log(FooInstance.x);
// logs 2，FooInstance 已被更新