// 定義 Person 建構函式，之後用來建立自訂的 Person() 物件
var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    };
};

// 初始化一個 Person 物件，並且將它儲存在 cody 變數
var cody = new Person(true, 33, 'male');

console.log(cody);

/* 
 * 以下 JavaScript 定義的 String() 建構函式具有同樣的行為。
 * 因為字串建構式是 JavaScript 本來就有的，
 * 如果我們想要取得字串實例，只要將它初始化即可。
 * 但無論我們使用原生的建構式，如 String()，
 * 或是使用者自訂的建構函式，如 Person()，
 * 它們的行為都是一樣的。
 */

// 初始化一個 String 物件，並且將它儲存在 myString 變數
var myString = new String('foo');

console.log(myString);