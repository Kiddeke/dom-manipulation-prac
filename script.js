const body = document.querySelector('body');

const paragraph = document.createElement('p');
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red";

body.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

body.appendChild(h3);

const div = document.createElement('div');
div.style.border = "black";
div.style.background = "pink";

body.appendChild(div);
const h1 = document.createElement('h3');
h1.textContent = "I'm in a div";

div.appendChild(h1);

const p2 = document.createElement('h3');
p2.textContent = "Me too!";

div.appendChild(p2);