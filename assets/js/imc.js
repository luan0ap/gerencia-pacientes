var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdIdade = paciente.querySelector(".td-idade");
    var idade = tdIdade.textContent;

    var tdPeso = paciente.querySelector(".td-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".td-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".td-imc");

    var idadeValida = validaIdade(idade);
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
    }

    if (!alturaValida) {
        alturaValida = false;
        alert("Altura invalida");
    }

    if (!idadeValida) {
        idadeValida = false;
        alert("Idade inválida");
    }

}

function validaIdade(idade) {
    if (idade > 0 && idade < 100) {
        return true;
    } else {
        return false;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc (peso, altura) {
    var imc = 0;

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}