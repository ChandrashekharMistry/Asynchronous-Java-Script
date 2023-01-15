
    let sum = (a, b) => {
        console.log(`sum is ${a + b}`);
        return a + b
    }
    let addition = (a, b, callbackhere) => {
        callbackhere(a, b)
    }
    addition(2, 5, sum)













    let diff = (a, b) => {
        console.log(`diff is ${a - b}`);
        return a - b
    }
    var sub = (a, b, callbackhereforSub) => {
        callbackhereforSub(a, b)
    }

    sub(5, 2, diff)



    let product = (a, b) => {
        console.log(`Product is ${a * b}`);
        return a * b
    }
    var multiply = (a, b, callbackhereforMultiply) => {
        callbackhereforMultiply(a, b)
    }
    multiply(2, 5, product)

    let series = (a, b) => {
        addition(a, b, (a, b) => { console.log(a + b);
        sub(a, b, (a, b) => { console.log(a - b); 
        multiply(a,b)
    })
    })


    }

