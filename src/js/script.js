function validarTexto(mensagem) {
    let valor = prompt(mensagem);

    while (valor === null || valor.trim() === "") {
        alert("Campo obrigatorio. Tente novamente.");
        valor = prompt(mensagem);
    }

    return valor;
}

function validarNumero(mensagem) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor) || valor <= 0) {
        alert("Digite um numero valido maior que zero.");
        valor = Number(prompt(mensagem));
    }

    return valor;
}

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let anoAtual = 2026;
    let idade = anoAtual - safra;
    let classificacao = "";

    if (idade <= 3) {
        classificacao = "jovem";
    } else if (idade <= 10) {
        classificacao = "amadurecido";
    } else {
        classificacao = "antigo";
    }

    return classificacao;
}

function mostrarDados(nome, tipo, safra, quantidade, classificacao) {
    alert("Cadastro realizado! Veja os dados no console.");
    console.log("Nome do vinho: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificacao: " + classificacao);

    if (verificarEstoqueBaixo(quantidade)) {
        console.log("Aviso: estoque baixo.");
        alert("Atencao: o vinho " + nome + " esta com estoque baixo.");
    }
}

alert("Bem-vindo ao sistema da Vinharia Agnello!");

let desejaContinuar = "s";
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let safraMaisAntiga = 0;
let vinhoSafraMaisAntiga = "";

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

while (desejaContinuar.toLowerCase() === "s" && totalCadastros < 5) {
    let nome = validarTexto("Digite o nome do vinho:");
    let tipo = validarTexto("Digite o tipo do vinho:");
    let safra = validarNumero("Digite o ano da safra:");
    let quantidade = validarNumero("Digite a quantidade em estoque:");
    let classificacao = classificarVinho(safra);

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

    if (verificarEstoqueBaixo(quantidade)) {
        totalEstoqueBaixo++;
    }

    if (totalCadastros === 1 || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        vinhoSafraMaisAntiga = nome;
    }

    mostrarDados(nome, tipo, safra, quantidade, classificacao);

    if (totalCadastros < 5) {
        desejaContinuar = validarTexto("Deseja cadastrar outro vinho? Digite S para sim ou N para nao:");
    } else {
        alert("Limite inicial de 5 cadastros atingido. O grupo pode aumentar depois.");
    }
}

alert(
    "Resumo final:\n" +
    "Cadastros feitos: " + totalCadastros + "\n" +
    "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n" +
    "Safra mais antiga: " + vinhoSafraMaisAntiga + " (" + safraMaisAntiga + ")"
);

console.log("Resumo final");
console.log("Cadastros feitos: " + totalCadastros);
console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);
console.log("Vinho com safra mais antiga: " + vinhoSafraMaisAntiga + " - " + safraMaisAntiga);
