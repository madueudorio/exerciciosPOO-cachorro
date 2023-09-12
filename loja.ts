class ProdutoLoja {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;

    }
}
class CarrinhoCompras {
    produtos: ProdutoLoja[] = [];
    constructor() {}

    adicionarProduto(produtos: ProdutoLoja) {
        this.produtos.push(produtos);

    }
    removerProduto(produtos: ProdutoLoja) {
        this.produtos = this.produtos.filter(item => item.nome != produtos.nome);
        return "Produto removido";

    }

    calcularTotal(){
        let valorTotal = 0;
        for(const item of this.produtos){
        valorTotal = valorTotal + item.preco;
        }
        return valorTotal.toFixed(2);
    }
}

class loja {
    estoqueProdutos: ProdutoLoja[] = [];
    carrinho = new CarrinhoCompras();

    adicionarProdutoEstoque(produto: ProdutoLoja){
    this.estoqueProdutos.push(produto);
    }

    removerProdutoEstoque(produtos: ProdutoLoja){
        this.estoqueProdutos = this.estoqueProdutos.filter(item => item.nome !== produtos.nome);
            return "Produto removido do estoque da loja";
    }
   adicionarProdutoNoCarrinho(produto: ProdutoLoja){
   const produtoEncontrado = this.estoqueProdutos.find(item => item.nome == produto.nome);

   if (produtoEncontrado){
    this.carrinho.adicionarProduto(produto);
    return "Produto adicionado ao carrinho de compras";
   }

   else{
    return "Produto não encontrado no estoque";
   }
   }


}
let produtoloja1 = new ProdutoLoja('Fita de Led',37);
