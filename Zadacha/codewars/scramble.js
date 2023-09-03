function scramble(str1, str2) {
    // Создаем счетчики для букв в str1 и str2
    const charCountStr1 = {};
    const charCountStr2 = {};

    // Заполняем счетчик для str1
    for (const char of str1) {
        charCountStr1[char] = (charCountStr1[char] || 0) + 1;
    }

    // Заполняем счетчик для str2
    for (const char of str2) {
        charCountStr2[char] = (charCountStr2[char] || 0) + 1;
    }

    // Сравниваем счетчики
    for (const char in charCountStr2) {
        if (!charCountStr1[char] || charCountStr1[char] < charCountStr2[char]) {
            return false;
        }
    }

    return true;
}