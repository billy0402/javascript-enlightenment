var foo = 1; // foo = 1

if (true) {
    foo = 2; // foo = 2
    for (var i = 3; i <= 5; i++) {
        foo = i; // foo = 3, 4, 5
        console.log(foo);
        // logs 3, 4, 5
    }
}