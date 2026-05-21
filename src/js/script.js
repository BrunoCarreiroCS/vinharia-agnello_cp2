function validarTexto(mensagem) {
    let valor = prompt(mensagem);

    while (valor === null || valor.trim() === "") {
        alert("Entrada invalida! Digite uma informacao valida.");
        valor = prompt(mensagem);
    }

    return valor;
}

function validarNumero(mensagem) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor) || valor <= 0) {
        alert("Entrada invalida! Digite um numero maior que zero.");
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
    console.log("Classificacao: " + classificacao);

    if (estoqueBaixo) {
        console.log("Aviso: estoque baixo!");
        alert("Vinho cadastrado! Atencao: estoque baixo.");
    } else {
        alert("Vinho cadastrado com sucesso!");
    }
}

function validarContinuacao() {
    let resposta = prompt("Deseja cadastrar outro vinho? Digite sim ou nao:");

    while (
        resposta === null ||
        resposta.trim() === "" ||
        resposta.toLowerCase() !== "sim" &&
        resposta.toLowerCase() !== "nao"
    ) {
        alert("Digite apenas sim ou nao.");
        resposta = prompt("Deseja cadastrar outro vinho? Digite sim ou nao:");
    }

    return resposta;
}

alert("Bem-vindo ao sistema da Vinharia Agnello!");

let continuar = "sim";
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let safraMaisAntiga = 0;
let nomeSafraMaisAntiga = "";

let nome1 = "";
let tipo1 = "";
let safra1 = 0;
let quantidade1 = 0;

let nome2 = "";
let tipo2 = "";
let safra2 = 0;
let quantidade2 = 0;

let nome3 = "";
let tipo3 = "";
let safra3 = 0;
let quantidade3 = 0;

let nome4 = "";
let tipo4 = "";
let safra4 = 0;
let quantidade4 = 0;

let nome5 = "";
let tipo5 = "";
let safra5 = 0;
let quantidade5 = 0;

while (continuar.toLowerCase() === "sim" && totalCadastros < 5) {
    let nome = validarTexto("Digite o nome do vinho:");
    let tipo = validarTexto("Digite o tipo do vinho:");
    let safra = validarNumero("Digite a safra do vinho:");
    let quantidade = validarNumero("Digite a quantidade em estoque:");
    let classificacao = classificarVinho(safra);
    let estoqueBaixo = verificarEstoqueBaixo(quantidade);

    totalCadastros++;

    if (totalCadastros === 1) {
        nome1 = nome;
        tipo1 = tipo;
        safra1 = safra;
        quantidade1 = quantidade;
    } else if (totalCadastros === 2) {
        nome2 = nome;
        tipo2 = tipo;
        safra2 = safra;
        quantidade2 = quantidade;
    } else if (totalCadastros === 3) {
        nome3 = nome;
        tipo3 = tipo;
        safra3 = safra;
        quantidade3 = quantidade;
    } else if (totalCadastros === 4) {
        nome4 = nome;
        tipo4 = tipo;
        safra4 = safra;
        quantidade4 = quantidade;
    } else if (totalCadastros === 5) {
        nome5 = nome;
        tipo5 = tipo;
        safra5 = safra;
        quantidade5 = quantidade;
    }

    if (estoqueBaixo) {
        totalEstoqueBaixo++;
    }

    if (totalCadastros === 1 || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeSafraMaisAntiga = nome;
    }

    mostrarDados(nome, tipo, safra, quantidade, classificacao, estoqueBaixo);

    if (totalCadastros < 5) {
        continuar = validarContinuacao();
    } else {
        alert("Limite de 5 cadastros atingido.");
    }
}

alert(
    "Resumo final:\n" +
    "Cadastros feitos: " + totalCadastros + "\n" +
    "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n" +
    "Vinho com a safra mais antiga: " + nomeSafraMaisAntiga + " - Safra " + safraMaisAntiga
);

console.log("========== RESUMO FINAL ==========");
console.log("Cadastros feitos: " + totalCadastros);
console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);
console.log("Vinho com a safra mais antiga: " + nomeSafraMaisAntiga + " - Safra " + safraMaisAntiga);
console.log("Cadastros armazenados em variaveis numeradas:");
console.log(nome1 + " | " + tipo1 + " | " + safra1 + " | " + quantidade1);
console.log(nome2 + " | " + tipo2 + " | " + safra2 + " | " + quantidade2);
console.log(nome3 + " | " + tipo3 + " | " + safra3 + " | " + quantidade3);
console.log(nome4 + " | " + tipo4 + " | " + safra4 + " | " + quantidade4);
console.log(nome5 + " | " + tipo5 + " | " + safra5 + " | " + quantidade5);
