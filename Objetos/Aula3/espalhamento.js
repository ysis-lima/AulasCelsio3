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
}

function ligarParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

//espalhamento ...
ligarParaCliente(...cliente.telefone);

const encomenda ={
    destianatario: cliente.nome,
    ...cliente.enderecos[0],
};
