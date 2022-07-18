var housekeeper1 = {
    name: "Elizabeth",
    age: 25,
    hasWorkPermit: true,
    previousExperience: ["Ramada", "Hilton", "Holiday Inn"],
    yearsExperience: 6
}

function Housekeeper(name, age, hasWorkPermit, previousExperience, yearsExperience) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.previousExperience = previousExperience;
    this.yearsExperience = yearsExperience;
    this.cleaning = function () {
        alert("Cleaning in progress with " + name + "!");
    }
}

