
document.addEventListener('DOMContentLoaded', function () {
    calculateBMI();
});
function calculateBMI() {
    var weight = parseFloat(document.querySelector(".weight").innerHTML);
    var height = parseFloat(document.querySelector(".height").innerHTML);
    var heightInMeters = height / 3.28;
    var bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(2);
    var resultElement = document.querySelector(".bmiNumber");
    resultElement.innerHTML = bmi;
    var nature = document.querySelector("#nature");
    if (bmi < 18.5) {
        nature.innerHTML = "Under Weight";
        document.querySelector(".bmiNumber").style.color = "yellow";
        nature.style.color = "yellow"
    }
    else if (bmi >= 18.5 && bmi < 25) {
        nature.innerHTML = "Normal";
        document.querySelector(".bmiNumber").style.color = "green";
        nature.style.color = "green"
    }
    else if (bmi >= 25 && bmi < 40) {
        nature.innerHTML = "Over Weight";
        document.querySelector(".bmiNumber").style.color = "rgb(212, 145, 21)";
        nature.style.color = "rgb(212, 145, 21)";
    }
    else {
        nature.innerHTML = "Obese";
        document.querySelector(".bmiNumber").style.color = "red";
        nature.style.color = "red"
    }

}

