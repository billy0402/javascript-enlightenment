var objectFoo = { same: 'same' };
var objectBar = { same: 'same' };

console.log(objectFoo === objectBar);
// logs false，JS 不在乎它們是否相等或者屬於同樣的物件類型

// 複合物件如何判定相等與否
var objectA = { foo: 'bar' };
var objectB = objectA;

console.log(objectA === objectB);
// logs true，因為它們參考同一個物件