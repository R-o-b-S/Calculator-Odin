
function add (a,b) { //adds 2 numbers
    const c = a+b;
    return c.toFixed(2);
}

function sub (a,b) { //subtruct 2 numbers
    const c = a-b;
    return c.toFixed(2);
}

function multi (a,b) { //multiply 2 numbers
    const c = a*b;
    return c.toFixed(2);
}

function div (a,b) { //divide 2 numbers
    if (b === 0) {
        window.alert("I can't divide by 0 my friend");
        input ("C");
    }
    else {
        const c = a/b;
        return c.toFixed(2);}
    
}

function operate (a,o,b) { //takes 2 numbers (a,b) and an operator (o) and calls operation function on the numbers
    let r = 0;
    if (o === "+") {r=add (a,b); console.log(r); return r;}
    else if (o === "-") {r=sub (a,b); return r;}
    else if (o === "*") {r=multi (a,b); return r;}
    else if (o === "%") {r=div (a,b); return r;}
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
    if (n1.assigned === false) {
        n1.val = Number(num); 
        n1.assigned = true;
    }
    else if (n1.assigned === true && n2.assigned === false) {
        n2.val = Number(num); 
        n2.assigned = true;
    }
}

let taken = ""; //stores multiple inp until an operator is given
let op = {  //temporary store for operator until relative function is called
    val: "",
    assigned: false,
}
let display = "";
let res = "";

function input (char) { //takes value of pressed button and decide what to do with it
    const inp = char; //stores every pressed button

    if (inp === "1" || inp === "2" || inp === "3" || inp === "4" || inp === "5" ||
        inp === "6" || inp === "7" || inp === "8" || inp === "9" || inp === "0" ||
        inp === "." ) {
            taken = taken.concat(inp);
            display = display.concat(inp);
            document.getElementById("display").textContent= display;
    } // takes number input storing it in taken

    else if (inp === "+" && op.assigned === false || inp === "-" && op.assigned === false || 
             inp === "*" && op.assigned === false || inp === "%" && op.assigned === false) {
                op.val = String(inp);
                op.assigned = true;
                assign(taken);
                taken = "";
                display = display.concat(inp);
                document.getElementById("display").textContent= display;
    } // takes operator input and stores taken in variable "n1" as the first number to process
    //of "n2" if the second number to process using the assign function

    else if (inp === "+" && op.assigned === true || inp === "-" && op.assigned === true ||
             inp === "*" && op.assigned === true || inp === "%" && op.assigned === true) {
                assign(taken);
                taken= "";
                res = operate(n1.val , op.val , n2.val);
                op.val = String(inp);
                n1.val = Number(res);
                n2.assigned = false;
                display = String(res);
                display = display.concat(inp);
                document.getElementById("display").textContent= display;
    } //if there is a second operator after "n2 being assigned" calculate the first two
    //then stores them in "n1" and takes the new operator

    else if (inp === "=" && op.assigned === false) {
                window.alert("you need to specify an operator first");
    }
    //has to give an error message or simply return the first number

    else if (inp === "=" && op.assigned === true) {
                assign(taken);
                taken= "";
                res = operate(n1.val , op.val , n2.val);
                document.getElementById("display").textContent= String(res);
    }
    //opertate n1 and n2 then show result on display

    else if (inp === "C") {
                n1.val=0;
                n1.assigned= false;
                n2.val=0;
                n2.assigned= false;
                taken="";
                op.val="";
                op.assigned= false;
                res= "";
                display= "";
                document.getElementById("display").textContent= "...";
    }
    //clear display and variables to default
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
    input (".");
});
const bC = document.getElementById("clear");
bC.addEventListener("click", (event) => {
    input ("C");
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