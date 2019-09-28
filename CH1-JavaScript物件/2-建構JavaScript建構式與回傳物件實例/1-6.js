/* Person 是一個建構函式。在編寫它時，希望和 new 關鍵字一起使用。 */

var Person = function Person(living, age, gender) {
    // 以下的 "this" 是指建立出來的新物件 (亦即: this = new Object();)
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    };
    // 當你使用 new 關鍵字呼叫這個函式時，將會回傳 "this"，而不是 undefined
};

// 初始化一個名為 cody 的 Person 物件
var cody = new Person(true, 33, 'male');

// cody 是一個物件，也是一個 Person() 的實例
console.log(typeof cody);
// logs object
console.log(cody);
// logs cody 內部的屬性與值
console.log(cody.constructor);
// logs Person() 函式