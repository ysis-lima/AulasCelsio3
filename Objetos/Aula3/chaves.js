const cliente = {
    nome: "Suzume Nana",
    idade: 19,
    email: "suzume-nana@empresa.com",
    telefone: ["12 3333-3333", "12 4444-4444"] ,
};

/*cliente.enderecos = {
    rua: "R. Kitsune",
    numero: 2222,
    apartamento: true,
    complemento: "ap 222",
};*/

const chavesObjeto = Object.keys(cliente);
console.log(chavesObjeto);

if (!chavesObjeto.includes("enedrecos")){
    console.error("Erros. é necessario cadastrar um enedereço!");
}