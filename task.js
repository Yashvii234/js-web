function f1(params) {
    f2();
    console.log("functon f1 called");
}

function f2(params) {
    f3()
    console.log("functon f2 called");
}

function f3(params) {
    f4()
    console.log("functon f3 called");
}

function f4(params) {
    f5()
    console.log("functon f4 called");
}

function f5(params) {
    f6()
    console.log("functon f5 called");
}

function f6(params) {
    f7()
    console.log("functon f6 called");
}

function f7(params) {
    f8()
    console.log("functon f7 called");
}

function f8(params) {
    f9()
    console.log("functon f8 called");
}

function f9(params) {
    f10()
    console.log("functon f9 called");
}

function f10(params) {
    console.log("functon f10 called");
    console.log("final f10 executed");
}

f1();