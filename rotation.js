function circularArrayRotation(a, k) {
    const length = a.length    
    for(k= k % length; k>0; k--){            
        a.unshift(a.pop())                     
    }
    return a;
}

const res = circularArrayRotation([1,2,3,4], 2);
console.log({ res });