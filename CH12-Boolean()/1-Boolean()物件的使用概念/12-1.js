// 使用 new 關鍵字與 Boolean() 建構式來建立布林物件
var myBoolean1 = new Boolean(false); // 使用 new 關鍵字
console.log(myBoolean1); // logs Boolean {false}
console.log(typeof myBoolean1); // logs 'object'

// 使用數字建構式，不使用 new，直接以字面值/原始值的方式建立布林
var myBoolean2 = Boolean(0); // 不使用 new 關鍵字
console.log(myBoolean2); // logs false
console.log(typeof myBoolean2); // logs 'boolean'

// 以字面值/原始值建立布林 (建構式在幕後使用)
var myBoolean3 = false;
console.log(myBoolean3); // logs false
console.log(typeof myBoolean3); // logs 'boolean'