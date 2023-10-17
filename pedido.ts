enum StatusPedido{
    AguardandoPreparo = " Aguardando Preparo",
    EmPreparo = " Em Preparo",
    SaiuPraEntrega = " Saiu para Entrega",
    Entregue = " Entregue",
    ClienteAusente = " Cliente não Localizado"
}

class ProdutoPedido{
    nome: string;
    valor: number;
    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido{
    private produtos:ProdutoPedido[];
    private status: StatusPedido;
    constructor(){
        this.produtos = [];
        this.status =StatusPedido.AguardandoPreparo;
    }

    adicionarProduto(produto:ProdutoPedido){
        this.produtos.push(produto);
        return "Produto adicionado com sucesso!"
    }

    atualizarStatus(status : StatusPedido){
        this.status = status;
    }
    exibirStatus(){
        return this.status
    }

    exibirProdutosDoPedido(){
        console.log("Produtos do Pedidos:");
        for (let index = 0; index< Array.length; index++){
            console.log("Produto: " + this.produtos[index].nome + " R$" + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("x-tudo", 35);
const outroProdutoPedido = new ProdutoPedido("x-frango", 20);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Statudo atual do pedido:" + novoPedido.exibirStatus())
novoPedido.atualizarStatus(StatusPedido.ClienteAusente);
console.log("Statudo atual do Pedido" + novoPedido.exibirStatus())
novoPedido.exibirProdutosDoPedido();