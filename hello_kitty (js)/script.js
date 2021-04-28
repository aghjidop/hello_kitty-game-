const kitty = document.getElementById("kitty");
const kaktus = document.getElementById("kaktus");
let display = document.getElementById("result");
let result = 0;

document.addEventListener("keydown", function (e) {
    jump();
});

function jump() {
    if (kitty.classList != "jump") {
        kitty.classList.add("jump");
    }
    setTimeout(function () {
        kitty.classList.remove("jump");
    }, 1200);
    result++;
    display.value = result;
}

let isAlive = setInterval(function () {
    let kittyTop = parseInt(
        window.getComputedStyle(kitty).getPropertyValue("top")
    );
    let kaktusLeft = parseInt(
        window.getComputedStyle(kaktus).getPropertyValue("left")
    );

    if (kaktusLeft < 50 && kaktusLeft > 0 && kittyTop >= 140) {
        alert("уууууууупс!!!!!! твой результат: " + result + "!");
        result = 0;
    }
}, 10);
