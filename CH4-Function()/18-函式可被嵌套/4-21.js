var foo = function () {
    var bar = function () {
        var goo = function () {
            console.log(this);
            // logs head window 物件的參考
        }();
    }();
}();