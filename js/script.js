
const playBtn = document.getElementById('btn')

let diff_1 = document.getElementById('difficolta-1').value
let diff_2 = document.getElementById('difficolta-2').value
let diff_3 = document.getElementById('difficolta-3').value

playBtn.addEventListener('click', function(){
    let grid= document.getElementById('grid')
    let divItem;

    for(let i = 1; i<=100; i++){
        divItem = document.createElement('div')
        
        grid.appendChild(divItem)
    
        divItem.classList.add('square')

        divItem.innerText=i
    

        divItem.addEventListener('click',function(){
            this.classList.add('azure')
            console.log(this.innerText)
        })
        
    }

})












