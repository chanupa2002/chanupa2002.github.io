
let circle = document.getElementById('circle');

let rotateValue = circle.style.transform;

let rotateSum;


function rotateUp(){

    rotateSum = rotateValue + 'rotate(-90deg)';   //#circle{transform:rotate(-90deg);}  <--- same css code

    circle.style.transform = rotateSum;

    rotateValue = rotateSum;

}

function rotateDown(){

    rotateSum = rotateValue + 'rotate(+90deg)';   //#circle{transform:rotate(+90deg);}  <--- same css code

    circle.style.transform = rotateSum;

    rotateValue = rotateSum;

}