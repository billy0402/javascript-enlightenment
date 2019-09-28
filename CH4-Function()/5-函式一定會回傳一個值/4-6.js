var yelp = function () {
    console.log('I am yelping!');
    // 函式會回傳 undefined，就算我們沒有這樣做
}

console.log(yelp() === undefined);
// logs true，因為它一定會回傳值，就算我們沒有明確的回傳