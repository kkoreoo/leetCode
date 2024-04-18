/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedString = '';
    if (word1.length === word2.length) { // if both words are the same length
        for (const index in word1) {
            mergedString += word1[index];
            mergedString += word2[index];
        }
        return mergedString;
    } else if (word1.length < word2.length) { // if word1 is shorter than word2
        for (const index in word2) {
            if (word1[index] !== undefined) {
                mergedString += word1[index];
                mergedString += word2[index];
            } else {
                mergedString += word2[index];
            }
        }
        return mergedString;
    } else {
        for (const index in word1) {
            if (word2[index] !== undefined) {
                mergedString += word1[index];
                mergedString += word2[index];
            } else {
                mergedString += word1[index];
            }
        }
        return mergedString;
    }
};