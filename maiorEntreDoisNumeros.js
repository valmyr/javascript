function maiorEntre2Numeros(num1,num2){
    if(num1 > num2)
        return num1;
    return num2;
}
let numero1 = 2, numero2 = 4;
console.log("Número 1: "+numero1);
console.log("Número 2: "+numero2);
let maior = maiorEntre2Numeros(numero1,numero2);
console.log("Maior número entre " + numero1+" e "+numero2+ " = " + maior);