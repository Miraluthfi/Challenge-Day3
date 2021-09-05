//input user
const number = (prompt('Enter a positive number: '));
const fibonacci = (n) => {
    const fibArray = [0,1];

    for(let i=2; i<=n; i++){
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
        }
            return fibArray;
    }
    console.log(fibonacci(number));
