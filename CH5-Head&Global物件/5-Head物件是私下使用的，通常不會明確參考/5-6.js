var foo = { // 在這裡 window 是隱式的，window.foo
    fooMethod: function () {
        alert('foo' + 'bar'); // 在這裡 window 是隱式的，window.alert()
        window.alert('foo' + 'bar'); // 明確使用 window，具有相同的效果
    }
}
foo.fooMethod(); // 在這裡 window 是隱式的，window.foo.fooMethod()