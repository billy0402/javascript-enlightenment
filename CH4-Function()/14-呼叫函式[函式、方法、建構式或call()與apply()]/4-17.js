// 函式模式
var myFunction = function () {
    return 'foo'
};
console.log(myFunction());
// log 'foo'

// 方法模式
var myObject = {
    myFunction: function () {
        return 'bar';
    }
}
console.log(myObject.myFunction());
// log 'bar'

// 建構式模式
var Cody = function () {
    this.living = true;
    this.age = 33;
    this.gender = 'male';
    this.getGender = function () {
        return this.gender;
    };
}
var cody = new Cody(); // 透過 Cody 建構式呼叫
console.log(cody);
// logs cody 物件與屬性

// apply() 與 call() 模式
var greet = {
    runGreet: function () {
        console.log(this.name, arguments[0], arguments[1]);
    }
}

var cody = { name: 'cody' };
var lisa = { name: 'lisa' };

// 呼叫 runGreet 函式，如同它位於 cody 物件之內
greet.runGreet.call(cody, 'foo', 'bar');
//logs cody

// 呼叫 runGreet 函式，如同它位於 lisa 物件之內
greet.runGreet.apply(lisa, ['foo', 'bar']);
//logs lisa

/* 注意，call() 與 apply() 的差別在於將參數送到函式的方式 */