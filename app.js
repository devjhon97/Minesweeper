var board = document.getElementById("board");
var btn = document.getElementById("btn");
var nivel = document.getElementsByName("nivel");
var start = document.getElementById('start');
var classtiles = document.querySelector(".tiles");

if(window.innerWidth < window.innerHeight){
    board.style.width = (window.innerWidth-20)+"px";
    board.style.height = (window.innerWidth-20)+'px';
}else{
    board.style.width = (window.innerHeight-20)+'px';
    board.style.height = (window.innerHeight-20)+'px';
}

btn.onclick = () => {
    let tiles;

    for(let node of nivel){
        if(node.checked){
            tiles = node.parentNode.id;
            break;
        }
    }

    createGame(tiles);
}

function createGame(area){
    start.style.display = "none";
    board.style.display = "block";

    let tiles = Array.from({length: area}, ()=> Array.from({length: area}, ()=> document.createElement("div")));

    for(let row = 0; row < tiles.length; row++){
        for(let column = 0; column < tiles[row].length; column++){
            tiles[row][column].classList.add("tiles");
            classtiles.style.width = board.offsetWidth/area+"px";
            classtiles.style.height = board.offsetHeight/area+"px";
            board.appendChild(tiles[row][column]);
        }
    }
}