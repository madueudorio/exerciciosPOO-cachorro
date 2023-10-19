class ProdutoLoja {
    nome: string;
    preco: number;
    constructor(nomeDoProduto: string, precoDoProduto: number) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}

class CarrinhoDeCompras {
    produtosDoCarrinho: ProdutoLoja[];
    constructor() {
        this.produtosDoCarrinho = [];
    }

    adicionarProduto(produto: ProdutoLoja){
        this.produtosDoCarrinho.push(produto);
    }

    excluirProduto(nomeDoProduto:string){
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) =>item.nome !== nomeDoProduto);
    }

    calcularValorTotal(){
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++){
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProdutos(){
        console.log("Produtos do Carrinho");
        for (let i =0; i < this.produtosDoCarrinho.length; i++){
            console.log("Produto:" + this.produtosDoCarrinho[i].nome + "R$" + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
}


    
}

class Loja {
    produtosDoEstoque: ProdutoLoja[] = [];
    carrinhoDeCompra = new CarrinhoDeCompras();

    constructor(){

    }

    adicionarProdutoAoEstoque(produto: ProdutoLoja){
    this.produtosDoEstoque.push(produto);
    }

    removerProdutoDoEstoque(produto: ProdutoLoja){
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome)
    }

    adicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome);
        if(produtoEncontrado){
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else{
            return "Produto não encontrado no estoque da loja"; 
        }

    }
    
    removerProdutoDoCarrinho(produto: ProdutoLoja){
        this.carrinhoDeCompra.excluirProduto(produto.nome);

    }

    exibirProdutosCariinho(){
        this.carrinhoDeCompra.exibirProdutos();
    }
}

const produtoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const produtoLoja2 = new ProdutoLoja("Calça", 49.99);
const produtoLoja3 = new ProdutoLoja("Sapato", 79.99);
const produtoLoja4 = new ProdutoLoja("Meia", 20.00);

//Criando a Loja
const minhaLoja = new Loja();


//Adicionando Produto ao Estoque
minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja4);


//Adicionando Produto ao Carrinho de Compras
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);


//Remover Produto Do Carrinho de Compra
minhaLoja.removerProdutoDoCarrinho(produtoLoja4);


//Remover Produto do Estoque da Loja
minhaLoja.removerProdutoDoEstoque(produtoLoja4);


//Exibindo Produtos do Carrinho De Compra
minhaLoja.exibirProdutosCariinho();


//Exibindo Valor Total do Carrinho
console.log("Total do Carrinho de Compras: R$ " + minhaLoja.carrinhoDeCompra.calcularValorTotal());