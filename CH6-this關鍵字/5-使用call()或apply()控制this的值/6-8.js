var myObject = {};

var myFunction = function (param1, param2) {
    // 當函式被呼叫時，透過 call() 將 'this' 指向 myObject
    this.foo = param1;
    this.bar = param2;
    console.log(this);
    // logs Object {foo = 'foo', bar = 'bar'}
};

myFunction.call(myObject, 'foo', 'bar'); // 呼叫函式，將 this 值設為 myObject

console.log(myObject);
// logs Object {foo = 'foo', bar = 'bar'}