// 範例 1
var speak = function () {
    sayYo(); // sayYo() 尚未定義，但仍然可以呼叫

    function sayYo() {
        console.log('Yo');
    }
}(); // 呼叫

// 範例 2
console.log(sum(2, 2)); // 呼叫 sum()，但它尚未定義，但仍然可以呼叫

function sum(x, y) {
    return x + y;
}