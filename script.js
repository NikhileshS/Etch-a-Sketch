size = 0;
// This is used to initialize the size of the grid
function gridsize(){
    if(size === 0){
size = prompt('Please Enter the size of the grid (100 max)');
creategrid(size);
}
        
    else{
        deletegrids();
        size = prompt('Please Enter the size of the grid (100 max)');
        creategrid(size);
    }
}

function creategrid(size){
    const container = document.querySelector('.container');
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box)

for (let i=1; i<size;++i)
{
    const column = document.createElement('div');
    column.classList.add('column');
    box.appendChild(column);
    
    for (let j=1; j<size;++j)
    {
        
        const row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);
    }
}
}

// Selects all the row element and adds event listener to them
function gridselector(){

const grids = document.querySelectorAll('.row');
grids.forEach(
    (row) => {
    row.addEventListener('mouseover', () => {
        row.setAttribute('style','background-color : black');
    }
     )
} 
)
}

// This function combines the gridsize and the selector

function etch(){
    gridsize();
    gridselector();
}

// This function deletes the existing grid

function deletegrids(){
    const deletegrid = document.querySelector('.box');
    const container = document.querySelector('.container')
    container.removeChild(deletegrid)

}


const btn = document.querySelector('.size');
btn.addEventListener('click',etch);
const deletebutton = document.querySelector('.delete');
deletebutton.addEventListener('click',deletegrids);
