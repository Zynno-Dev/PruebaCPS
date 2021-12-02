//calculator
function calculator() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("operator").value;
    var d = document.getElementById("result");
    if (c == "+") {
        d.value = parseInt(a) + parseInt(b);
    }
    else if (c == "-") {
        d.value = parseInt(a) - parseInt(b);
    }
    else if (c == "*") {
        d.value = parseInt(a) * parseInt(b);
    }
    else if (c == "/") {
        d.value = parseInt(a) / parseInt(b);
    }
}