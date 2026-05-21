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

   totalCadastros++;
 
   if (estoqueBaixo) {
       totalEstoqueBaixo++;
   }
 
   if (totalCadastros === 1 || safra < safraMaisAntiga) {
       safraMaisAntiga = safra;
       nomeSafraMaisAntiga = nome;
   }
 
   mostrarDados(nome, tipo, safra, quantidade, classificacao, estoqueBaixo);

   continuar = prompt("Deseja cadastrar outro vinho? Digite sim ou não:");
 
   while (
       continuar === null ||
       continuar.trim() === "" ||
       continuar.toLowerCase() !== "sim" &&
       continuar.toLowerCase() !== "não" &&
       continuar.toLowerCase() !== "nao"
   ) {
 
       alert("Digite apenas sim ou não.");
       continuar = prompt("Deseja cadastrar outro vinho? Digite sim ou não:");
   }
}
// PARTE 4 - Resumo final

alert(

   "Resumo final:\n" +

   "Cadastros feitos: " + totalCadastros + "\n" +

   "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n" +

   "Vinho com a safra mais antiga: " +

   nomeSafraMaisAntiga + " - Safra " + safraMaisAntiga

);
 
console.log("========== RESUMO FINAL ==========");

console.log("Cadastros feitos: " + totalCadastros);

console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);

console.log(

   "Vinho com a safra mais antiga: " +

   nomeSafraMaisAntiga + " - Safra " + safraMaisAntiga

);
 