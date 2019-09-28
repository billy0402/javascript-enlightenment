var foo = 0; // 全域範圍
console.log(foo);
// logs 0

var myFunction = function () {
    var foo = 1; // 區域範圍

    console.log(foo);
    // logs 1

    var myNestedFunction = function () {
        var foo = 2; // 區域範圍

        console.log(foo);
        // logs 2
    }();
}();

eval('var foo = 3; console.log(foo);'); // eval() 範圍