let idade = prompt("Qual é a sua idade? >> ");
if(typeof(idade) === "number"){
    if(idade >= 18){
        alert("Você é maior de idade!");
    }else{
        alert("Você é menor de idade!");
    }
}else{
    alert("Ops, idade invalida!");
}