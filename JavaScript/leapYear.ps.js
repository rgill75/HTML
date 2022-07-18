function isLeapYear(year) {
    var yes = true;
    if (year % 4) {
        yes = false;
    }

    if (0 === (year % 100)) {
        if (year % 400) {
            yes = false;
        }
    }

    if (yes) {
        return "Leap year."
    }
    
    return "Not leap year.";
}

var Y = 2100;
alert(Y + ": " + isLeapYear(Y));
