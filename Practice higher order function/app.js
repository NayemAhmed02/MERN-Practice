// function expression. function can be assigned into a variable

let sum = function (a, b) {
    console.log(a+b);
}

sum(10, 40);

// higher order function. a function can be an argument of other function, and a function also can return a function

function factory(func) {
    let req = func();
    if(req == "isOdd") {
        console.log("you are request for isOdd function");
        let isOdd = function(num) {
            console.log(num % 2 == 1);
        }
        return isOdd;
    }
    else if(req == "isEven") {
        console.log("you are request for isEven function");
        let isEven = function(num) {
            console.log(num % 2 == 0);
        }
        return isEven;
    }
    else {
        console.log("Wrong command");
        return false;
    }
}

function request() {
    let str = prompt("Enter your request: ");
    return str;
}

let machine = factory(request);

if(machine != false) {
    console.log(`Output for 25 is: `);
    machine(25);
    console.log(`Output for 26 is: `);
    machine(26);
}