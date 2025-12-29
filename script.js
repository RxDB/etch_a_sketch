let grid = document.createElement("div");
let row = document.createElement("div");
let gridSize = 16;





function makeGrid(){
    const hue = Math.floor(Math.random()*360);
    
    for(let i=0;i<gridSize;i++){
        const copy = row.cloneNode(true);
        copy.id = i;
        copy.className = "row";
        document.querySelector(".container").appendChild(copy);
    }
    
    for(let j=0;j<gridSize;j++){
        let k = j;
        for(let i=0;i<gridSize;i++){
            const copy = grid.cloneNode(true);
            copy.style.setProperty("--color",hue);
            copy.classList.add("color");
            copy.classList.add("grid") 
            document.getElementById(k).appendChild(copy);
        }

        
    }
}

function checkGrid(){

    const box = document.querySelectorAll(".grid");
    
    for(let i=0;i<box.length;i++){
        box[i].addEventListener('pointerenter',()=>{
            box[i].classList.add('active');
        });
    }
    
    for(let i=0;i<box.length;i++){
            box[i].addEventListener('pointerleave',()=>{
                setTimeout(()=>{
                    box[i].classList.remove('active');
                },8000)
            });
    }
}

const btn = document.querySelector(".new");

btn.addEventListener('click',()=>{
    gridSize = parseInt(prompt("Enter Grid Size"));
    if(gridSize>100){
        gridSize=0;
        alert("Grid size cannot be greater than 100");
    }
    document.querySelector(".container").textContent = "";
    makeGrid();
    checkGrid();
})

