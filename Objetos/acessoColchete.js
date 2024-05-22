const cliente = {
    nome: "Arthur",
    idade: "44",
    cpf: "8686868686",
    email: "arthurconnan@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]}, 
este tem ${cliente["idade"]} anos de idade.`)

const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach( (chave)=> {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});