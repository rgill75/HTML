function fizzBuzz() {
    var output = [];
    var num = 1;
    while (num <= 100) {
        var message = "";
        if (0 === num % 3) {
            message += "Fizz";
        }
        if (0 === num % 5) {
            message += "Buzz";
        }
        if (message) {
            output.push(message);
        } else {
            output.push(num);
        }
        num++;
    }

    console.log(output);
}

fizzBuzz();