document.getElementById("titulo").innerHTML="Meu Portofolio";
document.getElementById("perfil").setAttribute("src", "https://github.com/biosbio.png");
document.getElementById("nome").innerHTML="Moises Iala"
document.getElementById("funcao").innerHTML="Desenvolvedor"
function soma(){
    let valor1 = document.getElementById("num1").value
    let valor2 = document.getElementById("num2").value
    let mais = parseFloat(valor1) + parseFloat(valor2)
    document.getElementById("resultado").innerHTML=mais;
}
function subtrair(){
    let valor1 = document.getElementById("num1").value
    let valor2 = document.getElementById("num2").value
    let menos = parseFloat(valor1) - parseFloat(valor2)
    document.getElementById("resultado").innerHTML=menos;
}
function multiplicar(){
    let valor1 = document.getElementById("num1").value
    let valor2 = document.getElementById("num2").value
    let vezes = parseFloat(valor1) * parseFloat(valor2)
    document.getElementById("resultado").innerHTML=vezes;
}
function dividir(){
    let valor1 = document.getElementById("num1").value
    let valor2 = document.getElementById("num2").value
    let divide = parseFloat(valor1) / parseFloat(valor2)
    document.getElementById("resultado").innerHTML=divide;
}



