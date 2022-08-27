const nota01 = document.querySelector("#nota01");
const nota02 = document.querySelector("#nota02");
const nota03 = document.querySelector("#nota03");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#buscar");
const lb1 = document.querySelector("#lb1");
const lb2 = document.querySelector("#lb2");
const lb3 = document.querySelector("#lb3");
const aviso = document.querySelector("#aviso");

//Mostrar que o campo não foi preenchido
nota01.onblur = () => {
    if (nota01.value == "") {
        lb1.style = "color: #aa0044";
        nota01.style = "border-color: #aa0044";
    } else {
        nota01.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
nota02.onblur = () => {
    if (nota02.value == "") {
        lb1.style = "color: #aa0044";
        nota02.style = "border-color: #aa0044";
    } else {
        nota02.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
nota03.onblur = () => {
    if (nota03.value == "") {
        lb1.style = "color: #aa0044";
        nota03.style = "border-color: #aa0044";
    } else {
        nota03.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
//Ações do botão resultado
btn.onclick = () => {
    if (nota01.value == "") {
        nota01.focus();
    } else if (nota02.value == "") {
        nota02.focus();
    } else if (nota03.value == "") {
        nota03.focus();
    } else if (nota01.value < 0 || nota01.value > 100 || nota02.value < 0 || nota02.value > 100 || nota03.value < 0 || nota03.value > 100) {
        nota01.value = "";
        nota02.value = "";
        nota03.value = "";
        resultado.value = "";
        aviso.innerText = "Somente valores de 0 até 100"
    } else {
        resultado.value = busca(nota01.value, nota02.value, nota03.value);
        aviso.innerText = "";
    }
}
// Caulando a média com as restrições
const busca = (nota01, nota02, nota03) => {

    nota01 = Number.parseFloat(nota01);
    nota02 = Number.parseFloat(nota02);
    nota03 = Number.parseFloat(nota03);

    const media = (nota01 + nota02 + nota03) / 3;

    if ((media >= 38) && (media <= 40)) {
        return "Aluno aprovado com média: 40";
    } else if (media < 38) {
        return "Aluno reprovado com média: " + media;
    } else if (((media + 2) % 5) == 0) {
        return "Aluno aprovado com média: " + (media + 2);
    } else if (((media + 1) % 5) == 0) {
        return "Aluno aprovado com média: " + (media + 1);
    } else {
        return "Aluno aprovado com média: " + media;
    }
}