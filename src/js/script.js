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