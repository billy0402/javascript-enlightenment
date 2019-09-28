var sayHiText = 'howdy';

var func1 = function () {
    var func2 = function () {
        console.log(sayHiText); // func2 範圍，但它會在全域範圍中尋找 sayHiText
        // logs 'howdy'
    }();
}();