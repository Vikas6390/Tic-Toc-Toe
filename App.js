let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("reset-btn")

let turnO = true //playerX, playerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true

        checkWinner();
    });
});

const checkWinner = () => {
        for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
        }
};
