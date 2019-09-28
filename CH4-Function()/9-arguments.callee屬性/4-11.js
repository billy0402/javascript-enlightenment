var foo = function foo() {
    console.log(arguments.callee);
    // logs foo()
    // 你可以使用 callee 來遞迴呼叫 foo 函式 (例如 arguments.callee())
}();