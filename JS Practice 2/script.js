function add(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerText = "Sum: " + sum;
}


function subtract(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var difference = num1 - num2;
    document.getElementById("result").innerText = "Difference: " + difference;
}

function multiply(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var product = num1 * num2;
    document.getElementById("result").innerText = "Product: " + product;
}

function divide(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(num2 === 0){
        document.getElementById("result").innerText = "Error: Division by zero";
    } else {
        var quotient = num1 / num2;
        document.getElementById("result").innerText = "Quotient: " + quotient;
    }
}

function clearResult(){
    document.getElementById("result").innerText = "";
}
