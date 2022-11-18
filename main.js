// JavaScript Code
let positive1 = prompt("YES!");
let negative1 = prompt("NO!");
let positive2 = prompt("It is decidedly so.");
let positive3 = prompt("Without a doubt.");
let positive4 = prompt("You may rely on it.");
let positive5 = prompt("Signs point to yes.");
let positive6 = prompt("Yes definitely.");
let negative2 = prompt("Don't count on it.");
let negative3 = prompt("Outlook not so good.");

// Event Listeners
document.getElementById("ball").addEventListener("click", btnClicked);

function btnClicked() {
    document.getElementById("output").innerHTML = positive1;
    document.getElementById("8BallQuotes").innerHTML = negative1;
    document.getElementById("8BallQuotes").innerHTML = positive2;
    document.getElementById("8BallQuotes").innerHTML = positive3;
    document.getElementById("8BallQuotes").innerHTML = positive4;
    document.getElementById("8BallQuotes").innerHTML = positive5;
    document.getElementById("8BallQuotes").innerHTML = positive6;
    document.getElementById("8BallQuotes").innerHTML = "Don't count on it";
    document.getElementById("8BallQuotes").innerHTML = "Outlook not so good";
    document.getElementById("8BallQuotes").innerHTML = "Very Doubtful";
    document.getElementById("8BallQuotes").innerHTML = "My reply is no";
    document.getElementById("8BallQuotes").innerHTML = "My sources say no";
}