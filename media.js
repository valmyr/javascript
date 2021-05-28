let notas = [7,7,8];
let resultado = mediaDoAluno(notas);
console.log(resultado < 6 ? "F":resultado < 7 ? "D": resultado < 8 ? "C": resultado < 9 ? "B":"A");
function mediaDoAluno(notas){
    let soma = 0;
    for(i = 0 ; i < notas.length; i++)
        soma+=notas[i];
    return soma/notas.length;
}
