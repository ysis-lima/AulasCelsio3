const pessoa = {
    nome: "Selene",
    profissao: "Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

//Adiconamos o valor telefone.
pessoa.telefone = "55 4197099-4566";
console.log(pessoa.telefone);

//Modificamos o valor de nome.
pessoa.nome = "Selene Lune";
console.log(pessoa);

const novaPessoa ={
    nome: "Icaro",
    profissao: "Arquiteto",
    telefone: "55 4198845-3352",
};

pessoa = novaPessoa;
//A declaração acima não funcionará, pois não podemos reatribuir a 
//variavel, mas podemos alterar os objetos armazenados como fizemos
//anteriormente.