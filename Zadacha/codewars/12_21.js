function nextBigger(num) {
    const digits = num.toString().split('').map(Number);
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }
    if (i === -1) {
        return -1;
    }
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }
    [digits[i], digits[j]] = [digits[j], digits[i]];
    const suffix = digits.slice(i + 1).sort((a, b) => a - b);
    const result = parseInt(digits.slice(0, i + 1).concat(suffix).join(''));
    return result;
}
console.log(nextBigger(23));