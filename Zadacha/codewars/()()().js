// function validParentheses(parenStr) {
//     const stack = []

//     for(let a = 0; a < parenStr.length; a++){
//         const char = parenStr[a]

//         if(char === '('){
//             stack.push('(')
//         }else if(char === ')'){
//             if(stack.length === 0 || stack.pop() !== '('){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
//   }
//   console.log(validParentheses('(()())'));

function validParentheses(a) {
    while (a.includes('()')){
      a = a.replace(/\(\)/g, '')
    }
    return a === ''
  }
  console.log(validParentheses('()'));
