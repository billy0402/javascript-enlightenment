// 市面上最常見、最常使用的
(function (msg) {
    console.log(msg);
})('Hi');

// 稍微不同，但結果相同
(function (msg) {
    console.log(msg)
}('Hi'));

// 最簡短方案
!function sayHi(msg) {
    console.log(msg);
}('Hi');

/*
 * // 僅作參考，它無法運作！
 * function sayHi() {
 *     console.log('hi');
 * } ();
 */