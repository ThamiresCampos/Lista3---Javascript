function candidatos() {
    let validosA=parseFloat(prompt("Quantidade de votos válidos do candidato A : "));
    let validosB=parseFloat(prompt("Quantidade de votos válidos do candidato B: "));
    let validosC=parseFloat(prompt("Quantidade de votos válidos do candidato C: "));
    let votosBrancos=parseFloat(prompt("Quantidade de votos brancos : "));
    let votosNulos=parseFloat(prompt("Quantidade de votos nulos : "));

    let eleitores= validosA + validosB + validosC + votosBrancos + votosNulos;
    alert("O total de eleitores : "+eleitores);

    let porcentagemvalidosA= 100 * validosA / eleitores;
    alert("A porcentagem de votos válidos do candidato A : "+porcentagemvalidosA + "%");

    let porcentagemvalidosB= 100 * validosB / eleitores;
    alert("A porcentagem de votos válidos do candidato B : "+porcentagemvalidosB + "%");

    let porcentagemvalidosC= 100 * validosC / eleitores;
    alert("A porcentagem de votos válidos do candidato C : "+porcentagemvalidosC + "%");

    let porcentagemNulos= 100 * votosNulos / eleitores;
    alert("A porcentagem de votos nulos : "+porcentagemNulos + "%");

    let porcentagemvotosBrancos= 100 * votosBrancos / eleitores;
    alert("A porcentagem de votos brancos : "+porcentagemvotosBrancos + "%");
}