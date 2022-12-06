


let grid= document.getElementById('grid')

for(let i = 1; i<=100; i++){
    let divItem= document.createElement('div')
    
    grid.appendChild(divItem)

    divItem.classList.add('square')

    divItem.innerHTML= [i]
    


}

