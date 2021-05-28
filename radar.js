const limite = 70;
const kmPorPonto = 5;
console.log(verificarVelocidade(180));
function verificarVelocidade(velocidade){
    if(velocidade > limite)
        return (velocidade - limite)/kmPorPonto > 12 ? "Carteira Suspensa":"Pontos  na carteira " + Math.floor((velocidade - limite)/kmPorPonto);
    return "Ok";
}