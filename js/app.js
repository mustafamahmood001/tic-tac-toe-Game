let boxes=document.querySelectorAll(".box");
let resetGameBtn=document.querySelector('#resetGame');
let newGameBtn=document.querySelector('#newGame');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let winPattern=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');

}
let turnO=true;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="✔";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
    
});

const disabledBoxes=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`; // Fixed case and template literal
    msgContainer.classList.remove('hide');
    disabledBoxes();
};


let checkWinner=()=>{
    for(let pattern of winPattern){
           let post1val= boxes[pattern[0]].innerText;
           let post2val= boxes[pattern[1]].innerText;
           let post3val= boxes[pattern[2]].innerText;
           if(post1val!="" && post2val!="" && post3val!=""){
            if(post1val === post2val && post2val === post3val){
                showWinner(post1val);
            }
           }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);