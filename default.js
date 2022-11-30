//array e vars
var valor1 = "";
var valor2 = "";
var operando = "off";
operacao = "null";


//funções das teclas numéricas
function i_7() {
    switch (operando) {
        case "off":
            valor1 += "7";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "7";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }
}

function i_8() {
    switch (operando) {
        case "off":
            valor1 += "8";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "8";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }
}

function i_9() {
    switch (operando) {
        case "off":
            valor1 += "9";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "9";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }
}

function i_4() {
    switch (operando) {
        case "off":
            valor1 += "4";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "4";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }
}

function i_5() {
    switch (operando) {
        case "off":
            valor1 += "5";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "5";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }

}

function i_6() {
    switch (operando) {
        case "off":
            valor1 += "6";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "6";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }

}

function i_1() {
    switch (operando) {
        case "off":
            valor1 += "1";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "1";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }

}

function i_2() {
    switch (operando) {
        case "off":
            valor1 += "2";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "2";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }
}

function i_3() {
    switch (operando) {
        case "off":
            valor1 += "3";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "3";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }

}

function i_0() {
    switch (operando) {
        case "off":
            valor1 += "0";
            document.getElementById("screen-number").innerHTML = valor1;
            console.log("produto1 = " + valor1);
            break;
        case "on":
            valor2 += "0";
            document.getElementById("screen-number").innerHTML = valor2;
            console.log("produto2 = " + valor2);
            break;
        default:
    }
}


//funções dos operadores

function limpar() {
    document.getElementById("screen-number").innerHTML = "0";
    operacao = "null";
    operando = "off";
    valor1 = "";
    valor2 = "";
}
function divisao() {
    operando = "on";
    operacao = "divisao";
    console.log("dividindo por");
}
function multiplicacao() {
    operando = "on";
    operacao = "multiplicacao";
    console.log("multiplicando por");
}
function soma() {
    operando = "on";
    operacao = "soma";
    console.log("somando com");
}
function subtracao() {
    operando = "on";
    operacao = "subtracao";
    console.log("subtraindo de");
}

//switch de operações
function calc() {
    switch (operacao) {
        case "divisao":
            calc_divisao();
            break;
        case "multiplicacao":
            calc_multiplicacao();
            break;
        case "soma":
            calc_soma();
            break;
        case "subtracao":
            calc_subtracao();
            break;
        default:
            limpar();
    }
}

//funções de cálculos
function calc_soma() {
    resultado = parseInt(valor1) + parseInt(valor2);
    document.getElementById("screen-number").innerHTML = resultado;
    console.log("resultado: " + resultado);
    operando = "off";
    operacao = "null";
    valor1 = "";
    valor2 = "";
}
function calc_subtracao() {
    resultado = parseInt(valor1) - parseInt(valor2);
    document.getElementById("screen-number").innerHTML = resultado;
    console.log("resultado: " + resultado);
    operando = "off";
    operacao = "null";
    valor1 = "";
    valor2 = "";
}
function calc_divisao(){
    resultado = parseInt(valor1) / parseInt(valor2);
    document.getElementById("screen-number").innerHTML = resultado;
    console.log("resultado: " + resultado);
    operando = "off";
    operacao = "null";
    valor1 = "";
    valor2 = "";
}
function calc_multiplicacao(){
    resultado = parseInt(valor1) * parseInt(valor2);
    document.getElementById("screen-number").innerHTML = resultado;
    console.log("resultado: " + resultado);
    operando = "off";
    operacao = "null";
    valor1 = "";
    valor2 = "";
}
