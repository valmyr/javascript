console.log(somar(10))
function somar(numero){
    soma = 0
    for(let i  = 0; i <= numero; i++)
        soma+= (i % 3 == 0 || i % 5 == 0)  ? i:0;
    return soma;
}