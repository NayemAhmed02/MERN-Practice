console.log("Print multiplication table of any number.");
let num = prompt("Enter a number: ");
multiplicationTable(num);

function multiplicationTable(n) {
    console.log(`Multiplication table of ${n} is given below:`);
    for(let i=1; i<=10; i++) {
        console.log(n*i);
    }
}


console.log("Concanate a array of strings into a single string.");
let arr = ["my", "name", "is", "naeem", "ahmed"];
let result = concate(arr);
console.log(`Single string is:  ${result}`);

function concate(small) {
    let temp = "";
    for(let i=0; i<small.length; i++) {
        temp += small[i];
        temp += " ";
    }

    return temp;
}

