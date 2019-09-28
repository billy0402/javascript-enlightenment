var foo = {
    func1: function (bar) {
        bar(); // logs window，而不是 foo

        console.log(this); // 這裡的 this 關鍵字將會 foo 物件的參考     
    }
}

foo.func1(function () {
    console.log(this)
});