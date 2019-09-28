var myObject = {};

var myFunction = function (param1, param2) {
    // 透過 apply() 設定，當函式被呼叫時，this 會指向 myObject
    this.foo = param1;
    this.bar = param2;
    console.log(this);
    // logs Object {foo = 'foo', bar = 'bar'}
};

myFunction.apply(myObject, ['foo', 'bar']); // 呼叫函式，將 this 值設為 myObject

console.log(myObject);
// logs Object {foo = 'foo', bar = 'bar'}