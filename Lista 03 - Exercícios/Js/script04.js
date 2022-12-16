function real() {
    let valorDolar=parseInt(prompt("Insira a cotação do dólar :"));
    let quantidade=parseInt(prompt("Dígite a quantidade de reais que possui :"))

    let real= quantidade / valorDolar;
    alert("A conversão do dólar para real é de : "+real);
}