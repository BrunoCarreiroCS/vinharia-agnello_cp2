function validarTexto(mensagem) {
    let valor = prompt(mensagem);

    while (valor === null || valor.trim() === "") {
        alert("Entrada inválida! Digite uma informação válida.");
        valor = prompt(mensagem);
    }

    return valor;
}

function validarNumero(mensagem) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor) || valor < 0) {
        alert("Entrada inválida! Digite um número válido.");
        valor = Number(prompt(mensagem));
    }

    return valor;
}

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let idade = 2026 - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

function mostrarDados(nome, tipo, safra, quantidade, classificacao, estoqueBaixo) {
    console.log("-------------------------");
    console.log("Nome do vinho: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);

    if (estoqueBaixo) {
        console.log("Aviso: estoque baixo!");
        alert("Vinho cadastrado! Atenção: estoque baixo.");
    } else {
        alert("Vinho cadastrado com sucesso!");
    }
}

let continuar = "sim";
let totalCadastros = 0;
let totalEstoqueBaixo = 0;

let safraMaisAntiga = 0;
let nomeSafraMaisAntiga = "";

while (continuar.toLowerCase() === "sim") {
 
   let nome = validarTexto("Digite o nome do vinho:");
   let tipo = validarTexto("Digite o tipo do vinho:");
   let safra = validarNumero("Digite a safra do vinho:");
   let quantidade = validarNumero("Digite a quantidade em estoque:");
 
   let classificacao = classificarVinho(safra);
   let estoqueBaixo = verificarEstoqueBaixo(quantidade);