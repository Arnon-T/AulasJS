function exibeNome() {
    var elNome = document.getElementById('textNome');
    var strNome = elNome.value;

    var elDisplay = document.getElementById('display');
    elDisplay.innerText = strNome;
}
function novoContato() {
    var elListaContato = document.getElementById('listaContatos');
    var inputContato = document.createElement("input");
    inputContato.setAttribute("name", "textContato");

    var labelContato = document.createElement("label");
    labelContato.innerText = "Contato:"

    var quebraLinha = document.createElement("br");

    var btnExcluir = document.createElement("input");
    btnExcluir.setAttribute("type", "button");
    btnExcluir.setAttribute("value", "-");
    btnExcluir.onclick = function () {
        elListaContato.removeChild(divLinha);
    }

    var divLinha = document.createElement("div");

    divLinha.appendChild(labelContato);
    divLinha.appendChild(inputContato);
    divLinha.appendChild(btnExcluir);
    divLinha.appendChild(quebraLinha);

    elListaContato.appendChild(divLinha);
}
function imprimirDados() {
    var arrInputsContatos = document.frmContatos.textContato;
    var saidaContato = document.getElementById("display");
    var saida = document.frmContatos.textContato.value;
    for (let i = 0; i < arrInputsContatos.length; i++) {
        saida += arrInputsContatos[i].value + " <br/> ";
    }
    saidaContato.innerHTML = saida;
}

console.log(Object.values(arrInputsContatos).length);