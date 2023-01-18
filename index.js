let min = 1;
let max = 100;
let guess = 0;
let sayi = Math.round(Math.random() * 100) + 1;
counter = 0;

document.getElementById("tahmin-btn").addEventListener("click", function () {
    guess = document.getElementById("tahmin-input").value;

    if (guess === "" || guess < min || guess > max) {
        document.getElementById("result").innerHTML = "HATA!";
        document.getElementById("tahmin-input").value = "";
    } else {
    if (guess < sayi) {
        document.getElementById("result").innerHTML = "";
        counter++;
        min = guess;
        document.getElementById("result").innerHTML = `Enter a number between ${min} and ${max}. number of attempts: ${counter}`;
        document.getElementById("result").style.color = "red";
        document.getElementById("tahmin-input").value = "";
    } else if (guess > sayi) {
        counter++;
        max = guess;
        document.getElementById("result").innerHTML = `Enter a number between ${min} and ${max} . number of attempts: ${counter}`;
        document.getElementById("result").style.color = "red";
        document.getElementById("tahmin-input").value = "";
    } else {
        document.getElementById("result").innerHTML = "DOĞRU TAHMİN, TEBRİKLER🎉";
        document.getElementById("result").style.color = "green";
        document.getElementById("tahmin-input").value = "";
    }}
});

document.getElementById("tahmin-input").addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        document.getElementById("tahmin-btn").click();
    }
});
