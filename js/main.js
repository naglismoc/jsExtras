let arr = [1, 5, 3, [4, 8, "j", 10, [14, 20, [3, 3, 3], 8]], 20, 40, 3, 6];
console.log(arr);
console.log(rec(arr));

let btn = document.getElementById("button");
btn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let output = document.getElementById("output");
    console.log("someone touched me!");
    console.log(" it was " + name + " " + surname);
    output.innerText = " it was " + name + " " + surname;
    clearInterval(myInterval);
});

let btn2 = document.getElementById("button2");
btn2.addEventListener("click", function () {
    const myInterval = setInterval(rndSqs, 250);
});

let squares = document.getElementById("squares");

let colors = ['red', 'green', 'blue'];
const myInterval = setInterval(rndSqs, 250);

function rndSqs() {
    let rnd = Math.floor(Math.random() * 3);
    squares.innerHTML += '<div class="sq ' + colors[rnd] + '" ></div>';
}












function rec(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += arr[i];
            console.log(arr[i]);
        } else {
            if (Array.isArray(arr[i])) {
                sum += rec(arr[i]);
            }
        }
    }
    return sum;
}