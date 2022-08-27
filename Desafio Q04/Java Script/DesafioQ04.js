const valor = document.querySelector("#valor");;
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#buscar");
const lb1 = document.querySelector("#lb1");
const aviso = document.querySelector("#aviso");

//Mostrar que o campo não foi preenchido
valor.onblur = () => {
    if (valor.value == "") {
        lb1.style = "color: #aa0044";
        valor.style = "border-color: #aa0044";
    } else {
        valor.style = "border-color: #000000";
        lb1.style = "color: #000000";
    }
}
//Ações do botão resultado
btn.onclick = () => {
    if (valor.value == "") {
        valor.focus();
    } else if (valor.value < 0) {
        valor.value = "";
        resultado.value = "";
        aviso.innerText = "Somente valores positivos"
    } else {
        resultado.value = busca(valor.value);
        aviso.innerText = "";
    }
}
//Adicionando Luidy, Moura e LuidyMoura no Arrey
const busca = (valor) => {

    valor = Number.parseInt(valor);

    let myArray = new Array(valor);
    let myArrayStr = new Array(valor);

    for (let i = 1; i < myArray.length; i++) {
        myArray[0] = 1;
        myArray[i] = i + 1;
    }
    for (let i = 0; i < myArrayStr.length; i++) {
        const numStr = myArray[i].toString();
        myArrayStr[i] = numStr
        if (((myArrayStr[i] % 9) == 0) & ((myArrayStr[i] % 5) == 0)) {
            myArrayStr[i] = "LuidyMoura";
        } else if (myArrayStr[i] % 5 == 0) {
            myArrayStr[i] = "Luidy";
        } else if (myArrayStr[i] % 9 == 0) {
            myArrayStr[i] = "Moura";
        }
    }
    myArrayStr.join();
    return myArrayStr;
}