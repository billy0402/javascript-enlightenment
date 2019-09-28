// 使用陣列來封裝，建立多維陣列鏈
// 有一個空陣列位於一個空陣列裡面，後者又位於另一個空陣列裡面
var myArray = [[[]]];

// 以下範例使用函式來封裝: 有一個空陣列位於一個空陣列裡面，後者又位於另一個空陣列裡面
var myFunction = function () {
    // 空
    var myFunction = function () {
        // 空
        var myFunction = function () {
            // 空
        };
    };
};

// 我們也可以瘋狂混合
var foo = [{
    foo: [{
        bar: {
            say: function () {
                return 'hi';
            }
        }
    }]
}];
console.log(foo[0].foo[0].bar.say());
// logs 'hi'