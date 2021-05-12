document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " W3Schools. All rights reserved.</p>";
console.log("Hello World");

// Examine documnent object
console.log(document.URL);

console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.links);
// getelementbyID
console.log(document.getElementById('main'));
var title = document.getElementById('mytitle');
console.log(title);
title.textContent='new title'
title.innerText='new title2'

var sub = document.getElementById('sub');
sub.innerHTML='<h3>halla</h3>'

//Traversing the DOM
console.log(sub.parentNode);
console.log(sub.parentNode.parentNode);

console.log(sub.childNodes);
console.log(sub.children);

//Create Element
var newDiv = document.createElement('div');
newDiv.id='mydiv'

var newDivText = document.createTextNode('Hello Div');
newDiv.appendChild(newDivText);
newDiv.style.fontSize='30px';

console.log(newDiv);

// add event handler
var button = document.getElementById('mybutton').addEventListener('click', buttonClick);

var button2 = document.getElementById('mybutton');
button2.addEventListener('dblclick', runEvent);
button2.addEventListener('mousedown', runEvent);
button2.addEventListener('mouseup', runEvent);

var box = document.getElementById('mybox');
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

var form = document.querySelector('form');
var itemInput = document.querySelector('input[type="text"]');

itemInput.addEventListener('keydown', runEvent2);

function runEvent2(e) {
    console.log('Event type: '+e.type);
    console.log(e.target.value);

    var output = document.getElementById('output');
    output.innerHTML='<h3>'+e.target.value+'</h3>';

}

function runEvent(e) {
    console.log('Event type: '+e.type);

    if (e.type === 'mousemove') {
       console.log('Mouse is moveing');
       document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40";
    }
}

function buttonClick(e) {
    console.log('Button clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);

    var output = document.getElementById('output');
    output.innerHTML='<h3>'+e.target.id+'</h3>';

    console.log(e.type);
    console.log(e.clientX);
    console.log(e.offsetX);
}