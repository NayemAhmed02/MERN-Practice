// practice 1
let input = ["c", "c++", "java", "javascript", "html", "python", "c#", "sql"];
// target : find the index of javascript in reverse fashion 
console.log(input.reverse().indexOf("javascript"));


// practice 2
let input1 = ["January", "July", "March", "August"];
// target : make it ["July", "June", "March", "August"] by one line javascript code.
input1.splice(0, 2, "July", "June");
console.log(input1);