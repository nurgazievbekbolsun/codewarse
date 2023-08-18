//   kod tamgalar saktalgan {
//  {a: '01000001', b:'A'},
//  {a: '01000010', b:'B'},
//  {a: '01000011', b:'C'},
//  {a: '01000100', b:'D'},
//  {a: '01000101', b:'E'},
//  {a: '01000110', b:'F'},
//  {a: '01000111', b:'G'},
//  {a: '01001000', b:'H'},
//  {a: '01001001', b:'I'},
//  {a: '01001010', b:'J'},
//  {a: '01001011', b:'K'},
//  {a: '01001100', b:'L'},
//  {a: '01001101', b:'M'},
//  {a: '01001110', b:'N'},
//  {a: '01001111', b:'O'},
//  {a: '01010000', b:'P'},
//  {a: '01010001', b:'Q'},
//  {a: '01010010', b:'R'},
//  {a: '01010011', b:'S'},
//  {a: '01010100', b:'T'},
//  {a: '01010101', b:'U'},
//  {a: '01010110', b:'V'},
//  {a: '01010111', b:'W'},
//  {a: '01011000', b:'X'},
//  {a: '01011001', b:'Y'},
//  {a: '01011010', b:'Z'},
//  {a: '01100001', b:'a'},
//  {a: '01100010', b:'b'},
//  {a: '01100011', b:'c'},
//  {a: '01100100', b:'d'},
//  {a: '01100101', b:'e'},
//  {a: '01100110', b:'f'},
//  {a: '01100111', b:'g'},
//  {a: '01101000', b:'h'},
//  {a: '01101001', b:'i'},
//  {a: '01101010', b:'j'},
//  {a: '01101011', b:'k'},
//  {a: '01101100', b:'l'},
//  {a: '01101101', b:'m'},
//  {a: '01101110', b:'n'},
//  {a: '01101111', b:'o'},
//  {a: '01110000', b:'p'},
//  {a: '01110001', b:'q'},
//  {a: '01110010', b:'r'},
//  {a: '01110011', b:'s'},
//  {a: '01110100', b:'t'},
//  {a: '01110101', b:'u'},
//  {a: '01110110', b:'v'},
//  {a: '01110111', b:'w'},
//  {a: '01111000', b:'x'},
//  {a: '01111001', b:'y'},
//  {a: '01111010', b:'z'},
//  {a: '00100000', b:' '},
// }

//                      STRAKANYN ALDYNDAGY JANA ARKASYNDAGY SOZDU JOK CHYGARU

// function array(arr){
//     return arr.split('').slice(1,-1).join('');
//   }
//   console.log(array('dafsj'));
  
//                        EKI ARGUMENTTIN KIMISI KICHINE BOLSO OSHOL KOSHULAT

// function task(a,b){
//     return a.length > b.length ? b + a + b : a + b + a
// }
// console.log(task('111','22'));

//                          MASIVTIN JUP SANDY OCHURUU

// function removeEveryOther(arr){
//     return arr.filter((_, ind) => ind % 2 === 0)
// }
// console.log(removeEveryOther([1,2,3,4,5]));

//                          MASIVTEN KAJDYI EKINCHI ELEMENTTI OCHURU

//                                         1 --VARIANT
// const origin = [1,2,3,4,5]
// const modi = removeEveryOther(origin)
// console.log(modi);
//                                            2 --VARIANT

// function removeEveryOther(arr){
//     return arr.filter((v, i) => !(i & 1));
//   }
// console.log(removeEveryOther([1,2,3,4,5,6,7,8]));

//                             ORGUNENTKE KANCHA BERSE q PARAMETIR OSHONCHO KOBOIOT

// const stringy = q => ''.padStart(q, 2);
// console.log(stringy(2));

//                    BUL ---> ARGUMENTKE KANCHA BERILSE OSHONCHO CHYGAT : 101010

// function stringy(size) {
//     let result = '';
//     for (let i = 0; i < size; i++) {
//         result += i % 2 === 0 ? '1' : '0';
//     }
//     return result;
// }
// console.log(stringy('6'));
//                                           2 --VARIANT
// Вариант : Использование генератора и метода join
// function stringy(size) {
//     return Array.from({ length: size }, (_, i) => i % 2 === 0 ? '1' : '0').join('');
// }
// console.log(stringy(12));
//                                             3 --VARIANT

// Вариант : Использование метода repeat
// function stringy(size) {
//     return '10'.repeat(size / 2) + (size % 2 === 1 ? '1' : '');
// }
// console.log(stringy(3));
//                                        4 --VARIANT

