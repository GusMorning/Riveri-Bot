String.prototype.toJadenCase = function () {
    return this
    .split(' ')
    .map(palabra => palabra[0].toUpperCase() + palabra.slice(1))
    .join(' ')
  };

  //console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

var fibo = function(n) {
    // si el n es 10 te dará 55
    //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    if (n <= 1) return n;
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(10))