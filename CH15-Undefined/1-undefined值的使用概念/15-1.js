var initializedVariable; // 宣告變數

// 未賦值
console.log(initializedVariable); // logs undefined
console.log(typeof initializedVariable); // logs undefined，確認 JavaScript 回傳 undefined

var foo = new Object();

// 未定義
console.log(foo.bar); // logs undefined，foo 物件沒有 bar 屬性
console.log(typeof foo.bar); // logs undefined，確認 JavaScript 回傳 undefined