var myFunction = function () {
    // 現在 foo 已經位於 myFunction() 的範圍之內
    var foo = 'bar';
};

var myApp = function () {
    var run = function () {
        console.log(foo);
        // 現在 foo 是 undefined，不再位於全域範圍，因而出現錯誤
    }();
};

myApp();