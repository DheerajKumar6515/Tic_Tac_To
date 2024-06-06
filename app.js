let winner=document.querySelector(".winner")
let boxs=document.querySelectorAll(".box")
let btn=document.querySelector(".resetbtn")

let Winner_array=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let turn0=true;
const resetgame=()=>{
  turn0=true;
  enable();
}


boxs.forEach(event => {
    event.addEventListener('click',(e)=>{
        if(turn0){
            event.innerHTML="0"
            turn0=false;
        }else{
            event.innerHTML="x"
            turn0=true;
        }
        event.disabled=true;

        winnerplayer();
    })
    });

    const enable=()=>{
        for(let box of boxs){
            box.disabled=false;
            box.innerText=""
        }
    }

    const disable=()=>{
        for(let box of boxs){
            box.disabled=true;
        }
    }

    const showWinner=(winner)=>{
        document.querySelector(".winner").innerText=`Congratulations,Winner is ${winner}.`;
        disable();
    }

    const winnerplayer=()=>{
        for(let pattern of Winner_array){
            let pos1play=boxs[pattern[0]].innerText;
            let pos2play=boxs[pattern[1]].innerText;
            let pos3play=boxs[pattern[2]].innerText;

            if(pos1play != "" && pos2play != "" && pos3play != ""){
                if(pos1play===pos2play && pos2play===pos3play){
                    showWinner(pos1play);
                }
            }

        }
    }

    btn.addEventListener('click',()=>{
        resetgame();
        winner.style.display='none';
    })
    



