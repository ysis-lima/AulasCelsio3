const cliente = {
    nome: "Suzume Nana",
    idade: 19,
    email: "suzume-nana@empresa.com",
    telefone: ["12 3333-3333", "12 4444-4444"] ,
};

cliente.endereco = {
    rua: "R. Kitsune",
    numero: 2222,
    apartamento: true,
    complemento: "ap 222",
};

cliente.enderecos.push({
    rua: "R. Kitsune",
    numero: 333,
    apartamento: false,
});

console.log(cliente.endereco);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);