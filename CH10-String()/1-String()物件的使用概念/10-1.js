// 使用 new 關鍵字與 String() 建構式來建立字串物件
var stringObject = new String('foo');
console.log(stringObject); // logs foo {0 = 'f', 1 = 'o', 2 = 'o'}
console.log(typeof stringObject); // logs 'object'

// 直接使用 String 建構式來使用字面值/原始值建立字串
var stringObjectWithOutNewKeyword = String('foo'); // 不使用 new 關鍵字
console.log(stringObjectWithOutNewKeyword); // logs 'foo'
console.log(typeof stringObjectWithOutNewKeyword); // logs 'string'

// 以字面值/原始值建立字串 (建構式在幕後使用)
var stringLiteral = 'foo';
console.log(stringLiteral); // logs foo
console.log(typeof stringLiteral); // logs 'string'