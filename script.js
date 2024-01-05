//declarando variaveis 
let X = document.querySelector(".X");
let O = document.querySelector(".O");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelectorAll("#message");
let messageText = document.querySelectorAll("#message p");
let secondPlayer;
//contador de jogadas
let player1 = 0;
let player2 = 0;


//evento click nas caixas
for(let i = 0; i < boxes.length; i++){
   //quando clica na caixa
     boxes[i].addEventListener("click", function(){
        let el = checkEl(player1, player2);
      
    //verificas se já existe algo na caixa
        if(this.childNodes.length == 0) {

           let cloneEl = el.cloneNode(true);

           this.appendChild(cloneEl);

    //computar jogadas
           if(player1 == player2){
                player1++;
            } else {
                player2++;
            }
        }
    });
}

//confimar quem vai jogar
function checkEl(player1, player2){
   if(player1 == player2) {
            el = X;
        } else {
            el = O;
        }
        return el;
}