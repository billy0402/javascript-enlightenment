// 傳至 Boolean() 的參數 = 0 = false，因此 foo = false
var foo = new Boolean(0);
console.log(foo);
// logs false

// 傳至 Boolean() 的參數 = Math = true，因此 bar = true
var bar = new Boolean(Math);
console.log(bar);
// logs true