const p1score=document.querySelector('#p1score');

const p2score=document.querySelector('#p2score');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

let playto = document.querySelector('#playto');

let p1 = 0;
let p2 = 0;
let winningscore=playto;
let gameover=false;

btn1.addEventListener('click',function(){
    if(!gameover){
        p1 = p1 + 1;
        p1score.textContent = p1;
        if(p1===winningscore){
            gameover=true;
            p1score.style.color='green';
            p2score.style.color='red';
           
        }
    }
   
})

playto.addEventListener('change',function(){

    winningscore = parseInt(this.value);    // its full event that we change the select value,also when we change the value,we want all values to be reset,so make a function of reset and use it where where needed
    reset();
})


btn2.addEventListener('click',function(){

    if(!gameover){
        p2 = p2 + 1;
        p2score.textContent = p2;
        if(p2===winningscore){
            gameover=true;
            p2score.style.color='green';
            p1score.style.color='red';
        }
    }
    
    
})

function reset(){
    gameover=false;
    p1=0;
    p2=0;
    p1score.textContent = p1;
    p2score.textContent = p2;
    p1score.style.color = 'black';
    p2score.style.color='black';
}

btn3.addEventListener('click',reset);