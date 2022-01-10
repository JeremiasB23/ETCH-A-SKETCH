
function createSquare(){
    for(let i = 0; i < 16; i++){
        const container = document.querySelector(".container");
        const grids = document.createElement('div');  
        grids.className = "FlexChild";
        container.appendChild(grids);
   
    for(let i = 0; i < 16; i++){
        const grids2 = document.createElement('div');
        grids.appendChild(grids2);
        grids2.className = "FlexChildRow";

    }
   
  }  
  
}

let chColor = "black";

function paint(){
    const coloring = document.querySelectorAll('.FlexChildRow');

   for(input of coloring){
    input.addEventListener("mousemove", function(){
       this.style.backgroundColor = chColor;
    });
   }
}

function changeColor(){
    
   const colorPicker = document.querySelector(".colorChose"); 

    colorPicker.addEventListener('input', function(event){
       
        const p = document.querySelectorAll(".FlexChildRow");
        chColor = event.target.value;
    });

}

function Eraser(){

   const eraser = document.querySelector(".eraser");
   eraser.addEventListener('click', function(){
    chColor = "white";
   });

}

function resizeGrid(){

}

function clearSquares(){
    const cleaner = document.querySelector('.cleaner');

    cleaner.addEventListener('click', function(){

        const container = document.querySelectorAll(".FlexChildRow");
        container.style = "white";
    });
         
}

createSquare();
paint();
changeColor();
Eraser();
resizeGrid();
clearSquares();