// Вариант : Использование массива и метода join
// function stringy(size) {
//     const sequence = [];
//     for (let i = 0; i < size; i++) {
//         sequence.push(i % 2 === 0 ? '1' : '0');
//     }
//     return sequence.join('');
// }
// console.log(stringy('3'));
//                                         5 --VARIANT
// Вариант: Использование тернарного оператора
// function stringy(size) {
//     let result = '';
//     for (let i = 0; i < size; i++) {
//         result += i % 2 === 0 ? '1' : '0';
//     }
//     return result;
// }
// console.log(stringy('2'));

//                       base ARGUMENTTIN MANISINE KARAP limit ARGUMENTTINE CHEIIN KOSHULAT   

// function findMultiples(base, limit) {
//     const multiples = [];
  
//     for (let i = base; i <= limit; i += base) {
//       multiples.push(i);
//     }
  
//     return multiples;
//   }
//   console.log(findMultiples(2,15));

//                                         2 --VARIANT

// function findMultiples(int,limit){
//     return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
//   }
//   console.log(findMultiples(2,9));


//                                         3 --VARIANT

// const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);
// console.log(findMultiples(2,12));

//                           [1,5] UCHUNDAI BERILSE 1 DEN 5 KE CHEIIN CHYGARYP BERET

// function repairPipes(arr) {
//     const result = [];
//     const min = arr[0];
//     const max = arr[arr.length - 1];
//     for (let i = min; i <= max; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(repairPipes([1,9]));

//                                 MASIVTIN ICHIN SORT KYLUU

// function switchGravity(direction, columns) {
//     columns.sort((a, b) => a - b);
//       if (direction === 'K') {
//           columns.reverse();
//       }
//       return columns;
//   }
//   console.log(switchGravity('K',[0,1,4,3,2,6,5]));
  
//                 STRAKANYN ICHINDE KANCHA SOZ BOLSO OSHONUN BASH TAMGASYN ALYP BERET 
//                                         ('bek ndf ur' = B.N.U)

// function convertToInitials(name) {
//     const names = name.split(' ');
//     let initials = '';
//     for (const word of names) {
//         initials += word[0].toUpperCase() + '.';
//     }
//     return initials.slice(0,-1);
// }
// console.log(convertToInitials('bek nur'));

//                                         2 --VARIANT

// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }
// console.log(abbrevName('be b'));

//                       EGER BONUS BOLSO salary 10 KOBOITULUP BERILET

// function bonusTime(salary, bonus) {
//     if (bonus) {
//         return "£" + (salary * 10);
//     } else {
//         return "£" + salary;
//     }
// }

// console.log(bonusTime(6,1))

//                          JANY BASHTALGAN SOZDUN BASH TAMGASYN CHON KYLUU

// function jadenCase(str) {
//     str = str.split(' ').map(word => word.charAt(0)
//     .toUpperCase() + word.slice(1)).join(' ');
//     return str;
// }
// console.log(jadenCase('Как если наши глаза не настоящие'));

//                                           2 --VARIANT

// function jadenCase(str) {
//     const words = str.split(' ');
//     const jadenCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return jadenCasedWords.join(' ');
// }
// const originalQuote = "Как зеркала могут быть настоящими, если наши глаза не настоящие";
// console.log(jadenCase(originalQuote));

//                                                ????

// function binaryToDecimal(binaryStr) {
//     const decimalNumber = parseInt(binaryStr, 10); 
//     return decimalNumber;
// }
// console.log(binaryToDecimal('123'));

//                              STRAKANUN ICHINDE KANCHA SOZ EKENIN BILIP BERET

// function lowercaseCount(str){
//     let res = 0
//     for(let a = 0; a < str.length; a++){
//         const char = str[a]
//         if(char >= 'a' && char <= 'z'){
//             res++
//         }
//     }
//     return res
// }
// console.log(lowercaseCount('qwe'));

//                                          2 --VARIANT

// function sta(str){
//     return (str.match(/[a-z]/g) || []).length
// }
// console.log(sta('adf'));

//                        ( m )     TAMGASYN 7 STRAKAGA STOLBES KYLYP BERET

// function drawStairs(n) {
//     let stairs = '';
//     for (let i = 0; i < n; i++) {
//         stairs += ' '.repeat(i) + 'm\n';
//     }
//     return stairs.trim();
// }
// console.log(drawStairs(7));

//                                         KARAP TUSHUSH KEREK !!!

