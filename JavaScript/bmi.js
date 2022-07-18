//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {
    var bmi = Math.round(weight/(Math.pow(height, 2)));
    var message = "Your BMI is " + bmi;
    if (bmi < 18.5) {
        message += ", so you are underweight.";
    } else {
        if (bmi <= 24.9) {
            message += ", so you have a normal weight.";
        } else {
            message += ", so you are overweight.";
        }
    }

    return message;
}

var bmi = bmiCalculator(80, 2);
alert(bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
