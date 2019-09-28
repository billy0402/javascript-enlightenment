var foo = 'bar'; // foo 是一個全域物件，也是 head/window 物件的屬性

// 請記得，函式會產生範圍
var myApp = function () {
    var run = function () {
        console.log(foo);
        // logs bar，foo 的值是從 head 物件的範圍鏈得到的
    }();
};

myApp();