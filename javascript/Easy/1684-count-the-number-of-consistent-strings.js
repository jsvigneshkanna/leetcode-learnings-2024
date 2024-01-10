/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed = new Set(allowed)
    let consistentCount = 0
    for (let word of words) {
        let isConsistent = true
        for (let char of word) {
            if (!allowed.has(char)) {
                isConsistent = false
            }
        }
        if (isConsistent) {
            consistentCount++
        }
    }
    return consistentCount
};