var falseValue = new Boolean(false);

console.log(falseValue); // 我們有一個 false 的布林物件，但物件為 true

// 布林物件是 true，就算 false 的布林物件也是如此
if (falseValue) {
    console.log('falseValue is truthy');
}