var board = document.getElementById("board");
var btn = document.getElementById("btn");
var nivel = document.getElementsByName("nivel");
var start = document.getElementById('start');

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
            tiles = node.parentNode.id**2;
            break
        }
    }

    createGame(tiles);
}

function createGame(tiles){
    start.style.display = "none";
    board.style.display = "block";
}