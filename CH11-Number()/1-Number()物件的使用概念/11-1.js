// 使用 new 關鍵字與 Number() 建構式來建立數值物件
var numberObject = new Number(1);
console.log(numberObject); // logs 1
console.log(typeof numberObject) // logs 'object'

// 直接使用 Number 建構式，不是以字面值/原始值的方式來建立數值
var numberObjectWithOutNew = Number(1); // 不使用 new 關鍵字
console.log(numberObjectWithOutNew); // logs 1
console.log(typeof numberObjectWithOutNew) // logs 'number'

// 以字面值/原始值建立數值 (建構式在幕後使用)
var numberLiteral = 1;
console.log(numberLiteral); // logs 1
console.log(typeof numberLiteral); // logs 'number'