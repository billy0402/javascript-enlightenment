var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    };
};

var cody = new Person(true, 33, 'male');
console.log(cody);
// logs Object {living=true, age=33, gender="male", ...}

var lisa = new Person(true, 34, 'female');
console.log(lisa);
// logs Object {living=true, age=34, gender="female", ...}