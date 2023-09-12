"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoCompras {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produtos) {
        this.produtos.push(produtos);
    }
    removerProduto(produtos) {
        this.produtos = this.produtos.filter(item => item.nome != produtos.nome);
        return "Produto removido";
    }
    calcularTotal() {
        let valorTotal = 0;
        for (const item of this.produtos) {
            valorTotal = valorTotal + item.preco;
        }
        return valorTotal.toFixed(2);
    }
}
class Loja {
    constructor() {
        this.estoqueProdutos = [];
        this.carrinho = new CarrinhoCompras();
    }
    adicionarProdutoEstoque(produto) {
        this.estoqueProdutos.push(produto);
    }
    removerProdutoEstoque(produtos) {
        this.estoqueProdutos = this.estoqueProdutos.filter(item => item.nome !== produtos.nome);
        return "Produto removido do estoque da loja";
    }
    adicionarProdutoNoCarrinho(produto) {
        const produtoEncontrado = this.estoqueProdutos.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerProduto(produto) {
        return this.carrinho.removerProduto(produto);
    }
}
const produtoLoja1 = new ProdutoLoja("casa de boneca", 200);
const produtoLoja2 = new ProdutoLoja("carrinho Hot Wheels", 82);
const produtoLoja3 = new ProdutoLoja("sapato", 75);
const produtoLoja4 = new ProdutoLoja("vestido", 186);
const loja = new Loja();
console.log(loja.adicionarProdutoEstoque(produtoLoja1));
console.log(loja.adicionarProdutoEstoque(produtoLoja2));
console.log(loja.adicionarProdutoEstoque(produtoLoja3));
console.log(loja.adicionarProdutoEstoque(produtoLoja4));
console.log(loja.adicionarProdutoNoCarrinho(produtoLoja1));
console.log(loja.adicionarProdutoNoCarrinho(produtoLoja2));
console.log(loja.adicionarProdutoNoCarrinho(produtoLoja3));
console.log(loja.adicionarProdutoNoCarrinho(produtoLoja4));
let produtoloja1 = new ProdutoLoja('Fita de Led', 37);
