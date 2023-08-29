class funcionario{
    funcionario: string;
    cargo: string;
    salario: number;
    inss: number;
    ir: number;
    aumento: number;
   

    constructor(funcionario: string, cargo: string, salario: number, inss: number, ir: number, aumento: number)
    {
        this.funcionario = funcionario;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
        this.aumento = aumento;
    }

    apresentarFuncionario(){
        return "Nome: " + this.funcionario + " Cargo: " +  this.cargo + " Salário: " + this.salario;
    }
    apresentarImposto1(inss: number, ir: number){
        let valorINSS = (this.salario/100) * inss;
        let valorIR = (this.salario/100 )* ir;
        let total = (valorINSS + valorIR)
        return " Salario Bruto: " + this.salario + "," + " Imposto do INSS de " + inss + "%, com valor de: R$" + valorINSS +
         ", " + "Imposto de Renda de " + ir + "%, com valor de: R$" + valorIR + ", " +       "Total de Impostos: R$"+ (valorINSS + valorIR) + ", " + "Salário Líquido: R$" + (this.salario - total);
    }
    
 
    aumentarSalario(){
        let aumento = (this.salario/100) * this.aumento;
        return this.funcionario + " seu novo salario é de R$" + (this.salario + aumento);
    
        
    }

}
let funcionario1 = new funcionario("Ana Silva", "Analista de Vendas", 3000, 11, 7.5,10);
let funcionario2 = new funcionario("Duda", "Medico Legista", 21750, 11, 7.5,10);

console.log(funcionario1.apresentarFuncionario());
console.log(funcionario1.apresentarImposto1(11, 7.5));
console.log(funcionario1.aumentarSalario());

console.log(funcionario2.apresentarFuncionario());
console.log(funcionario2.aumentarSalario());