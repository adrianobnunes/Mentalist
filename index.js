function jogar(){
    let numeroSecreto = parseInt(Math.random() * 10);
    let tentativasUsuario = 3;
    
    while(tentativasUsuario > 0){
        let chute = parseInt(prompt("Digite um número entre 0 e 10"))
    
        if(chute === numeroSecreto){
            alert("PARABÉNS! Você acertou o número secreto!");
            break
        } else if(chute > numeroSecreto){
            alert("O número secreto é menor")
            tentativasUsuario = tentativasUsuario - 1;
        } else if(chute < numeroSecreto){
            alert("O número secreto é maior");
            tentativasUsuario = tentativasUsuario - 1;
        } 
    
        if(chute !== numeroSecreto && tentativasUsuario === 0){
           alert("FIM DE JOGO! O número secreto era " + numeroSecreto)
        }
    }
}




