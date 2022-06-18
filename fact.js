
function fact(a){

    let b=1;
    
    for(let i=a; i>=1; i--)
    {
    b*=i;
    
    }
    return b;
    }
    
    //a)
    console.log(fact(5));
    
    //b)
    console.log(fact(4));
    
    //c)
    let s=fact(2) * fact(4)
    console.log(s);

