// 函式可以被傳送到函式，也可以被函式回傳
var foo = function (f) {
    return f;
}

var bar = foo(function () {
    console.log('Hi');
});

bar();
//logs 'Hi'