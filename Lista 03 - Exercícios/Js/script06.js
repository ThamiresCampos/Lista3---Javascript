function valor() {
    let A=parseInt(prompt("Insira um valor : "));
    let B=parseInt(prompt("Insira o segundo valor : "));
    let C=parseInt(prompt("Insira o terceiro valor : "));

    let elevadoA= A ** 2;
    let elevadoB= B ** 2;
    let elevadoC= C ** 2;

    let valor= elevadoA + elevadoB + elevadoC;
    alert("A soma dos quadrados dos valores lidos é de : "+valor);

}
