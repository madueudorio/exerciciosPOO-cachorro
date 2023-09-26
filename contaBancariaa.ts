abstract class contaBancariaa{
    protected numeroConta:string;
    protected saldo:number;
    protected titular:string;

    constructor(numeroConta:string, saldo:number, titular:string){
        this.numeroConta=numeroConta;
        this.saldo=saldo;
        this.titular=titular;
    }

    abstract depositar(valor:number):void;

    abstract sacar(valor:number):void;

    abstract consultarSaldo():number;

}

 class ContaCorrente extends contaBancariaa{
    protected limiteChequeEspecial:number;

    constructor(limiteChequeEspecial:number){
        super("Conta corrente",2000, "eudorio");
        this.limiteChequeEspecial=limiteChequeEspecial;

    }

    depositar(valor: number): void {
        console.log (this.saldo=this.saldo+valor);
    }

    sacar(valor: number): void {
        let msgSaque = " Saque realizado com sucesso!";
        if(valor > this.limiteChequeEspecial){
            msgSaque= " Saldo insuficiente";
        }else{
            this.saldo=this.limiteChequeEspecial-valor;
        msgSaque= " Voce fez um saque de "+ valor+". Seu saldo é de R$ "+ this.saldo;
           
        }
        console.log (msgSaque);
       
    }

    consultarSaldo(): number {
        return this.saldo;
       
    }
   

 }

 class ContaPoupanca extends contaBancariaa{
    constructor(){
        super("Conta corrente",2000,"madu");
    }
   
    depositar(valor: number): void {
        console.log (this.saldo=this.saldo+valor);
    }

    sacar(valor: number): void {
        let msgSaque = " Saque realizado com sucesso!";
        if(valor > this.saldo){
            msgSaque= " Saldo insuficiente";
        }else{
            this.saldo=this.saldo-valor;
        msgSaque= " Voce fez um saque de "+ valor+". Seu saldo é de R$ "+ this.saldo;
           
        }
        console.log (msgSaque);
       
    }

    consultarSaldo(): number {
        return this.saldo;
       
    }
    calcularRendimentoAnual(taxa:number): number{
    return this.saldo + ((this.saldo/100) *10);
   }
   

 }