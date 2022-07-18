function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var len = names.length;
    var payer = Math.floor(len * Math.random());
    message = names[payer] + " is going to buy lunch today!";
    return message;
/******Don't change the code below*******/    
}

var guestList = ["Angela", "Bill", "Craig", "David", "Erik", "Fred", "Robert", "Theia"];
console.log(whosPaying(guestList));
