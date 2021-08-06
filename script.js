const mainDiv = document.querySelector('.mainDiv');
const clearButton = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const colour = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');

let size = 4;
let COLOR = 0;

function createPad(noOfSq=size) {

    while (mainDiv.firstChild) {
        mainDiv.firstChild.remove();
    }
    //let str = 'repeat(' + noOfSq + ', 1fr)';
    //console.log(str);
    // mainDiv.style.gridTempRows = `repeat(${noOfSq}, 1fr)`;
    // mainDiv.style.gridTempColumns = `repeat(${noOfSq}, 1fr)`;
    let col = getComputedStyle(mainDiv);
    console.log(col.getPropertyValue('grid-template-rows'));
    console.log(col.getPropertyValue('grid-template-columns'));
    for (let i = 0; i< noOfSq*noOfSq; i++) {
        const div = document.createElement('div');
        div.className = 'divs';
        let size = 800/noOfSq;
        size += 'px';
        div.style.width = size;
        div.style.height = size;
        div.style.backgroundColor = 'white';
        mainDiv.appendChild(div);
    }
    hover();
} 

function hover() {
    let divisions = document.querySelectorAll('.divs');
    divisions.forEach((div) => {
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = getColor(COLOR);
        });
    });
}

function getColor(id) {
    if (id == 0) {
        return 'rgb(0,0,0)';
    } else if (id==1) {
        return 'rgb(255,255,255)';
    }else {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);

        return 'rgb(' + r +',' + g + ',' + b + ')'; 
    }
        
}

function reset() {
    let divisions = document.querySelectorAll('.divs');
    divisions.forEach(div => {
        div.style.backgroundColor = 'white';
        });
}


clearButton.addEventListener('click',reset);

clearButton.addEventListener('click', ()=> {
    let noOfSq = prompt("Size");
    size = parseInt(noOfSq);
    createPad(size);
});

eraser.addEventListener('click',()=> {
    COLOR = 1;
    hover();
});

colour.addEventListener('click', () => {
    COLOR = 0;
    hover();
});

rainbow.addEventListener('click', ()=>{
    COLOR = 2;
    hover();
});


createPad(size);






