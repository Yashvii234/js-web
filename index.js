 fact = (a) => {

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




    let fib =  (n) => {
        if(n === 1) {
            return [0,1];
        } else {
            let a = fib(n-1);
            a.push(a[a.length - 1] + a[a.length - 2]);
            
            return a;
        }
    };
    
    console.log(fib(9)); 





     add = (a , b) => 
  {
       
      for (i = 1; i <= b; i++)
      {
          a++;
      }
      return a;
  }

  
  var a = add(10, 32);

console.log(a);





let apple = () =>  {
    return " tihs is an apple";
}
console.log(apple());



