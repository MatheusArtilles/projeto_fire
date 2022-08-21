let favoritosArea = document.getElementById('areaFavoritos')
let secaoFavoritos = document.getElementById('secaofavoritos')


function abrelista(){
    
    favoritosArea.style.display = "block"
}
function fechar(){
    favoritosArea.style.display = "none"
}

class Lista {
    
    constructor(nome){
        this.nome = nome
    }
    
    adicionar(id){
        
        let ide = document.getElementById(id).innerHTML
        let li = document.createElement('li')
        li.innerHTML = ide
        li.id = id
        
        let lista = this.pega()
    
        let btnExcluir = document.createElement('button')
        btnExcluir.classList.add('botacao')
        btnExcluir.innerHTML = '<i class="fa-solid fa-trash fa-2x"></i>'
        
        
        secaoFavoritos.appendChild(li)
        btnExcluir.setAttribute(`onclick`, `${lista}.limpar("`+li.id+`")`)
        li.appendChild(btnExcluir)
        document.getElementById('heartcheck').style.display = "block"
        document.getElementById('heart').style.display = "none"
        
        return li
        
       
    
        
        
    }
    pega(){
        let lista = 'lista'+this.nome
        return lista
    }
    limpar(id){
        let li = document.getElementById(''+ id + '')
        if(li){
            secaoFavoritos.removeChild(li)
            li.style.display = "none"
            
        }
        
        document.getElementById('heartcheck').style.display = "none"
        document.getElementById('heart').style.display = "block"
        
        
        /**/
        
    }
    
}
lista1 = new Lista(1)
lista2 = new Lista(2)
lista3 = new Lista(3)
lista4 = new Lista(4)
lista5 = new Lista(5)
lista6 = new Lista(6)
lista7 = new Lista(7)
lista8 = new Lista(8)