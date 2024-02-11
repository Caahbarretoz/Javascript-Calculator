const zero = document.getElementById('zero');
const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const c = document.getElementById('c');
const igual = document.getElementById('=');
const mais = document.getElementById('+');
const menos = document.getElementById('-');
const divisao = document.getElementById('/');
const multiplicacao = document.getElementById('x');
const resultadoDisplay = document.getElementById('result');

const operadores = [mais, menos, divisao, multiplicacao];
const numeros = [zero, um, dois, tres, quatro, cinco, seis, sete, oito, nove];
let valor = "";
let primeiroValor = "";
let segundoValor = "";
let valorOperador = "";
let resultado = "";

function escolherNumeros(texto) {
    valor += texto;
    resultadoDisplay.textContent = valor
}


function escolherOperador(texto_) {
    valorOperador = texto_;
    resultadoDisplay.textContent = valorOperador
    primeiroValor = parseFloat(valor);
    valor = "";
}

function resultadoFinal() {
    segundoValor = parseFloat(valor);
    if (valorOperador == "+") {
        resultado = primeiroValor + segundoValor;
    }
    else if (valorOperador == "-") {
        resultado = primeiroValor - segundoValor;
    }
    else if (valorOperador == "÷") {
        resultado = primeiroValor / segundoValor;
    }
    else if (valorOperador == "X") {
        resultado = primeiroValor * segundoValor;
    }
    resultadoDisplay.textContent = resultado;
    valor = resultado.toString();
    valor = "";
    valorOperador = "";
    primeiroValor = "";
    segundoValor = "";
}

function limparDisplay() {
    resultadoDisplay.textContent = "";
    valor = "";
    valorOperador = "";
    primeiroValor = "";
    segundoValor = "";
}


numeros.forEach((numero) => numero.addEventListener("click", () => {escolherNumeros(numero.textContent);}))
operadores.forEach((operador) => operador.addEventListener("click", () => {escolherOperador(operador.textContent);}))
igual.addEventListener("click", resultadoFinal)
c.addEventListener("click", limparDisplay)