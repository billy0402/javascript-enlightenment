var x = 10;
var foo = function () {
    var y = 20;
    var bar = function () {
        var z = 30;
        console.log(z + y + x); // z 是區域的，y 與 x 則是在範圍鏈找到
    }();
};

foo();
// logs 60