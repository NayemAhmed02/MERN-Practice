let input = ["January", "July", "March", "August"];
let input2 = ["January", "July", "March", "August"];
let input3 = ["January", "July", "March", "August"];

// target 
// input = ["July", "June", "March", "August"]

// way 1
input.shift();
input.shift();
input.unshift("June");
input.unshift("July");
console.log(input);

// way 2
input2.shift();
input2.pop();
input2.pop();
input2.push("June");
input2.push("March");
input2.push("August");
console.log(input2);

// way 3
input3.shift();
input3.splice(1, 0, "June");
console.log(input3);