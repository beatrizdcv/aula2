alert('Jogo do número secreto da Bia');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1; 
// enquanto chute nao for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
       
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
       // tentativas = tentativas + 1;
        tentativas++;
        
    }

} 
if (tentativas > 1) {
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}