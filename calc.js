
function add (a,b) { //adds 2 numbers
    const c = a+b;
    return c;
}

function sub (a,b) { //subtruct 2 numbers
    const c = a-b;
    return c;
}

function multi (a,b) { //multiply 2 numbers
    const c = a*b;
    return c;
}

function div (a,b) { //divide 2 numbers
    const c = a/b;
    return c;
}

function operate (a,o,b) { //takes 2 numbers (a,b) and an operator (o) and calls operation function on the numbers
    if (o === "+") {add (a,b);}
    else if (o === "-") {sub (a,b);}
    else if (o === "*") {multi (a,b);}
    else if (o === "/") {div (a,b);}
}

const n1 = {  //obj containing the first imput
    val: 0,
    assigned: false,
}

const n2 = { //obj containing the second imput
    val: 0,
    assigned: false,
}

function assign (num) { //function that assign values to n1 and n2
    if (n1.assigned == false) {
        n1.val = num; 
        n1.assigned = true;
    }
    else if (n1.assigned == true && n2.assigned == false) {
        n2.val = num; 
        n2.assigned = true;
    }
}

let taken = ""; //stores multiple inp until an operator is given
let op = {  //temporary store for operator until relative function is called
    val: "",
    assigned: false,
}
let display = "";

function input (char) { //takes value of pressed button and decide what to do with it
    const inp = char; //stores every pressed button

    if (inp === "1" || inp === "2" || inp === "3" || inp === "4" || inp === "5" ||
        inp === "6" || inp === "7" || inp === "8" || inp === "9" || inp === "0") {
            taken = taken.concat(inp);
            display = display.concat(inp);
            document.getElementById("display").textContent= display;
    }
    else if (inp === "+" && op.assigned === false || inp === "-" && op.assigned === false || 
             inp === "*" && op.assigned === false || inp === "%" && op.assigned === false) {
                op.val = inp;
                op.assigned = true;
                assign(taken);
                taken = "";
                display = display.concat(inp);
                document.getElementById("display").textContent= display;
    }
    else if (inp === "+" && op.assigned === true || inp === "-" && op.assigned === true ||
             inp === "*" && op.assigned === true || inp === "%" && op.assigned === true) {
                console.log( "in arrivo" ) //has to start operation and reset op to false
    }
    else if (inp === "=" && op.assigned === false) {
                console.log( "in arrivo" ) //has to give an error message
    }
    else if (inp === "=" && op.assigned === true) {
                console.log( "in arrivo" ) //has to start operation and reset op to false
    }
    else if (inp === "C") {
                console.log( "in arrivo" ) //has to crear display and variables
    }
}

const b1 = document.getElementById("1");
b1.addEventListener("click", (event) => {
    input ("1");
});
const b2 = document.getElementById("2");
b2.addEventListener("click", (event) => {
    input ("2");
});
const b3 = document.getElementById("3");
b3.addEventListener("click", (event) => {
    input ("3");
});
const b4 = document.getElementById("4");
b4.addEventListener("click", (event) => {
    input ("4");
});
const b5 = document.getElementById("5");
b5.addEventListener("click", (event) => {
    input ("5");
});
const b6 = document.getElementById("6");;
b6.addEventListener("click", (event) => {
    input ("6");
});
const b7 = document.getElementById("7");
b7.addEventListener("click", (event) => {
    input ("7");
});
const b8 = document.getElementById("8");
b8.addEventListener("click", (event) => {
    input ("8");
});
const b9 = document.getElementById("9");
b9.addEventListener("click", (event) => {
    input ("9");
});
const b0 = document.getElementById("0");
b0.addEventListener("click", (event) => {
    input ("0");
});
const bp = document.getElementById("point");
bp.addEventListener("click", (event) => {
    console.log("."); //work in progress
});
const bC = document.getElementById("clear");
bC.addEventListener("click", (event) => {
    console.log("C"); //work in progress
});
const badd = document.getElementById("addiction");
badd.addEventListener("click", (event) => {
    input ("+");
});
const bsub = document.getElementById("subtraction");
bsub.addEventListener("click", (event) => {
    input ("-");
});
const bmul = document.getElementById("multiplication");
bmul.addEventListener("click", (event) => {
    input ("*");
});
const bdiv = document.getElementById("division");
bdiv.addEventListener("click", (event) => {
    input ("%");
});
const beq = document.getElementById("equal");
beq.addEventListener("click", (event) => {
    input ("=");
});