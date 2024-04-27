function processingFunction () { 
    let input1 = Number(document.getElementById("dataBox1").value); 
    let input2 = document.getElementById("dataBox2").value; 
    let input3 = Number(document.getElementById("dataBox3").value); 
    let outputArea = document.getElementById("outputArea");

    let result; 


    switch(input2){ 
        case "+":
            result = add(input1, input3); 
            break;
        case "-":
            result = substract(input1, input3); 
            break;
        case "*":
            result = multiply(input1, input3);
            break;
        case "/":
            result = divide (input1, input3);
            break;
        case "": 
            result = "Please add an operator."
            break;
        default: 
            result = "Invalid operator. Please enter +, -, * or / ."
                }

    /*
     ---- Could be done like this as well -----
    if (input2 === "+") {
        result = add(input1, input3); 
    }
    if (input2 === "-") {
        result = substract (input1, input3); 
    }
    if (input2 === "*") {
        result = multiply (input1, input3); 
    }
    if (input2 === "/") {
        result = divide (input1, input3); 
    } ---- Could be done like this as well ----- 
    */
    
    outputArea.innerHTML = result; 
}

function add (num1, num2) { 
    let sum = 0; 
    sum = num1 + num2;
    return sum;
    }

function substract (num1, num2) {
    let sum = 0; 
    sum = num1 - num2; 
    return sum;
}

function multiply (num1, num2) {
    let sum = 0; 
    sum = num1 * num2; 
    return sum;
}

function divide (num1, num2) {
    let sum = 0; 
    sum = num1 / num2; 
    return sum;
}