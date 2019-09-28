var Foo = function Foo() { };

Foo.prototype.x = 1;

var FooInstance = new Foo();

console.log(FooInstance.x);
// logs 1，如你所想的

// 現在將 prototype 物件換成/覆寫成新的 Object() 物件
Foo.prototype = { x: 2 };

console.log(FooInstance.x);
// logs 1，什麼？既然我們已經更新 prototype 了，它不是應該是 logs 2 嗎？
// FooInstance 仍然參考當它初始化時，prototype 物件的狀態

// 建立一個新的 Foo() 實例
var NewFooInstance = new Foo();

// 現在新的實例已被綁定到新的原型物件值 (即 { x: 2 };)
console.log(NewFooInstance.x);
// logs 2