let listaDeNumerosSorteados = []
let numeroMax = 5
let numeroSecreto;
inicio();

function criarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroMax) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return criarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function inicio() {
    numeroSecreto = criarNumeroSecreto();
    textoPadrao();
    document.querySelector('input').value = '';
    tentativa = 0;
}

function alterarTexto(tag, texto) {
    document.querySelector(tag).textContent = texto;
}

function textoPadrao() {
    alterarTexto('h1', 'Jogo do número secreto');
    let mensagem = `Escolha um número entre 1 e ${numeroMax}`
    alterarTexto('p', mensagem);
}

function criarMensagem(c, n) {
    let maiorOuMenor = c > n ? 'menor' : 'maior';
    let mensagem = `O numero secreto é ${maiorOuMenor} que ${c}`;
    return mensagem;
}

function reiniciar() {
    inicio();
    document.getElementById('bchute').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    if (document.querySelector('input').value == '') {
        alert("Por favor, digite um número primeiro")
    } else {
        let chute = document.querySelector('input').value;
        tentativa++;
        if (chute > numeroSecreto || chute < numeroSecreto) {
            alterarTexto('h1', 'Quase!');
            alterarTexto('p', criarMensagem(chute, numeroSecreto));
            document.querySelector('input').value = '';
        } else {
            alterarTexto('h1', 'Acertou!');
            let palavraTentativa = tentativa == 1 ? 'tentativa' : 'tentativas';
            let mensagem = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
            alterarTexto('p', mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('bchute').setAttribute('disabled', true);
        }
    }
}
