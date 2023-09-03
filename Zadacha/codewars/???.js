function countTrailingZeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.round(n / 5);
        count += n;
    }
    
    return count;
}
console.log(countTrailingZeros(20)); 

