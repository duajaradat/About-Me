'use strict'
let userName = prompt("Please,Enter your Name")
console.log(userName)
alert("Hi " + userName + "! Welcome to My World")
alert("Let's START Our guessing Game " + userName + ". I will ask you a few question. Please Answer with (yes/no)")
let Q1 = prompt(userName + "! Do you know who I am ?").toLowerCase();
console.log(Q1);
switch (Q1) {
    case "yes":
    case "y":
        alert("RELLY!! From where? ")
        console.log("RELLY!! From where? ");
        break;
    case "no":
    case "n":
        alert("OOH!! That's too BAD")
        console.log("OOH!! That's too BAD");
    default:
        alert("Let's Move to the next Question.")
        console.log("Let's Move to the next Question.")
}
let Q2 = prompt(userName + "! Do you think I like Art?").toLowerCase();
console.log(Q2);
switch (Q2) {
    case "yes":
    case "y":
        alert("That's CORRECT.Yaay I like Art specially Oneline Art.")
        console.log("That's CORRECT.Yaay I like Art specially Oneline Art.");
        break;
    case "no":
    case "n":
        alert("OOH!! That's Wrong answer. I do LIke Art")
        console.log("OOH!! That's Wrong answer. I do LIke Art");
    default:
        alert("Let's Move to the next Question.")
        console.log("Let's Move to the next Question.")
}

let Q3 = prompt(userName + "!Do you think I am a Jordanian? ").toLowerCase();
console.log(Q3);
switch (Q3) {
    case "yes":
    case "y":
        alert("That's CORRECT.Yaay and I love my country.")
        console.log("That's CORRECT.Yaay and I love my country.");
        break;
    case "no":
    case "n":
        alert("OOH!! That's Wrong answer. I am a Jordanian")
        console.log("OOH!! That's Wrong answer.I am a Jordanian");
    default:
        alert("OKAY!! Thank You ")
        console.log("OKAY!! Thank You")
}
alert("Thank You:) and Welcome to My World.")

