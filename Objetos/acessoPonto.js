const cliente = {
    nome: "Arthur",
    idade: "44",
    cpf: "8686868686",
    email: "arthurconnan@dominio.com",
};

/*//Irá imprimir todos os valores na tela.
console.log(cliente);*/

/*//Irá imprimir apenas o valor "nome".
console.log(cliente.nome);*/

//Utilizaremos uma substring para aprensentar apenas os trẽs 
//primeiros digitos do cpf.
console.log(`O nome do cliente é ${cliente.nome}, 
este tem ${cliente.idade} anos de idade, o três primeiros
digitos do cpf são ${cliente.cpf.substring(0,3)}`)

