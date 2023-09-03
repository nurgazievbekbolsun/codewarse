function countOnes(left, right) {
    function countOnesUpToN(n) {
        let count = 0;
        let i = 1;
        let q = n;
        while (q > 0) {
            count += Math.floor(n / (i * 2)) * i;
            if (q % 2 === 1) {
                count += (n % i) + 1;
            }
            q = Math.floor(q / 2);
            i *= 2;
        }
        return count;
    }

    return countOnesUpToN(right) - countOnesUpToN(left - 1);
}