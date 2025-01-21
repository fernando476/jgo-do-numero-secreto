let listaDeNumerosSorteados = [];
let numerolimite = 100;
let numeroSecretro = gerarNumeroAleatorio();
let tentativas = 1;

function escreverTextoNaTela(tag, texto){
    let duplo = document.querySelector(tag);
    duplo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial(){
    escreverTextoNaTela('h1', 'jogo do número secreto!');
    escreverTextoNaTela ('p', 'escolha um numero de 1 a 10');

}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value
    if (chute == numeroSecretro){
        escreverTextoNaTela('h1', 'você acertou!');
        let palavratentativa = tentativas > 1? 'tentativas' : 'tentativas';
        let mensagemtentativas = `você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
        escreverTextoNaTela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');    
        } else {
        if (chute > numeroSecretro){
            escreverTextoNaTela('p', 'o número secreto é menor');
        } else {
            escreverTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    } 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if (quantidadeDeElementos == numerolimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecretro = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();  
    document.getElementById('reiniciar').setAttribute('disbled', true);
 }




