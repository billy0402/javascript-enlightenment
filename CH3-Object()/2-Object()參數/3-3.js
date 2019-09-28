/* 使用 Object() 建構式來建立一個字串.數字.陣列.函式.布林與 regex 物件 */

// 接下來透過 log 來確認物件建立
console.log(new Object('foo'));
console.log(new Object(1));
console.log(new Object([]));
console.log(new Object(function () { }));
console.log(new Object(true));
console.log(new Object(/\bt[a-z]+\b/));

/* 這裡並未真正以 Object() 建構式來建立字串.數字.陣列.函式.布林與 regex 物件實例，只是用來說明我們可以做到這一點 */