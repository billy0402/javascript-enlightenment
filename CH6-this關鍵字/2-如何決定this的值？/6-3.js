var foo = 'foo';
var myObject = { foo: 'I am myObject.foo.' }

var sayFoo = function () {
    console.log(this['foo']);
};

// 指派 sayFoo 屬性給 myObject，並且將它指向 sayFoo 函式
myObject.sayFoo = sayFoo;

myObject.sayFoo(); // logs 'I am myObject.foo.'
sayFoo(); // logs 'foo'