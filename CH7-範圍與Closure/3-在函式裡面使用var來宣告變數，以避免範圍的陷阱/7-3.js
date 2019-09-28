var foo = function () {
    var boo = function () {
        bar = 2; // 沒有使用 var，所以 bar 在 window.bar 會被放在全域範圍
    }();
}();

console.log(bar);
// logs 2，因為 bar 是全域範圍

// 相較於...

var foo = function () {
    var boo = function () {
        var doo = 2;
    }();
}();

// console.log(doo);
// logs undefined，doo 位於 boo 函式範圍，不會產生錯誤