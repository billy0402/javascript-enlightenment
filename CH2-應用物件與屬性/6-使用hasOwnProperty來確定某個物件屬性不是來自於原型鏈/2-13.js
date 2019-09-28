var myObject = { foo: 'value' };

console.log(myObject.hasOwnProperty('foo'));
// logs true

// vs. 一個來自原型鏈的屬性
console.log(myObject.hasOwnProperty('toString'));
// logs false