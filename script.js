const color = document.querySelector("#color");
var colorChange = color.value;
color.onchange = function (){
    colorChange = color.value;
};

const slider = document.getElementById("slider");
let size = 16; // Slider Default

window.onload = function(){
    createGrid(slider.value);
};

slider.onchange = function(){
    reset();
    createGrid(slider.value);
};

function createGrid(size){
    const grid = document.querySelector("#Container");
    grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i<size*size; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id","box");
        grid.appendChild(newDiv);
    }
};

const resetBTN = document.querySelector("#reset");
resetBTN.addEventListener("click",function(){
    reset();
});
function reset(){
    grid.innerHTML=""
    createGrid(slider.value);
}



//let box = document.querySelectorAll("#box")
//box.addEventListener("mousedown", function(e) {
  //  e.target.style.backgroundColor = "black";
//});

const grid = document.querySelector("#Container")
grid.addEventListener("mousemove", e => {
    box = document.elementFromPoint(e.clientX, e.clientY);
    if(box.id == "box"){
        box.style.backgroundColor = colorChange;
    }
});


