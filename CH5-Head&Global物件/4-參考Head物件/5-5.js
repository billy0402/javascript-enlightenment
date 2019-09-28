var foo = 'bar';

var windowReference1 = window;
var windowReference2 = this;

console.log(windowReference1, windowReference2);
// logs 會參考 window 物件

console.log(windowReference1.foo, windowReference2.foo);
// logs 'bar', 'bar'