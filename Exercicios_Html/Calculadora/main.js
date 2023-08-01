function calcularValores() {
    let valor1 = parseFloat(document.getElementById("txtValor1").value);
    let valor2 = parseFloat(document.getElementById("txtValor2").value);
    let operacao = document.getElementById("cbxOperacao").value;
    let resultado;
    // if (operacao === "Selecione") {
    // resultado = "Selecione a Operação Desejada"
    // }
   if (operacao === "+") {
    resultado = valor1 + valor2;
    } 
    else if (operacao === "-") {
    resultado = valor1 - valor2;
    } 
    else if (operacao === "/") {
    resultado = valor1 / valor2;
    } 
    else if (operacao === "*") {
    resultado = valor1 * valor2;
    }
    else{
        resultado = "Selecione uma Operação Válida" 
    }
    document.getElementById("txtResultado").innerHTML = resultado;
    }