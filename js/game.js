let sqs = ['g1', 'g2', 'g3', 'g4'];
let colors = ['red', 'green', 'blue'];
let colorToChoose = colors[Math.floor(Math.random() * 3)];
let gameOver = false;
var timeLeft = 1000;
var elem = document.getElementById('countdown');

document.getElementById('h1').innerText = " Press " + colorToChoose + " Color!";

const myInterval = setInterval(rndSqs, 400);
const timerId = setInterval(countdown, 10);

setEventListeners();

function setEventListeners() {
    for (let i = 0; i < sqs.length; i++) {
        let g = document.getElementsByClassName(sqs[i])[0];
        g.addEventListener("click", function (elem) {
            if (gameOver) {
                return;
            }
            let gClasesStr = document.getElementsByClassName(sqs[i])[0].getAttribute("class");
            console.log(gClasesStr);
            if (gClasesStr.includes(colorToChoose)) {
                console.log("pataikei spalva!");
                let win = document.getElementById("win");
                win.innerText = (win.innerText * 1) + 1;
                setClass(i);
                if (Math.floor(Math.random() * 3) < 2) {
                    colorToChoose = colors[Math.floor(Math.random() * 3)];
                    document.getElementById('h1').innerText = " Press " + colorToChoose + " Color!";
                }
            } else {
                let loose = document.getElementById("loose");
                loose.innerText = (loose.innerText * 1) + 1;
            }
        });
    }
}

function rndSqs() {
    setClass();
}

function setClass(g) {
    let rndSq = Math.floor(Math.random() * 4);
    if (g < 4) {
        rndSq = g;
    }
    let rndClr = Math.floor(Math.random() * 3);

    for (let i = 0; i < colors.length; i++) {
        document.getElementsByClassName(sqs[rndSq])[0].classList.remove(colors[i]);
    }
    document.getElementsByClassName(sqs[rndSq])[0].classList.add(colors[rndClr]);
}

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        gameOver = true;
        clearInterval(myInterval);
        document.getElementById("result").innerText = "Surinkote " + (document.getElementById("win").innerText - document.getElementById("loose").innerText) + " Taškus!";
    } else {
        elem.innerHTML = (timeLeft / 100) + ' seconds remaining';
        timeLeft--;
    }
}
