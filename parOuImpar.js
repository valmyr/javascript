let limite = (prompt("Informe o limite: "));

for(let i = 0; i <= limite; i++)
    console.log(i,verificarNumero(i));
function verificarNumero(numero){
    return (numero % 2) ? "Ímpar":"Par";
}