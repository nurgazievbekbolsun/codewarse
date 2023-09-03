
// function solution(individualIntegers) {
// 	return individualIntegers
// 		.reduce(splitIntoRanges, [])
// 		.map(convertToRange)
// 		.join(",");
// }

// function splitIntoRanges(ranges, number) {
// 	if (!ranges.length) {
// 		ranges.push([number]);
// 		return ranges;
// 	}

// 	var lastRange = ranges[ranges.length - 1];
// 	var lastNumber = lastRange[lastRange.length - 1];

// 	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
// 	return ranges;
// }

// function convertToRange(range) {
// 	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
// }

//                        BARIANT 2

// function formatRanges(arr) {
//     if (arr.length === 0) {
//         return '';
//     }

//     let result = '';
//     let start = arr[0];
//     let end = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === end + 1) {
//             end = arr[i];
//         } else {
//             if (start === end) {
//                 result += `${start},`;
//             } else if (end - start === 1) {
//                 result += `${start},${end},`;
//             } else {
//                 result += `${start}-${end},`;
//             }

//             start = end = arr[i];
//         }
//     }

//     if (start === end) {
//         result += start;
//     } else if (end - start === 1) {
//         result += `${start},${end}`;
//     } else {
//         result += `${start}-${end}`;
//     }

//     return result;
// }

// // Пример использования:
// const arr = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// console.log(formatRanges(arr));