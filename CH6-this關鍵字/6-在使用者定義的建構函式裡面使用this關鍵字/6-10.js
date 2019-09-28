var Person = function (name) {
    this.name = name || 'john doe'; // this 將會參考被建立的實例
};

var cody = new Person('Cody Lindley'); // 基於 Person 建構式建立一個實例

console.log(cody.name);
// logs 'Cody Lindley'