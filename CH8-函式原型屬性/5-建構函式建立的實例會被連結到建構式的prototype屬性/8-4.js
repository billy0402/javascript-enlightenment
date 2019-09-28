// 這個程式只可以在支援 __proto__ 的瀏覽器 (Firefox 2+.Safari.Chrome.Android) 上動作

Array.prototype.foo = 'foo';
var myArray = new Array();

console.log(myArray.__proto__.foo);
// logs foo，因為 myArray.__proto__ = Array.prototype