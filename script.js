let grid = document.createElement("div");
let row = document.createElement("div");
let gridSize = 16;
grid.style.width = "50px";
grid.style.height = "50px";
grid.style.border = "1px solid red"




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
            copy.className = "grid";
            document.getElementById(k).appendChild(copy);
        }
        
    }


const box = document.querySelectorAll(".grid");

for(let i=0;i<box.length;i++){
    box[i].addEventListener('mouseenter',()=>{
        box[i].classList.add('active');
    });
}

for(let i=0;i<box.length;i++){
        box[i].addEventListener('mouseleave',()=>{
            setTimeout(()=>{
                box[i].classList.remove('active');
            },1000)
        });
}

const btn = document.querySelector(".new");