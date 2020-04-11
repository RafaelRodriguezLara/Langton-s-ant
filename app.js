const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const start = document.getElementById("start");

canvas.height=1000;
canvas.width=1000;

var ant= {
    width: 99,
    height: 99,
    direction: "n"
}

//0 is black   1 is red

var cells = [];

for(let i =0;i<200;i++){
    let row = [];
    for(let z=0; z<200;z++){
        row.push("black");
    }
    cells.push(row);
}


//cells[ant.height][ant.width] = "green";
cells[98][99]="red";


function updateBoard(){
for(let height = 0;height<200;height++){
    for(let width=0;width<200;width++){
        ctx.fillStyle=cells[height][width];
        ctx.fillRect(width*5,height*5,5,5);
    }
}
}

updateBoard();

function goUp(){
    let destination_color = cells[ant.height-1][ant.width];
    if(destination_color=="red"){
        cells[ant.height-1][ant.width]="black";
        ant.direction = "w";
    } else if(destination_color=="black"){
        cells[ant.height-1][ant.width]="red";
        ant.direction = "e";
    }
    ant.height=ant.height-1;
    //cells[ant.height][ant.width] = "green";
}

function goDown() {
    let destination_color = cells[ant.height + 1][ant.width];
    if (destination_color == "red") {
        cells[ant.height + 1][ant.width] = "black";
        ant.direction = "e";
    } else if (destination_color == "black") {
        cells[ant.height + 1][ant.width] = "red";
        ant.direction = "w";
    }
    ant.height = ant.height + 1;
    //cells[ant.height][ant.width] = "green";
}
//rojo izquierda negro derecha
function goLeft() {
    let destination_color = cells[ant.height][ant.width-1];
    if (destination_color == "red") {
        cells[ant.height][ant.width-1] = "black";
        ant.direction = "s";
    } else if (destination_color == "black") {
        cells[ant.height][ant.width-1] = "red";
        ant.direction = "n";
    }
    ant.width = ant.width-1
    //cells[ant.height][ant.width] = "green";
}

function goRight() {
    let destination_color = cells[ant.height][ant.width+1];
    if (destination_color == "red") {
        cells[ant.height][ant.width + 1] = "black";
        ant.direction = "n";
    } else if (destination_color == "black") {
        cells[ant.height][ant.width + 1] = "red";
        ant.direction = "s";
    }
    ant.width = ant.width + 1
    //cells[ant.height][ant.width] = "green";
}


start.addEventListener("click", function(){

    
    setInterval(()=>{
        console.log(ant.direction);
        if(ant.direction=="n"){
            goUp();
        }
        else if (ant.direction == "s") {
            goDown();
        }
        else if (ant.direction == "w") {
            goLeft();
        }
        else if (ant.direction == "e") {
            goRight();
        }
        updateBoard();
    }, 10);

});
