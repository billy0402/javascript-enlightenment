var myObject = {
    func1: function () {
        console.log(this);
        // logs myObject
        var func2 = function () {
            console.log(this);
            // logs window，從此時開始都會如此
            var func3 = function () {
                console.log(this);
                // logs window，因為它是 head 物件
            }();
        }();
    }
}

myObject.func1();