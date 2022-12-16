function volume() {
    let altura=parseInt(prompt("Insira o valor da altura : "));
    let comprimento=parseInt(prompt("Insira o valor do comprimento : "));
    let largura=parseInt(prompt("Insira o valor da largura : "));

    let volume= altura * comprimento * largura;
    alert("O valor do volume de uma caixa é de : "+volume);
}