const slider = document.getElementById("#slider");
let size = 16; //slide.value

window.onload = function(){
    createGrid(size)
};

function createGrid(size){
    const grid = document.querySelector("#Container");
    grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i<size*size; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id","box")

        

        grid.appendChild(newDiv)
    }
}

//let box = document.querySelector("#box");
//box.addEventListener("hover", function(e) {
  //  e.target.style.backgroundColor = "white";
//});