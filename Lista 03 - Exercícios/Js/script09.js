function novoSalario() {
    let SM=parseInt(prompt("Dígite o valor do seu salário : "));
    let PR=parseInt(prompt("Dígite o valor do reajuste : "));

    let reajuste=  PR / 100 * SM;
    let novoSalario= reajuste + SM;

    alert("O valor do seu salário com o reajuste ficou em : "+novoSalario);
}