// function basicOp(operation, value1, value2){
//     switch (operation) {
//         case '+':return value1 + value2;
//         case '-':return value1 - value2;
//         case '*':return value1 * value2;
//         case '/':return value1 / value2;
//         default:
//             return 0;
//     }
// }
// console.log(basicOp('*',11,2));

//                                          2 --VARIANT

// function basicOp(operation, value1, value2){
//     var cases = {
//       '+': value1 + value2,
//       '-': value1 - value2,
//       '*': value1 * value2,
//       '/': value1 / value2
//     };
//     return cases[operation]
//   }
//   console.log(basicOp('+',44,3));

//                                          3 --VARIANT

// function basicOp(o, a, b) {
//     return eval(a+o+b);
//   }
//   console.log(basicOp('-',32,2));

//                                          4 --VARIANT

// function task(opi,va1,va2){
//     if(opi == '-'){
//         return va1 - va2
//     }else if(opi == '+'){
//         return va1 + va2
//     }else if(opi == '*'){
//         return va1 * va2
//     }else if(opi == '/'){
//         return va1 / va2
//     }
// }
// console.log(task('-', 34,344));

//                                 USHUL KODTOR MENEN SOZ JAZUU
//                   (--01100001 --)

// function decodeBinaryMessage(binaryList) {
//     let decodedMessage = '';
//     for (let i = 0; i < binaryList.length; i++) {
//       const binaryNum = binaryList[i];
//       const decimalNum = parseInt(binaryNum,2); 
//       const character = String.fromCharCode(decimalNum);  
//       decodedMessage += character;  
//     }
//     return decodedMessage;
//   }
//   console.log(decodeBinaryMessage(['01101100', '01100101',
//    '01100111', '01100001', '01101110', '01100100', '01100101']));


//                                               ??? !!!

// const whoTookTheCarKey = ( arr )=> arr.map(el=> String.fromCodePoint(parseInt(el, 2))).join('');


//                        STRAKANYN ICHINDEGI KICHINE JANA CHONUN ALYP BERET

// function num(namber){
//     const numArr = namber.split(' ').map(Number)
//      return `${Math.max(...numArr)} ${Math.min(...numArr)} `
// }
// const numbers = ''
// const result = num(numbers)
//   console.log(num('1 2 3 0').toString());


//                ELEMENT >= 5 BOLSO 1 SANYN BERET BOLBOSO 0 SANYN BERET

// function fakeBin(x){
//     x = x.split('').map(el => el >= 5 ? 1: 0 ).join('')
//     return x
// }
// console.log(fakeBin('116'));

//                                    2 -- VARIANT

// function tas(str){
//     let res = ''
//     for(let i = 0;i < str.length; i++){
//         if(Number(str[i]) >= 5){
//             res += '1'
//         }else{
//             res += '0'
//         }
//     }
//     return res
// }
// console.log(tas('2384376'));

//                                          MASIVKE SALUU

// function stringToArray(string){
//     string = string.split(' ')
// return string
// }
// console.log(stringToArray('bek bol sun'));

//                                          MASIVTEN CHYGARUU
                              
// function smash (words) {
//     return words.join(' ')
//  };
//  console.log(smash(["hello", "amazing", "world"]));

//                                                     ??? 

// function booleanToString(b) {
//     return b.replace(/\b(false|true)\b/g, "'$1'")
// }
// console.log(booleanToString('When we pass in false as output'));


//                                     UNDUU TAMGALARDY OCHURUU

// function shortcut(string) {
//     const bob = string.replace(/[eioua]/g, '')
//     return bob
// }
//   console.log(shortcut('ehjk'));

//                                         STRAKANY AiLANDYRUU

// function nameShuffler(str){
//     str = str.split(' ').reverse().join(' ')
// return str
// }
// console.log(nameShuffler('bek nur'));

//                                                     replace()

// const task = dna => dna.replace(/T/g,'U')
// console.log(task('T'));

//                                    2 -- VARIANT

// function DNAtoRNA(dna) {
//     const res = dna.replace(/[T]/g, 'U')
//     return res
//   }
//   console.log(DNAtoRNA('TTT'));

//                                       karasan tushunosun

// function greet(name){
//     const hel = 'Hello,'
//     const sui = ' how are you doing today ?'
//      let a = name
//     return hel + a + sui
//   }
//   console.log(greet('Bek'));
        //                                   toje
// function repeatStr (n, s) {
//     return s.repeat(n)
//   }
//   console.log(repeatStr(2,'3'));

//                                   STRAKANY ichindegi sozdu AILANDYRUU

