var Person = function (x) {
    if (x) {
        this.fullName = x;
    };
};

Person.prototype.whatIsMyFullName = function () {
    return this.fullName; // 'this' 參考 Person() 建立的實例
}

var cody = new Person('cody lindley');
var lisa = new Person('lisa lindley');

// 呼叫繼承來的 whatIsMyFullName 方法，它會使用 this 來參考實例
console.log(cody.whatIsMyFullName(), lisa.whatIsMyFullName());

/* 
 * 原型鏈仍然有效，
 * 所以如果實例沒有 fullName 屬性的話，JavaScript 會在原型鏈中尋找它。
 * instance.prototype.fullName >> Person.prototype.fullName >> Object.prototype.fullName
 * 接下來，我們會在 Person 原型與 Object 原型中加入一個 fullName 屬性。
 */

Object.prototype.fullName = 'John Doe';

var john = new Person(); // 沒有傳遞引數，所以 fullName 沒被加至實例

console.log(john.whatIsMyFullName());
// logs 'John Doe'