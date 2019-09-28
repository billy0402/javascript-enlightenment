window.foo = 'foo';
window.myObject = { foo: 'I am myObject.foo' };

window.sayFoo = function () {
    console.log(this.foo);
};

window.myObject.sayFoo = window.sayFoo;

window.myObject.sayFoo(); // logs 'I am myObject.foo.'
window.sayFoo(); // logs 'foo'