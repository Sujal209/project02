var timer=60;
var score =0;
var randHit;


function getScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

function bubbleMaker(){
    var bubbles="";

    for(var i=0; i<=139; i++){
        var rand= Math.floor(Math.random()*10);
        bubbles+=` <div class="circle">${rand}</div>`;
    }
    document.querySelector(".bottom").innerHTML=bubbles;
}

function runTimer(){
    var timerInt=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }else{
            clearInterval(timerInt);
            document.querySelector(".bottom").innerHTML=`<h1>Gamer Over</h1>`;
        }
    }, 1000)

}

function newNo(){
    randHit = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=randHit;
}

document.querySelector(".bottom").addEventListener("click", function(dets){
    var clickChk = Number(dets.target.textContent);
    if(clickChk === randHit){
        getScore();
        bubbleMaker();
        newNo()
    }
})


newNo();
runTimer();
bubbleMaker();
