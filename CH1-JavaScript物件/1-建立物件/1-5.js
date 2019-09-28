// 使用 Object() 建構式來建立一個 codyA 物件
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function () {
    return codyA.gender;
};

console.log(codyA);
// logs Object {living=true, age=33, gender="male", ...}

/* 
 * 以下程式建立同樣的 cody 物件，
 * 但我們不使用原生的 Object() 建構式來建立一次性的 cody，
 * 而是先定義自己的建構式來建立 cody 物件(以及我們喜歡的任何其它 Person 物件)，
 * 並且使用 "new" 來將它初始化
 */

var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    };
};

var codyB = new Person(true, 33, 'male');

console.log(codyB);
// logs Object {living=true, age=33, gender="male", ...}