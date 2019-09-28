var add = function (x, y) {
    // 如果參數不是數字的話，回傳 error
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'pass in numbers';
    }

    return x + y;
}

console.log(add(3, 3)); // logs 6
console.log(add('2', '2')); // logs 'pass in numbers'