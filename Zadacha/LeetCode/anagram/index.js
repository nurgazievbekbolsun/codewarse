function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false; // Если длины строк разные, то они не могут быть анаграммами.
    }
    
    const charCount = new Array(26).fill(0); // Создаем массив для счетчика букв (a-z).
    
    // Увеличиваем счетчик для букв из строки s и уменьшаем для букв из строки t.
    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    // Если в итоге все элементы счетчика равны нулю, то строки являются анаграммами.
    return charCount.every(count => count === 0);
}
console.log(isAnagram('anagram','margana'));

/***
 * function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false; // Если длины строк разные, они не могут быть анаграммами.
    }
    const charCount = new Map();
    // Подсчитываем частоту каждого символа в строке s.
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    // Проверяем частоту каждого символа в строке t.
    for (const char of t) {
        if (!charCount.has(char)) {
            return false; // Если символа нет в charCount, то это не анаграмма.
        }
        charCount.set(char, charCount.get(char) - 1);
    }
    // Проверяем, что все частоты символов равны нулю (это означает, что строки являются анаграммами).
    for (const count of charCount.values()) {
        if (count !== 0) {
            return false;
        }
    }
    return true;
}
// Пример использования:
const s = "анаграмма";
const t = "нагарам";
const result = isAnagram(s, t);
console.log(result); // Результат: true
Этот код сначала проверяет, что длины строк s и t совпадают 
(если они разные, то это не анаграмма). Затем он использует 
Map для подсчета частоты каждого символа в строке s и затем проверяет 
частоты символов в строке t. Если частоты совпадают для всех символов, 
то строки являются анаграммами, и функция возвращает true, в противном случае - false.
 */