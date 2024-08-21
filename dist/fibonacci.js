function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const n = 10;
let sum = 0;
console.log(`Dãy Fibonacci với ${n} số đầu tiên:`);
for (let i = 0; i < n; i++) {
    const fib = fibonacci(i);
    console.log(fib);
    sum += fib;
}
console.log(`Tổng các số Fibonacci là: ${sum}`);
//# sourceMappingURL=fibonacci.js.map