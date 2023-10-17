"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = " Aguardando Preparo";
    StatusPedido["EmPreparo"] = " Em Preparo";
    StatusPedido["SaiuPraEntrega"] = " Saiu para Entrega";
    StatusPedido["Entregue"] = " Entregue";
    StatusPedido["ClienteAusente"] = " Cliente n\u00E3o Localizado";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        console.log("Produtos do Pedidos:");
        for (let index = 0; index < Array.length; index++) {
            console.log("Produto: " + this.produtos[index].nome + " R$" + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("x-tudo", 35);
const outroProdutoPedido = new ProdutoPedido("x-frango", 20);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Statudo atual do pedido:" + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.ClienteAusente);
console.log("Statudo atual do Pedido" + novoPedido.exibirStatus());
novoPedido.exibirProdutosDoPedido();
