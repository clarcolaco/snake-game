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

//interacao com o comando do teclado
//evento: eventListener

document.addEventListener('keydown, update');

//funcao update interacao teclado
//37 left 38 up 39 right 40 down

function update(event) {
    if(event.keyCode == 37 && direction != "right") direction ="left" ;
    if(event.keyCode == 38 && direction != "down") direction ="up" ;
    if(event.keyCode == 39 && direction != "left") direction ="right" ;
    if(event.keyCode == 40 && direction != "up") direction ="down" ;
   
}





//funcao q inicia as duas funcoes para o jogo comecar
function iniciarJogo(){
    //fazer a cobrinha nao sumir
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;





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









