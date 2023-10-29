let toDoList = [];
let request = prompt("Please enter your request: ");

while(true) {

    if(request === "quit") {
        console.log("You just quit the to do app.");
        break;
    }
    else if(request === "list") {
        console.log("------------------------");
        console.log("Current to do list elements are: ");
        for(let i=0; i<toDoList.length; i++) {
            console.log(i,",    ", toDoList[i]);
        }
        console.log("------------------------");
    }
    else if(request === "add") {
        let task = prompt("Enter a task to add on to do list: ");
        toDoList.push(task);
        console.log("task added");
    }
    else if(request === "delete") {
        let index = prompt("Enter index number of the task you want delete: ");
        toDoList.splice(index, 1);
        console.log("task deleted");
    }
    else {
        console.log("Invalid request. Please enter valid request.");
    }

    request = prompt("Please enter your request: ");
}