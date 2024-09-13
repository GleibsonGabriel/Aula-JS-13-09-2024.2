// Declaração de variáveis
let cidade, dia, mes, ano;
let saida = document.getElementById("saida");

// Coleta de dados do usuário
cidade = prompt("Digite o nome de sua cidade:");
dia = prompt("Digite qual dia é hoje:");
mes = prompt("Digite em qual mês estamos:");
ano = prompt("Digite em qual ano estamos:");

// Converte valores para inteiros
dia = parseInt(dia);
ano = parseInt(ano);

/**
 * Exibe o resultado formatado no elemento com ID "saida".
 * 
 * @param {string} cidade - Nome da cidade.
 * @param {number} dia - Dia do mês.
 * @param {string} mes - Nome do mês.
 * @param {number} ano - Ano.
 */
function exibirResultado(cidade, dia, mes, ano) {
    saida.innerHTML = cidade + ", " + dia + " de " + mes + " de " + ano;
}

/**
 * Verifica se o ano e o dia são numéricos. Se não forem, solicita novos valores.
 */
function verificarAnoEDia() {
    // Verifica se dia ou ano são NaN
    if (isNaN(dia) || isNaN(ano)) {
        console.log("Insira dia e ano em formato numérico!");
        dia = prompt("Digite qual dia é hoje:");
        ano = prompt("Digite em qual ano estamos:");
        dia = parseInt(dia);
        ano = parseInt(ano);
        verificarAnoEDia(); // Chama a função novamente para nova verificação
    } else {
        verificarCidadeEMes(); // Chama a próxima função de verificação
    }
}

/**
 * Verifica se a cidade e o mês são válidos. Se não forem, solicita novos valores.
 */
function verificarCidadeEMes() {
    // Verifica se cidade está vazia ou mes não é uma string não vazia
    if (cidade.trim() === "" || mes.trim() === "") {
        console.log("Insira cidade e mês no formato de texto!");
        cidade = prompt("Digite o nome de sua cidade:");
        mes = prompt("Digite em qual mês estamos:");
        verificarCidadeEMes(); // Chama a função novamente para nova verificação
    } else {
        exibirResultado(cidade, dia, mes, ano); // Exibe o resultado formatado
    }
}

// Inicia a verificação
verificarAnoEDia();
