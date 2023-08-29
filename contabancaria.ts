class ContaBancaria{
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositarSaldo(deposito: number){
        let valorSaldo = this.saldo + deposito;
        this.saldo = valorSaldo;
        return "Você depositou R$" + deposito + ", seu novo saldo é de R$" + valorSaldo;
    }

    sacarSaldo(saque: number){
        let msgSaque = '';
        if(saque > this.saldo){
            msgSaque= " Saldo insuficiente";
        }
        else{
            let valorSaldo2=(this.saldo-saque);
            this.saldo = valorSaldo2;
            msgSaque = " Saque realizado com sucesso!" + this.titular+" Você fez um saque de R$ "+saque+". Seu saldo é de R$ "+ this.saldo;
        }

       

        return msgSaque;

           
       
    }

    consultarSaldo(){
        return "Seu saldo é de " + this.saldo;
    }
}


let minhaConta = new ContaBancaria("Ricardo,", 1000);
console.log(minhaConta.consultarSaldo());
console.log(minhaConta.depositarSaldo(500));
console.log(minhaConta.consultarSaldo());
console.log(minhaConta.sacarSaldo(200));
console.log(minhaConta.sacarSaldo(1500));
console.log(minhaConta.consultarSaldo());

let minhaConta2 = new ContaBancaria("Lucivânia,", 11000);
console.log(minhaConta2.consultarSaldo());
console.log(minhaConta2.depositarSaldo(3000));
console.log(minhaConta2.consultarSaldo());
console.log(minhaConta2.sacarSaldo(2000));
console.log(minhaConta2.sacarSaldo(1500));
console.log(minhaConta2.consultarSaldo());

let minhaConta3 = new ContaBancaria("Danilinho,", 23465);
console.log(minhaConta3.consultarSaldo());
console.log(minhaConta3.depositarSaldo(5080));
console.log(minhaConta3.consultarSaldo());
console.log(minhaConta3.sacarSaldo(20000));
console.log(minhaConta3.sacarSaldo(1456));
console.log(minhaConta3.consultarSaldo());