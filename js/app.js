console.log("Aplicacion Calculadora");

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

if(isNaN(resultado))
resultado = "la operacion no incluye numero"

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function resta(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

if(isNaN(resultado))
resultado = "la operacion no incluye numero"

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function multiplicacion(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

if(isNaN(resultado))
resultado = "la operacion no incluye numero"

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function division(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);

if(isNaN(resultado))
resultado = "la operacion no incluye numero"

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}