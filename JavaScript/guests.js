var guestList = ["Angela", "Bill", "Craig", "David", "Erik", "Fred", "Robert", "Theia"];
var name = prompt("What is your name?");
if (guestList.includes(name)) {
    alert("Welcome " + name + "!");
} else {
    alert("Sorry " + name + ". Maybe next time.")
}
