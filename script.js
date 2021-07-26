var listaDeProduto = [];
var listaDeCliente = [];

document.getElementById('formCadastroProduto').addEventListener('submit', (e)=>{
    e.preventDefault();
    let form = document.forms.formProduto;
    let produto = {
        'produto': form.produto.value,
        'preco': form.preco.value,
        'descricao': form.descricao.value
    };
    addProduto(produto);
});

document.getElementById('formCadastroCliente').addEventListener('submit', (e)=>{
    e.preventDefault();
    let form = document.forms.formCliente;
    let cliente = {
        'nome': form.nome.value,
        'cpf': form.cpf.value,
        'endereco': form.endereco.value,
        'cep': form.cep.value,
        'estado': form.estado.value,
        'cidade': form.cidade.value,
        'telefone': form.telefone.value
    };
    addCliente(cliente);
    
});

function addProduto(produto){
    if(localStorage.getItem('produtos') != null){
        let list = JSON.parse(localStorage.getItem('produtos'));
        list.push(produto);
        localStorage.setItem('produtos', JSON.stringify(list));
    }else{
        listaDeProduto.push(produto);
        localStorage.setItem('produtos', JSON.stringify(listaDeProduto));
    }
        loadProdutos();

        document.getElementById("msg").innerHTML = "<div class='alert alert-info alert-dismissible fade show mt-2 p-2' role='alert'><small><strong>Cadastrado com sucesso!</strong> <br> </small><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
    setTimeout(function(){
        let el = document.getElementById('msg');
        el.removeChild(el.childNodes[0]);
    }, 3000);

    clearInputProduto();
}



function addCliente(cliente){
    if(localStorage.getItem('clientes') != null){
        let list = JSON.parse(localStorage.getItem('clientes'));
        list.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(list));
    }else{
        listaDeCliente.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(listaDeCliente));
    }
        loadClientes();

    document.getElementById("msgCliente").innerHTML = "<div class='alert alert-info alert-dismissible fade show mt-2 p-2' role='alert'><small><strong>Cadastrado com sucesso!</strong> <br> </small><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
    setTimeout(function(){
        let el = document.getElementById('msgCliente');
        el.removeChild(el.childNodes[0]);
    }, 3000);

    clearInputCliente();
}

function loadProdutos(){
    document.getElementById('callProdutos').innerHTML = '';
    let list = JSON.parse(localStorage.getItem('produtos'));
    list.map((data)=>{
        document.getElementById('callProdutos').innerHTML += `<tr><td>${data.produto}</td> <td>${data.preco}</td> <td>${data.descricao}</td> <td> </td> </tr>`;
    });
}
loadProdutos();

function loadClientes(){
    document.getElementById('callClientes').innerHTML = '';
    let list = JSON.parse(localStorage.getItem('clientes'));
    list.map((data)=>{
        document.getElementById('callClientes').innerHTML += `<tr><td>${data.nome}</td> <td>${data.cpf}</td> <td>${data.endereco}</td>  <td> </td> </tr>`;
    });
}


loadClientes();

function clearInputProduto(){
    let form = document.forms.formProduto;
    form.produto.value = '';
    form.preco.value = '';
    form.descricao.value = '';
}

function clearInputCliente(){
    let form = document.forms.formCliente;
    form.nome.value = '';
    form.cpf.value = '';
    form.endereco.value = '';
    form.cep.value = '';
    form.cidade.value = '';
    form.telefone.value = '';
}
