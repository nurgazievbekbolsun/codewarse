
function isValid(s) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in bracketPairs) {
            const topElement = stack.pop();
            if (topElement !== bracketPairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"));