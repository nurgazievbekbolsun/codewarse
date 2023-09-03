function isAlphanumeric(inputString) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(inputString)
}
console.log(isAlphanumeric('dA'));