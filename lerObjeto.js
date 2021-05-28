let meuobj = {
    titulo: "Vingadores",
    ano : 2018,
    diretor : "Thor",
    personagem : "Robin",
    categoria:"Ação",
    faixaEtaria:18
};
ExibirObjeto(meuobj);
function ExibirObjeto(obj){
    console.log("Propriedades | Valores")
    for(i in obj){
        if(typeof(obj[i]) === "string")
            console.log(i,":" ,obj[i]);
    }
}