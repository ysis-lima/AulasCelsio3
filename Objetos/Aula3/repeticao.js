const cliente = {
    nome: "Suzume Nana",
    idade: 19,
    email: "suzume-nana@empresa.com",
    telefone: ["12 3333-3333", "12 4444-4444"] ,
};

cliente.enderecos = {
    rua: "R. Kitsune",
    numero: 2222,
    apartamento: true,
    complemento: "ap 222",
};

for (let chave in cliente){
    let tipo = typeof cliente[campo];
    if (tipo !== "object" && tipo !== "function" ){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}