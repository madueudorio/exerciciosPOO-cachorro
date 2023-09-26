abstract class Animal {
    private nome: string;
    private qtdPatas: number;


    constructor(nome: string, qtdsPatas: number) {
        this.nome = nome;
        this.qtdPatas = qtdsPatas;
    }

    abstract fazerBarulho(): void;

    apresentar(): void {
        console.log("Este é um " + this.nome + "com" + this.qtdPatas + "patas");
    }

}

class Dog extends Animal {
    constructor() {
        super("Cachorro", 4)
    }

    fazerBarulho(): void {
        console.log(" O cachorro está latindo ");
    }

}

class Cat extends Animal {
    constructor() {
        super(" Gato ", 4);
    }

    fazerBarulho(): void {
        console.log(" O gato está miando ");


    }

}

class Bird extends Animal {
    constructor() {
        super(" Passaro ", 2);
    }

    fazerBarulho(): void {
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