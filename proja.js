var num1;
var num2;
var ans;
var operator;


document.getElementById("btnPlus").onclick = function(){
    num1 = parseInt(document.getElementById("inputBox1").value);
    num2 = parseInt(document.getElementById("inputBox2").value);
    ans = num1+num2;
    document.getElementById("displayAns").innerHTML = "Answer : "+ans;
}

document.getElementById("btnSub").onclick = function(){
    num1 = parseInt(document.getElementById("inputBox1").value);
    num2 = parseInt(document.getElementById("inputBox2").value);
    ans = num1-num2;
    document.getElementById("displayAns").innerHTML = "Answer : "+ans;
}

document.getElementById("btnMulti").onclick = function(){
    num1 = parseInt(document.getElementById("inputBox1").value);
    num2 = parseInt(document.getElementById("inputBox2").value);
    ans = num1*num2;
    document.getElementById("displayAns").innerHTML = "Answer : "+ans;
}

document.getElementById("btnDiv").onclick = function(){
    num1 = parseInt(document.getElementById("inputBox1").value);
    num2 = parseInt(document.getElementById("inputBox2").value);
    ans = num1/num2;
    document.getElementById("displayAns").innerHTML = "Answer : "+ans;
}