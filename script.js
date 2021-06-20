let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //rederiza o desenho
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";




function criarBG(){
    context.fillStyle = "lightpink";
    context.fillRect(0, 0, 16 * box, 16 * box);
}



//cobrinha: array de coordenadas (adicionar um e tirar o ultimo)

function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}



//funcao q inicia as duas funcoes para o jogo comecar
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    //posicao inicial
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // plano cartesiano direita aumenta esq reduz
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    //up decre. down aumt.
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;


    //funcao que tira ultimo elemento do array > funcao pop

    snake.pop();

    //criar nova cabeça da cobrinha - unshift

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
    



}

//intervalo tempo
let jogo = setInterval(iniciarJogo, 100);









