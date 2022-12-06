
let grid= document.getElementById('grid')
let divItem;

function createDiv (){
    for(let i = 1; i<=100; i++){
        divItem = document.createElement('div')
        
        grid.appendChild(divItem)
    
        divItem.classList.add('square')
    
        divItem.innerText= [i]
        
    }

}

createDiv()









