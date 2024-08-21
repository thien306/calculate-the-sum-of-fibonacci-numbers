function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var n = 10; // Số lượng số Fibonacci muốn hiển thị
var sum = 0; // Khai báo biến sum để tính tổng
console.log("D\u00E3y Fibonacci v\u1EDBi ".concat(n, " s\u1ED1 \u0111\u1EA7u ti\u00EAn:"));
for (var i = 0; i < n; i++) {
    var fib = fibonacci(i);
    console.log(fib); // Hiển thị số Fibonacci
    sum += fib; // Tính tổng các số Fibonacci
}
console.log("T\u1ED5ng c\u00E1c s\u1ED1 Fibonacci l\u00E0: ".concat(sum));
