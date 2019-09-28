var myObject = { '123': 'zero', 'class': 'foo' };

console.log(myObject['123'], myObject['class']);
// logs 'zero foo'

// 我們來看看句點標記法的做法！注意，在 JavaScript 中，'class' 是關鍵字
// 它無法做到括號標記法可以處理的事情，事實上它會產生錯誤
// console.log(myObject.0, myObject.class);