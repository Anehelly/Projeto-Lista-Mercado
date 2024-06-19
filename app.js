let lista = [];
let frutas = [];

function adicionar(){
    let produto = document.getElementById('iitem');
    let item = produto.value////PARA INPUT USA VALUE, 
    //INNERTEXT PARA DIV

    let categoria = document.getElementById('icategoria');
    let classe = categoria.value

  
    if(classe === 'frutas'){
        frutas.push(item);        
    }

   
}

function mostrarLista(){
    let listaCompleta = document.querySelector('p')
    listaCompleta.innerHTML= (`Lista de compras: ${frutas.join(', \n')}`)
}


