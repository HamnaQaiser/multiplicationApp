const no1= Math.ceil(Math.random()*10);
const no2= Math.ceil(Math.random()*10);
const head=document.getElementById("heading");
head.innerText='What is ' + JSON.stringify(no1)+ ' Mul by '+ JSON.stringify(no2)+ " ?";
const ans=no1*no2;
const input=document.getElementById("num");
const formEl=document.getElementById("form");
let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}
document.getElementById("score").innerText='Score:' + JSON.stringify(score);
formEl.addEventListener("submit", ()=> {
    let userAns= input.value;
    if(userAns == ans)
    {
        score+=1;
        updateScore();
    }
    else
    {
        score-=1;
        updateScore();
    }
})
function updateScore() {
localStorage.setItem("score", JSON.stringify(score));
}