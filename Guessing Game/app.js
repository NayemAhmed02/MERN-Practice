const max = prompt("Enter maximum number: ");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the random number: ");

while(true) {
    console.log(random, "   ", guess);
    if(guess == "quit") {
        console.log("You just quit the game.");
        break;
    }
    else if(guess == random) {
        console.log("Congratulations!!!, You are right. Random number is ", random);
        break;
    }
    else if(guess < random) {
        guess = prompt("Hint: your guess was too small. Please try again.");
    }
    else {
        guess = prompt("Hint: your guess was too large. Please try again.");
    }
}