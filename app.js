function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    if(doNumero > ateNumero){
        alert(`O valor ${doNumero} é maior que o valor ${ateNumero}.`)
    } else {
        if(quantidade > (ateNumero - doNumero) + 1){
            alert('Digite uma quantidade menor para ser sorteado.')
        } else {
            for(let i = 0; i < quantidade; i++){
                numero = obterNumeroAleatorio(doNumero, ateNumero);
        
                while(sorteados.includes(numero)){
                    numero = obterNumeroAleatorio(doNumero, ateNumero);
                }
        
                sorteados.push(numero)
            }
        
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
        
            alterarStatusBotao();  
        }
        
    }

    

}

function alterarStatusBotao(){
    let botao_reiniciar = document.getElementById('btn-reiniciar');
    let botao_sortear = document.getElementById('btn-sortear');
    if(botao_reiniciar.classList.contains('container__botao-desabilitado')){
        botao_reiniciar.classList.remove('container__botao-desabilitado');
        botao_reiniciar.classList.add('container__botao');
        botao_sortear.classList.remove('container__botao');
        botao_sortear.classList.add('container__botao-desabilitado')
    } else{
        botao_reiniciar.classList.remove('container__botao');
        botao_reiniciar.classList.add('container__botao-desabilitado');
        botao_sortear.classList.remove('container__botao-desabilitado');
        botao_sortear.classList.add('container__botao');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').value = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



