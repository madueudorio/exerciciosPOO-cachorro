"use strict";
class Animal {
    constructor(nome, qtdsPatas) {
        this.nome = nome;
        this.qtdPatas = qtdsPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + "com" + this.qtdPatas + "patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log(" O cachorro está latindo ");
    }
}
class Cat extends Animal {
    constructor() {
        super(" Gato ", 4);
    }
    fazerBarulho() {
        console.log(" O gato está miando ");
    }
}
class Bird extends Animal {
    constructor() {
        super(" Passaro ", 2);
    }
    fazerBarulho() {
        console.log(" O Passaro está cantando ");
    }
}
const dog = new Dog();
dog.apresentar();
dog.fazerBarulho();
const cat = new Cat();
cat.apresentar();
cat.fazerBarulho();
const bird = new Bird();
bird.apresentar();
bird.fazerBarulho();
