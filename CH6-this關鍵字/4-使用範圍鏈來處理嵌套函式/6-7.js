var myObject = {
    myProperty: 'I can see the light',
    myMethod: function () {
        var that = this; // 在 myMethod 範圍儲存一個 this 的參考 (即 myMethod)
        // 子函式
        var helperFunction = function () {
            // 透過範圍鏈 logs 'I can see the light'，因為 that = this
            console.log(that.myProperty); // logs 'I can see the light'
            console.log(this); // 如果我們不使用 "that"，logs window 物件
        }();
    }
}

myObject.myMethod(); // 呼叫 myMethod