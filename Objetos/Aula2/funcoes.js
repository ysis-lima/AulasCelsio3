const cliente = {
    nome: "Suzume Nana",
    idade: 19,
    email: "suzume-nana@empresa.com",
    telefone: ["12 3333-3333", "12 4444-4444"] ,
    saldo: 356,
    efetuePagamento: function (valor){
        if (valor > this.saldo){
        console.log("Saldo insuficiente")
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

/*cliente.efetuePagamento(400);*/
cliente.efetuePagamento(40);