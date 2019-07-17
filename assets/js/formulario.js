botaoAdicionar = document.getElementById("adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var formulario = document.querySelector("#formulario");
    var paciente = pacientesDoFormulario(formulario);
    
    var erros = validaPaciente(paciente);

    if(erros.length>0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    formulario.reset();
});

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector(".mensagem-de-erro");

        ul.innerHTML = "";

        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
}


function pacientesDoFormulario(formulario) {
    var paciente = {
        nome: formulario.nome.value,
        idade: formulario.idade.value,
        sexo: formulario.sexo.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function adicionaPacienteNaTabela(paciente) {
    pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "td-nome");
    var idadeTd = montaTd(paciente.idade, "td-idade");
    var pesoTd = montaTd(paciente.peso, "td-peso");
    var alturaTd = montaTd(paciente.altura, "td-altura");
    var imcTd = montaTd(paciente.imc, "td-imc");
    var editar = montaTd('<ion-icon name="create"></ion-icon>', 'td-editar');
    var excluir = montaTd('<ion-icon name="trash" id="excluir"></ion>', 'td-excluir');

    nomeTd.textContent = paciente.nome;
    idadeTd.textContent = paciente.idade;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(idadeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(editar);
    pacienteTr.appendChild(excluir);

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.innerHTML = dado;

    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("Digite um nome!");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if(!validaIdade(paciente.idade)) {
        erros.push("Idade incorreta");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    
    return erros;
}