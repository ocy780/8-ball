// JavaScript Code
let positive1 = "YES!";
let negative1 = "NO!";
let positive2 = "It is decidedly so.";
let positive3 = "Without a doubt.";
let positive4 = "You may rely on it.";
let positive5 = "Signs point to yes.";
let positive6 = "Yes definitely.";
let negative2 = "Don't count on it.";
let negative3 = "Outlook not so good.";
let negative4 = "Very doubtful.";
let negative5 = "My reply is no.";
let negative6 = "My sources say no.";

// Event Listeners
document.getElementById("ball").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
    if (randNum < 0.1) {
    document.getElementById("output").innerHTML = positive1;
} else if (randNum < 0.2) {
    document.getElementById("output").innerHTML = negative1;
} else if (randNum < 0.3) {
    document.getElementById("output").innerHTML = positive2;
} else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = positive4;
} else if (randNum < 0.5) {
    document.getElementById("output").innerHTML = positive3;
} else if (randNum < 0.6) {
    document.getElementById("output").innerHTML = positive5;
} else if (randNum <0.7) {
    document.getElementById("output").innerHTML = negative2;
} else if (randNum < 0.8) {
    document.getElementById("output").innerHTML = negative3;
} else if (randNum < 0.9) {
    document.getElementById("output").innerHTML = negative4;
} else {
    document.getElementById("output").innerHTML = negative5;
}
}
