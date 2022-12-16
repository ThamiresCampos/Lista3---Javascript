function dolar() {
    let valorReal=parseInt(prompt("Insira a cotação do real : "));
    let quantidade=parseInt(prompt("Dígite a quantidade de dolares que você possui :"));

    let dolar= valorReal * quantidade;
    alert("A conversão do real para dólar é de : "+dolar);
}