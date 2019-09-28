var parentFunction = function () {
    var foo = 'foo';

    // 回傳匿名函式
    return function () {
        console.log(foo);
        // logs 'foo'
    };
};

// nestedFunction 參考 parentFunction 回傳的嵌套函式
var nestedFunction = parentFunction();

nestedFunction();
// logs 'foo'，因為回傳的函式會透過範圍鏈來存取 foo