function numOp(num) { //Função que pega números e operações e add no documento.
    document.result.text.value = document.result.text.value + num;
}

function igual() {
    res = document.result.text.value; //Variável que receberá itens add no result.
    if (res) {
        document.result.text.value = eval(res);  //eval vai avaliar a expressão dentro de res e apresentar o resultado no documento.
    }
}

function limpa() {
    document.result.text.value = ""; //Coloca uma string vazia dentro do form result para apagar tudo.
}