class Estudante{
    nome: string;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number, notas: number[]){
       this.nome = nome;
       this.idade = idade;
       this.notas = notas;
    }

    notasEstudante(){
       return "Nome:" + this.nome + " Idade:" + this.idade + " Notas:" + this.notas;
    }

    mediaEstudante(){
       let totalNotas = 0;
       let Media = 0;
       for (let i = 0; i < this.notas.length; i++) {
           totalNotas = totalNotas + this.notas[i];
       }
       Media = totalNotas /this.notas.length;

       let msgEstudante = "Parabéns Maria!Sua média é 8.2 e você está aprovada!";
       if (Media < 7) {
           msgEstudante = "Maria, sua média é menor que 7 e você precisa estudar mais para melhorar seu desempenho";

           return msgEstudante;
       }
        return msgEstudante;
}
}
let notas = new Estudante("Madu", 20,[8,7.5,9.2,6.8,9.5]);
console.log(notas.mediaEstudante());