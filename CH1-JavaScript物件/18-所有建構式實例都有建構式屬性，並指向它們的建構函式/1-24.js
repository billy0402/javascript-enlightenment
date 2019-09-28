var foo = {};

console.log(foo.constructor === Object)
// logs true，因為 Object() 建構 foo
console.log(foo.constructor)
// 指向 Object() 建構函式