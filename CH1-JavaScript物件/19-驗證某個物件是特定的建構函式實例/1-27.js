// 使用者定義的物件建構式
var CustomConstructor = function () { this.foo = 'bar'; };

// 初始化一個 CustomConstructor 的實例
var instanceOfCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject instanceof CustomConstructor);
// logs true

// 與原始物件一樣的方式
var instanceOfArray = new Array('foo');

console.log(instanceOfArray instanceof Array);
// logs true