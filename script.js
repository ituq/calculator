const nums = document.querySelectorAll(".nums * button");
const ops = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal")

let op1="", op2="";
const display = document.querySelector(".display");
let op="";
let stage =1;
nums.forEach(element => {element.addEventListener("click", (e) => editOps(e,element.textContent))});
ops.forEach(elem => {elem.addEventListener("click", (e)=>switchContext(elem.textContent))})
equal.addEventListener("click", (e) => execute());
function editOps(e,input){
    if(stage==1){
        op1=op1+input; 
    }
    else if(stage==2 || stage==3){
        stage=3;
        op2=op2+input;
    }
    display.textContent=op1+op+op2;
}
function switchContext(oper){
    if(stage==1){
        op=oper
        display.textContent=op1 +op;
        stage++;
    }
    else if(stage==2){
        op= oper;
        display.textContent=op1+op;
    }
    else if(stage==3){
        switch (op) {
            case "-":
                op1=Number(op1)-Number(op2);
                op2="";
                op=oper;
                break;
            case "•":
                op1=Number(op1)*Number(op2);
                op2="";
                op=oper;
                break;
            case "/":
                op1=Number(op1)/Number(op2);
                op2="";
                op=oper;
                break;
            case "+":
                op1=Number(op1)+Number(op2);
                op2="";
                op=oper;
                break;
            default:
                break;
        }
        display.textContent=op1+op;
        stage=2;
    }
    else{
        execute();
        op=oper;
        display.textContent=op1+op
        ready=false;
        isFirst=false;
    }   

}
function execute(){
    switch (op) {
        case "-":
            op1=Number(op1)-Number(op2);
            break;
        case "•":
            op1=Number(op1)*Number(op2);
            break;
        case "/":
            op1=Number(op1)/Number(op2);
            break;
        case "+":
            op1=Number(op1)+Number(op2);
            break;
        default:
            break;
    }
    op2="";
    op="";
    stage=1;
    display.textContent=op1;
    isFirst=true;
}

