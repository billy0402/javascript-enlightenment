var Person = function () { };

// 所有 Person 實例都繼承 legs.arms 與 countLimbs 屬性
Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function () {
    return this.legs + this.arms;
};

var chuck = new Person();

console.log(chuck.countLimbs());
// logs 4