var myObject1 = {
    name: 'myObject1',
    myMethod: function () {
        console.log(this.name);
    }
};

myObject1.myMethod();
// logs 'myObject1'

var myObject2 = function () {
    console.log(this);
};

myObject2();
// logs Window