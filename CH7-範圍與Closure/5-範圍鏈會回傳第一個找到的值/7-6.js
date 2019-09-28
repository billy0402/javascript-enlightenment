var x = false;
var foo = function () {
    var x = false;
    bar = function () {
        var x = true;
        console.log(x); // 區域 x 是範圍的第一個，因此它遮蓋了其他的 xÏ
    }();
};

foo();
// logs true