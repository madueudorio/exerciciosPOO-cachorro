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
class loja {
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
}
let produtoloja1 = new ProdutoLoja('Fita de Led', 37);
