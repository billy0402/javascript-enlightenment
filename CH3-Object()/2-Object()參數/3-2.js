// 建立一個沒有屬性的空物件
var cody1 = new Object();
var cody2 = new Object(undefined);
var cody3 = new Object(null);

console.log(typeof cody1, typeof cody2, typeof cody3);
// logs 'object object object'