let para = document.createElement('p');
para.innerText = "Hey, I'm red!";
let body = document.querySelector('body');
body.append(para);
para.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
body.append(h3);
h3.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');
h1.innerText = "Hey, I'm in a div!";
para2.innerText = "Me too!";
div.append(h1);
div.append(para2);
body.append(div);
div.classList.add("black");
div.classList.add("pink");







