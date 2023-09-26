"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Desenvolvedor extends Funcionario {
    constructor() {
        super("Desenvolvedor", 2500);
    }
    salarioMensal() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    constructor() {
        super("Gerente", 3000);
    }
    salarioMensal() {
        return this.salario + ((this.salario / 100) * 10);
    }
}
const desenvolvedor = new Desenvolvedor();
console.log("O salário do desenvolvedor é de :" + desenvolvedor.salarioMensal());
const gerente = new Gerente();
console.log("O salário do gerente é de :" + gerente.salarioMensal());
