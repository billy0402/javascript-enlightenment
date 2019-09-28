var Person = function (name) {
    this.name = name || 'john doe';
};

var cody = Person('Cody Lindley'); // 注意我們並未使用 'new'

// 未定義，實際上值被設為 window.name
// console.log(cody.name);

console.log(window.name);
// logs 'Cody Lindley'