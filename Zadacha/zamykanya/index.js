function vneshni(name){
    const count = 0
    return function(){
        count++
        return `${name} ${count}`
    }
}
let res = vneshni('asad')
console.log(res);
function vneshni(name){
    let count = 0
    return function scorCount(){
        count++;
        return `${name++} - ${count} bal`
    }
    
}
const one = vneshni(0)
// const one1 = vneshni('ивфа')
console.log(one());
console.log(one());
console.log(one());
console.log(one());
// console.log(one1());
// console.log(one1());
//                                 jaksy nerse eken :()
// let arr = [1,2,3,4]
// const task = (nams) => {
//     return arr[nams];
// }
// console.log(task(2));