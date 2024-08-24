let userscore=0;
let compscore=0;
let drawscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#computer-score");
const dscore=document.querySelector("#DRAW-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);/*string cannot be directly generated but random num can be generated*/
    return options[randomindex];/*giving random index to array*/
};
const drawgame=()=>{
    
        drawscore++;
        dscore.innerText=drawscore;

    msg.innerText="DRAW!PLAY AGAIN"
    msg.style.backgroundColor="yellow";

    
};
const showinner=(userwin)=>{
    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        msg.innerText="CONGRATULATIONS!,YOU WON THE GAME";
        msg.style.backgroundColor="pink";
    }
    else{

        compscore++;
        cscore.innerText=compscore;
        msg.innerText="COMPUTER WON THE GAME";
        msg.style.backgroundColor=" #00FFFF ";
    }
    
};

//generate user choice
const playgame=(userchoice)=>{
console.log(userchoice);
const compchoice=gencompchoice();
console.log(compchoice);

if(userchoice===compchoice){
drawgame();


}
else{
    let userwin=true;
    if(userchoice==="rock"){
       userwin= compchoice==="paper"?false:true;
    } else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showinner(userwin);
    }

};


choices.forEach((choice)=>{
    
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
playgame(userchoice);
})
})