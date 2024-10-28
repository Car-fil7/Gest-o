class Produto {
    constructor(){
        this.id=1;
        this.arrayProduto=[];
    }

    salvar(){
        let produto= this.lerDados();
        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        this.listarTabela();
    }

    listarTabela(){
        let tbody = document.getElementById('tbody');

        tbody.innerText='';

        for (let i = 0; i < this.arrayProduto.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_data = tr.insertCell();
            let td_descricao = tr.insertCell();
            let td_fornecedor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProduto[i].id;
            td_data.innerText = this.arrayProduto[i].data;
            td_descricao.innerText = this.arrayProduto[i].descricao;
            td_fornecedor.innerText = this.arrayProduto[i].fornecedor;
        }
    }

    adicionar(Produto){
        this.arrayProduto.push(produto);
        this.id++;
    }

    lerDados(){

        let produto={}

        produto.data=document.getElementById('data').value;
        produto.descricao=document.getElementById('descricao').value;
        produto.fornecedor=document.getElementById('fornecedor').value;

        return produto;
    }

    validaCampos(produto){
        let men = '' ;

        if (produto.data == '') {
            men+='- informe o nome do produto \n';
        }
        if (produto.descricao == '') {
            men+='- informe o preço do produto \n';
        }
        if (produto.fornecedor == '') {
            men+='- informe o nome do produto \n';
        }

        if (men !='') {
            alert(men);
            return false;            
        }

        return true;
    }
}