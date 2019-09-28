// 函式建構式: 最後一個參數是函式邏輯，在它前面的部分是參數
var addConstructor = new Function('x', 'y', 'return x + y');

// 函式陳述式
function addStatement(x, y) {
    return x + y;
}

// 函式表達式
var addExpression = function (x, y) {
    return x + y;
};

// 函式具名表達式
var addNamedExpression = function addNamedExpression(x, y) {
    return x + y;
};

console.log(addConstructor(2, 2), addStatement(2, 2), addExpression(2, 2), addNamedExpression(2, 2));
// logs 4 4 4 4