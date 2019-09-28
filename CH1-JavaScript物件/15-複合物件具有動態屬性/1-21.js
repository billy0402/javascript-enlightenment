var objectA = { property: 'value' };
var pointer1 = objectA;
var pointer2 = pointer1;

// 更新 objectA.property，所有的參考 (pointer1 與 pointer2) 都會更新
objectA.property = null;

console.log(objectA.property, pointer1.property, pointer2.property);
// logs 'null null null'，因為objectA.pointer1 與 pointer2 都參考同一個物件