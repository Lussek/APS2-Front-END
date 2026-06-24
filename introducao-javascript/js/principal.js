var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAtura = paciente.querySelector(".info-altura");
    var altura = tdAtura.textContent;
    var tdImc = paciente.querySelector(".info-imc");


    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);


    if (!pesoEhValido) {
        //pesoEhValido = false;
        //paciente.style.backgroundColor = "red"
        paciente.classList.add("paciente-invalido");
        tdPeso.textContent = "Peso Inválido!"
    }


    if (!alturaEhValido) {
        //alturaEhValido = false;
        paciente.style.backgroundColor = "green"
        tdAtura.textContent = "Altura Inválida!"
    }


    if (pesoEhValido && alturaEhValido) {

        var imc = calculeImc(peso, altura);
        tdImc.textContent = imc;
     }
    // else {
    //     tdImc.textContent = "-";
    // }

}

function calculeImc(peso, altura) {

    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso <= 635.0){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 2.70){
        return true;
    }
    else{
        return false;
    }
}