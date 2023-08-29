"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitacao = " ja posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitacao = " não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos, e " + msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("Minha(s) comidas(s) favorita(s) são");
        for (let i = 0; i < this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}
let pessoa1 = new Pessoa("Maria", 17, [" batata ", " batatão "]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
