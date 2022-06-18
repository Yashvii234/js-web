let fib = function (n) {
    if(n === 1) {
        return [0,1];
    } else {
        let a = fib(n-1);
        a.push(a[a.length - 1] + a[a.length - 2]);
        
        return a;
    }
};

console.log(fib(9)); 
