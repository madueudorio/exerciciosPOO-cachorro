class produto{
    produto: string;
    preco: number;

    constructor(produto: string, preco: number){
        this.produto = produto;
        this.preco = preco;
    }

    apresentarProduto(){
        return "-O " + this.produto + " é um ótimo produto para aqueles que querem rapidez e precisão no seu dia a dia, custanto apenas R$" 
        + this.preco + " e tendo um bom custo benefício";
    }

    apresentarDesconto(desconto: number){
      let valorDesconto = (this.preco/100)* desconto;
      return "Desconto de " + desconto + "% aplicado. Novo Preço: R$" + (this.preco - valorDesconto);


    }
}
let produto1 = new produto("Samsung A51 128gb", 6000);
let produto2 = new produto(" Notebook", 11000);
let produto3 = new produto("aplle watch", 4000);

console.log(produto1.apresentarProduto());
console.log(produto2.apresentarProduto());
console.log(produto3.apresentarProduto());

console.log(produto1.apresentarDesconto(10))
console.log(produto2.apresentarDesconto(10))
console.log(produto3.apresentarDesconto(10))
