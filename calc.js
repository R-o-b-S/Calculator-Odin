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