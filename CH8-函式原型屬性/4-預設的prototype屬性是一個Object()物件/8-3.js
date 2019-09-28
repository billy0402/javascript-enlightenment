var myFunction = function () { };

myFunction.prototype = new Object(); // 添加原型屬性並將它設成一個空物件

console.log(myFunction.prototype);
// logs 空物件