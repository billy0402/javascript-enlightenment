// 產生原始值
var myNull = null;
var myUndefined = undefined;
var primitiveString1 = 'foo';
var primitiveString2 = String('foo'); // 不使用 new，所以我們會得到原始值
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10'); // 不使用 new，所以我們會得到原始值
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true'); // 不使用 new，所以我們會得到原始值

/* 存取 toString() 屬性方法 (由 object.prototype 繼承而來) 來展示原始值被當物件使用時，它會被轉換成物件 */

console.log(primitiveString1.toString(), primitiveString2.toString());
//logs "foo" "foo"

console.log(primitiveNumber1.toString(), primitiveNumber2.toString());
// logs "10" "10"

console.log(primitiveBoolean1.toString(), primitiveBoolean2.toString());
// logs "true" "true"

/* 因為 null 與 undefined 不會轉換成物件，而且沒有建構式，所以這裡會丟出一個錯誤訊息，firebug lite 無法顯示 */
console.log(myNull.toString());
console.log(myUndefined.toString());