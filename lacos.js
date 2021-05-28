// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");

//1.for
// for(let i = 0; i < 5; i++){
//     console.log("Estou aprendendo!", i);
// }

// for(let i = 1; i < 100; i++){
//     if(i%2)
//         console.log("Números ímpares " + i);
// }
//2.while
// let i = 0;
// while(i < 5){
//     if(i%2)
//         console.log("Números ímpares " + i);
//     i++;
// }
// //3.do - while
// let i = 0;
// do{
//     if(i&1)
//         console.log("Números ímapares "+ i);
// }while(i++ <= 5);
let pessoa = {
    nome:"Valmir",
    idade:21,
    altura:1.56
};
for(let chave in pessoa){
    console.log(chave);
}
const arrayDeCores = ["Azul","Verde","Amarelo"];
for(let ind in arrayDeCores){
    console.log(ind,arrayDeCores[ind]);
}