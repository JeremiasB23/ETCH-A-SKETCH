let columnsAndRows = 16;
let Size = 0;

function createSquare(){
    
    for(let i = 0; i < columnsAndRows; i++){
        const container = document.querySelector(".container");
        const grids = document.createElement('div');  
        grids.className = "FlexChild";
        container.appendChild(grids);
   
    for(let i = 0; i < columnsAndRows; i++){
        const grids2 = document.createElement('div');
        grids.appendChild(grids2);
        grids2.className = "FlexChildRow";
        grids2.style.width = Size;
        grids2.style.height = Size;

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

    columnsAndRows = window.prompt("INTRODUCE THE NUMBER OF COLUMNS AND ROWS(JUST ONE NUMBER DIFINE BOTH)");

    Size = 512 / columnsAndRows+ "px";
    console.log(Size); 

//columnsAndRowsWH = 512 / numero
}

function clearSquares(){
    const cleaner = document.querySelector('.cleaner');
    const container = document.querySelectorAll(".FlexChildRow");
    
    cleaner.addEventListener('click', function(){

        for(input of container){
            input.style.backgroundColor = "white";
        }
    });
         
}

function Rainbow(){//!ARREGLAR= UNA VEZ QUE YA APRETE EL BOTON NO PARA, ARREGLAR ESO

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', function(){

    const coloring = document.querySelectorAll('.FlexChildRow');

   for(input of coloring){
    input.addEventListener("mousemove", function(){
       this.style.backgroundColor = chColor;

       let r = Math.random(0,255)*255;
        let g = Math.random(0,255)*255;
        let b = Math.random(0,255)*255;
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);

        chColor = `rgb(${r}, ${g}, ${b})`;
    });
   }

});       
    
}

resizeGrid();
createSquare();
paint();
changeColor();
Eraser();
clearSquares();
Rainbow();