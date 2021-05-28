const resultado = fizzbuzz(true);
console.log(resultado);
function fizzbuzz(numero){
    if(typeof(numero) !== "number")
        return "Não e um número";
    if(numero%3  === numero%5 ===0)
        return "FizzBuzz";
    else if(numero%3 === 0)
        return "Fizz";
    else if(numero%5 === 0)
        return "Buzz";
    else
        return numero;
}