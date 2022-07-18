function fibonacciGenerator(n) {
    var array = [];
    if (n > 0) {
        array.push(0);
        if (n > 1) {
            array.push(1);
        }
    }
    for (var i = 2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}

var n = 1;
var output = fibonacciGenerator(n);
console.log(output);
