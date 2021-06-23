'use strict'
let score = 0;
let userName = prompt("Please,Enter your Name")
console.log("the user name is " + userName);
alert("Hi " + userName + "! Welcome to My World")
alert("Let's START Our guessing Game " + userName + ". I will ask you a few question. Please Answer with (yes/no)")
let Q1 = prompt(userName + "! Do you know who I am ?").toLowerCase();
console.log(Q1);
switch (Q1) {
    case "yes":
    case "y":
        alert("RELLY!! From where? ")
        console.log("RELLY!! From where? ");
        score++;
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
        score++;
        break;
    case "no":
    case "n":
        alert("OOH!! That's a Wrong answer. I do Like Art")
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
        score++;
        break;
    case "no":
    case "n":
        alert("OOH!! That's a Wrong answer. I am a Jordanian")
        console.log("OOH!! That's Wrong answer.I am a Jordanian");
    default:
        alert("OKAY!! Move to the next question")
        console.log("OKAY!! Move to the next question")
}
let Q4 = prompt(userName + "!Am I a coffee Lover? ").toLowerCase();
console.log(Q4);
switch (Q4) {
    case "yes":
    case "y":
        alert("That's CORRECT.WOHOO!! Actually I can't start My Day without Coffee ")
        console.log("That's CORRECT.WOHOO!! Actually I can't start My Day without Coffee");
        score++;
        break;
    case "no":
    case "n":
        alert("OOPS!! That's a Wrong answer. I do Love Coffee")
        console.log("OOH!! That's Wrong answer. I do Love Coffee");
    default:
        alert("Let's Move to the next Question.")
        console.log("Let's Move to the next Question.")
}

let Q5 = prompt(userName + "!Do you think I am a food lover? ").toLowerCase();
console.log(Q5);
switch (Q5) {
    case "yes":
    case "y":
        alert("That's CORRECT.Yummy yummy in my tummy. ")
        console.log("That's CORRECT.Yummy yummy in my tummy.");
        score++;
        break;
    case "no":
    case "n":
        alert("OOH NOO!! That's a Wrong answer.Who doesn't love food")
        console.log("OOH NOO!! That's a Wrong answer.Who doesn't love food");
    default:
        alert("OKAY!")
        console.log("OKAY!")
}

alert("OKAY! " + userName + "! Can you guess My Age? (You have only 4 attempts)")
console.log("OKAY! " + userName + "! Can you guess My Age? (You have only 4 attempts)")

let i;
let answer = [];
for (i = 1; i <= 4; i++) {
    let Q6 = Number(prompt("Please enter your " + i + " attempt guess"));
    console.log(Q6);
    answer.push(Q6);
    if (Q6 < 27) {
        alert("you are TOO LOW")
        console.log("you are TOO LOW")
    } else if (Q6 > 27) {
        alert("TOO HIGH")
        console.log("TOO HIGH")
    } else {
        alert("That's CORRECT!! " + userName + " YAAAAY")
        console.log("That's CORRECT!! " + userName + " YAAAAY")
        score++;
    }
}
alert("Your answers:" + answer[0] + " / " + answer[1] + " / " + answer[2] + " / " + answer[3]);
console.log("Your answers:" + answer[0] + " / " + answer[1] + " / " + answer[2] + " / " + answer[3]);
alert("I am 27 years old");
console.log("I am 27 years old");
alert("You did a Great Job until NOW.Let's continue :)");
console.log("You Did a Great Job until NOW.Let's continue :)");
alert("Can you Guess My Faviorate Meals? (you have only 6 attempts)");
console.log("Can you Guess My Faviorate Meals? (you have only 6 attempts)");

let favMeals = ["mansaf", "shawerma", "pizza", "spaghetti", "burger", "broasted"];
console.log("favMeals" + favMeals);
let Q7;
for (let n= 1; n <= 6; n++){
     Q7 = prompt("Try to guess my fav food? attempt number "+n).toLowerCase();
     console.log(Q7);
    if (favMeals.includes(Q7)){
        alert("WOOW!!CORRECT!! you're amazing")
        console.log("WOOW!!CORRECT!! you're amazing")
        score++;
        break;
    }else{

    }   
    }

   
    

alert("My Fav Food :" + favMeals);
console.log("My Fav Food :" + favMeals);
alert("You are so good.YOUR SCORE IS:" + score);
console.log(score);






