let lista = [];
let frutas = [];

function adicionar(){
    let produto = document.getElementById('iitem');
    let item = produto.value////PARA INPUT USA VALUE, 
    //INNERTEXT PARA DIV

    let categoria = document.getElementById('icategoria');
    let classe = categoria.value

    let adicionado = document.querySelector('#adicionado')
    adicionado.innerHTML = ('Novo produto adicionado!')
    
    lista.push(item);  
    
    limparCampo()    
    console.log(lista)  

}



function limparCampo(){
    let produto = document.getElementById('iitem');
    produto.value = '';
    let categoria = document.getElementById('icategoria');
    categoria.value = '';
    let listaCompleta = document.querySelector('p')
    listaCompleta.innerHTML= '';
    
}

function criarNova(){
    
        lista = []; // Limpa a lista de compras
        document.getElementById('adicionado').textContent = '';
        document.getElementById('listaCompleta').textContent = 'Lista de compras: Adicione novos itens à sua lista';
    
    
}

function mostrarLista(){
    limparCampo()
    let listaCompleta = document.querySelector('p')
    listaCompleta.innerHTML= (`Lista de compras: ${lista.join(', ')}`)
    let adicionado = document.querySelector('#adicionado')
    adicionado.innerHTML = '';
}

function mostrarPorCategoria(){

}
