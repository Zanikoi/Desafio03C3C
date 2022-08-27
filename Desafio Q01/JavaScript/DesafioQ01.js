//Selecionando os elementos da tela

const valorA = document.querySelector("#valorA");
const valorB = document.querySelector("#valorB");
const valorC = document.querySelector("#valorC");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#buscar");
const lb1 = document.querySelector("#lb1");
const lb2 = document.querySelector("#lb2");
const lb3 = document.querySelector("#lb3");
const aviso = document.querySelector("#aviso");

//Mostrar que o campo não foi preenchido
valorA.onblur = () => {
    if (valorA.value == "") {
        lb1.style = "color: #aa0044";
        valorA.style = "border-color: #aa0044";
    } else {
        valorA.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
valorB.onblur = () => {
    if (valorB.value == "") {
        lb1.style = "color: #aa0044";
        valorB.style = "border-color: #aa0044";
    } else {
        valorB.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
valorC.onblur = () => {
    if (valorC.value == "") {
        lb1.style = "color: #aa0044";
        valorC.style = "border-color: #aa0044";
    } else {
        valorC.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
//Ações do botão resultado
btn.onclick = () => {
    if (valorA.value == "") {
        valorA.focus();
    } else if (valorB.value == "") {
        valorB.focus();
    } else if (valorC.value == "") {
        valorC.focus();
    } else if (valorA.value < 0 || valorB.value < 0 || valorC.value < 0) {
        valorA.value = "";
        valorB.value = "";
        valorC.value = "";
        resultado.value = "";
        aviso.innerText = "Somente valores positivos"
    } else {
        resultado.value = busca(valorA.value, valorB.value, valorC.value);
        aviso.innerText = "";
    }
}
//Calcular qual tipo e se é um triangulo
const busca = (valorA, valorB, valorC) => {

    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);
    valorC = Number.parseFloat(valorC);

    if ((valorA < valorB + valorC) && (valorB < valorA + valorC) && (valorC < valorA + valorB)) {
        if (valorA == valorB && valorA == valorC) {
            return "Triangulo Equilátero"
        } else if ((valorA == valorB) || (valorA == valorC) || (valorC == valorB)) {
            return "Triangulo Isóceles";
        } else {
            return "Triangulo Escaleno";
        }

    } else {
        return "Não é um triangulo";
    }

}