let nomes = [
    "jamilton",
    "josé",
    "letícia",
    "maria",
    "carlos",
    "pedro",
    "marcela",
    "carla",
    "carlos"
]

function pesquisarNome(){

    let nomepesquisa = document.getElementById('campoNome').value
    let itensLista = ''
    for(indice in nomes){
        let nome = nomes[indice]

        if( nomepesquisa == nome ){
            itensLista += ` 
                <li class="list-group-item">
                    ${nome}
                </li>`
        }
    }
    document.getElementById('lista').innerHTML = itensLista
}

function carregarNomes(){

    let itensLista = ''
    for(indice in nomes){
        let nome = nomes[indice]
        itensLista += ` 
        <li class="list-group-item">
            ${nome}
        </li>`
    }
    document.getElementById('lista').innerHTML = itensLista
}