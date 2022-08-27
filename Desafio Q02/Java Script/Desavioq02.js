//Selecionando os elementos da tela
const valorAx = document.querySelector("#valorAx");
const valorBx = document.querySelector("#valorBx");
const valorC = document.querySelector("#valorC");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#buscar");
const lb1 = document.querySelector("#lb1");
const lb2 = document.querySelector("#lb2");
const lb3 = document.querySelector("#lb3");
const aviso = document.querySelector("#aviso");

//Mostrar que o campo não foi preenchido
valorAx.onblur = () => {
    if (valorAx.value == "") {
        lb1.style = "color: #aa0044";
        valorAx.style = "border-color: #aa0044";
    } else {
        valorAx.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
valorBx.onblur = () => {
    if (valorBx.value == "") {
        lb1.style = "color: #aa0044";
        valorBx.style = "border-color: #aa0044";
    } else {
        valorBx.style = "border-color: #000000";
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
    if (valorAx.value == "") {
        valorAx.focus();
    } else if (valorBx.value == "") {
        valorBx.focus();
    } else if (valorC.value == "") {
        valorC.focus();
    } else {
        resultado.value = busca(valorAx.value, valorBx.value, valorC.value);
    }

}
// Cauculando a formula de baskara
const busca = (valorAx, valorBx, valorC) => {

    valorAx = Number.parseFloat(valorAx);
    valorBx = Number.parseFloat(valorBx);
    valorC = Number.parseFloat(valorC);

    const delta = (valorBx * valorBx) - (4 * valorAx * valorC);

    if (delta < 0) {
        return "Delta negativo"
    }
    const X1 = (-valorBx + (Math.sqrt(delta))) / (2 * valorAx);//3
    if (valorBx < 0) {
        X1.value = X1.value * -1;
    }
    const X2 = (-valorBx - (Math.sqrt(delta))) / (2 * valorAx);//0
    if (valorBx < 0) {
        X1.value = X1.value * -1;
    }
    let raizes = [];
    raizes[0] = X1;
    raizes[1] = X2;
    return "O valor das raizes são: " + raizes;

}