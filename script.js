var COLORACTIVE = true;
var RGBACTIVE = false;

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





const grid = document.querySelector("#Container")
grid.addEventListener("mousemove", e => {
    box = document.elementFromPoint(e.clientX, e.clientY);
    if(box.id == "box"){
        if (COLORACTIVE == true){
            box.style.backgroundColor = colorChange;
        }
        else if (RGBACTIVE == true){
            var randColr = Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = "#"+ randColr;
        }
        
    }
});



const rgb = document.querySelector("#rgb");
rgb.addEventListener("click",function(){
    COLORACTIVE = false;
    RGBACTIVE = true;
});

const colorBtn = document.querySelector("#colorMode");
colorBtn.addEventListener("click", function() {
    COLORACTIVE = true;
    RGBACTIVE = false;
});
