//1. Calculating prime numbers
let start = performance.now();
const isPrimeNum = (num) => {
    if (num === 1) {
        console.log("1 is neither a prime or non-prime number");
    }
    let isPrime = true;
    for (let i=2; i < Math.ceil(num/2); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

console.log(`The 23rd prime number is ${isPrimeNum(23)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(`The 24th prime number is ${isPrimeNum(24)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
//how long it takes to find the 100,000th and 1,000,000th prime number
console.log(`The 10,000th prime number is ${isPrimeNum(1e5)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(`The 100,000th prime number is ${isPrimeNum(1e6)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//3 Fibonacci- Which implementation of Fibonacci should be faster? Usually. non recussive functions are faster
//but based on these two implementation, the recurssive function is faster, but this will use more memory.  
const recurFib = (num) => {
    return num < 2 ? num : recurFib(num-1) + recurFib(num-2);
}

console.log(`The  Recurrsive Fibonacci number is ${recurFib(10)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

const fib = (num) => {
    const vals = [0, 1];
    while (vals.length-1 < num) {
        let len = vals.length;
        vals.push(vals[len-1] + vals[len-2]);
    }
    return vals[num];
}

console.log(`The  Fibonacci  number is ${fib(10)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//4. Reverse A string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversor = (text) => {
    let output = "";
    for (let i = text.length-1; i >= 0; i--) {
        output += text[i];
    }
    return output;
}

console.log(reversor("hello"));
console.log(reversor(story));
