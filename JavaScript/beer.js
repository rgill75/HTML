function bottlesSong(num) {
    var bottles = "bottle";
    var count = num;
    if (count > 1) {
        bottles += "s";
    }
    while (count > 0) {
        var bottleCount = bottles;
        console.log(count + " "  + bottles + " of beer on the wall; " + count + " "  + bottles + " of beer.");
        count--;
        if (count === 1) {
            bottleCount = "bottle";
        }
        if (count > 0) {
            console.log("Take one down, pass it around; " + count + " "  + bottleCount + " of beer on the wall.");
            console.log("");
        }
    }

    if (num > 0) {
        console.log("Take one down, pass it around; no more bottles of beer on the wall.");
        console.log("");
        console.log("No more bottles of beer on the wall, no bottles of beer.");
        console.log("Go to the store, buy some more; " + num + " " + bottles + " of beer on the wall.");
    }
}

var num = 0;
var bottles = "bottle";
bottlesSong(num);
