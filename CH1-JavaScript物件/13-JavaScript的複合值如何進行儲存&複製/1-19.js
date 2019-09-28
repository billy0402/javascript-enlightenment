var myObject = {};

var copyOfMyObject = myObject; // 不是複製值，而是複製參考

myObject.foo = 'bar'; // 操作 myObject 所保存的值

/* 如果我們現在 log myObject 與 copyOfMyObject 的話，它們將會有一個 foo 屬性，因為它們參考同一個物件 */

console.log(myObject, copyOfMyObject);
// logs Object '{ foo="bar"} Object { foo="bar"}'