// function solution(str){
//     let res = str.split('').reverse().join('')
//   return res
// } 
// console.log(solution('bekbolsun'));

//                                    2 -- VARIANT

// function sto(aa){
//     let res = ''
//     for(let a = aa.length -1; a >= 0; a--){
//         res += aa[a]
//     }
//     return res
// }
// console.log(sto('bek'));

//                                     STRAKANY AILANDYRUU

// function reverseWords(str){
//     let arr = str.trim().split(' ').reverse().join(' ')
//     return arr
//   }
//   console.log(reverseWords('hello world'));

//                                      STRAKANYN BACHYN AYAGYNAN ALUU


// function removeChar(str){
//     let res = str.slice(1,-1)
//     return res
//    };
//    console.log(removeChar('bekbolsun'));

//                                num PARAMETR ZNACHENIESINE JARASHA CHYGAT

// var countSheep = function (num){
//     let str = "";
//     for(let i = 1; i <= num; i++) { 
//         str += `${i} sheep...`; 
//     }
//     return str;
//   }
// console.log(countSheep(3));

//                                STRAKADA KANCHA PRABEL BOLSO DAGY ALYP BERET

// function noSpace(x){
//     let arr = x.replace(/ /g, '')
//     // let arr = x.trim()
//     return arr
//     }
//     console.log(noSpace('a dad dafa    adsfd dsfd'));
                 
//                                         NAMBERGE AILANDYRUU
 
// const stringToNumber = function(str){
//     let res = Number(str)
//    return res ;
//  }
//  console.log(stringToNumber('12345'));

//                   EGER r or R UCHUL TAMGADAN BASHTALSA (plays banjo) : (does not play banjo)

// function areYouPlayingBanjo(name) {
//     let res = name
//     let arr = ' does not play banjo'
//     let ar = ' plays banjo'
//      if(name[0] === 'r' || name[0] ===  'R'){
//         res += `${ar}`
//      }else{
//         res += `${arr}`
//      }
//     return res;
//   }
//   console.log(areYouPlayingBanjo('R'));

//                                     2 --VARIANT

// function aga(name){
//     return name + ( name[0].toLowerCase() == 'r' ? ' plays' : ' does not play ') + ' bango'
// }
// console.log(aga('Raf'));

//                                       strakaga ailandyruu

// function numberToString(num) {
//     return String(num)
//   }
//   console.log(numberToString(343));
  
//                                         resultat ["bbeekk"]

// function doubleChar(str) {
//     let res = ''
//     for(let a = 0; a < str.length; a++){
//      res += str[a] + str[a]
//     }
//     return res;
//    }
//    console.log(doubleChar('bek'));

//                                            2 -- VARIANT

// const char = str => str.split('').map(el => el + el).join('')
// console.log(char('e4'));

//                              bonus === true  BOLSO 10 go KOBOITOT : salary

// function bonusTime(salary, bonus) {
//     return bonus ? `£${salary * 10}` : `£${salary}`
// }
// console.log(bonusTime(2432,true));

//                                               radius TABUU

// function icas(radius,bott, rim){
//     const hei = bott - rim ;
//     const area = radius * radius
//     const vol = area * hei
// return vol * 2
// }
// console.log(iceBrickVolume(1,2,1));

//                                              2 --VARIANT

// const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);
// console.log(iceBrickVolume(1,2,1));

//                                        resultat [2,3,4,5,6,7]

// function between(a, b) {
//     let arr = []
//     for(let i = a ; i <= b; i++){
//        arr.push(i)
//     }
//     return arr
//  }
//  console.log(between(2,7))

//                                              2 --VARIANT

// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
// console.log(between(5,6));


//                                  масивтин орточо санын табуу

// масивтин ичиндеги елементти кошуп кайра канча елемент болсо ошого болуп коебуз
// function getAverage(marks) {
//     const sum = marks.reduce((acc, current) => acc + current, 0);
//     const average = sum / marks.length;
//     return Math.round(average);
// }
// console.log(getAverage([21,32,5,34,45]));

//                                             ?????

// const array = [1, 2, 3, 4, 5 ,6];
// const sum = array.reduce((acc, current) => acc + current, 0); // Сумма всех чисел в массиве
// const average = sum / array.length; // Среднее арифметическое
// console.log(Math.round(average));

// function getAverage(marks) {
//     const sum = marks.reduce((acc,current) => acc + current, 1); 
//     const average = sum / marks.length; 
//     return Math.floor(average)
// }
// console.log(getAverage([1,3,1,2]));

// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }
//   console.log(getAverage([1,6]));



