abstract class Funcionario{

    private nome: string;
    protected salario: number;


    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
    abstract salarioMensal(): number;
}

class Desenvolvedor extends Funcionario {

    constructor() { super("Desenvolvedor", 2500);
        
    }

    salarioMensal(): number {
        return this.salario;
    }

}

class Gerente extends Funcionario {
    constructor() {
        super("Gerente", 3000)
    }

    salarioMensal(): number {
    return this.salario + ((this.salario/100) *10);
      
    }

}
const desenvolvedor = new Desenvolvedor();
console.log("O salário do desenvolvedor é de :"+ desenvolvedor.salarioMensal());

const gerente = new Gerente();
console.log("O salário do gerente é de :"+ gerente.salarioMensal());
