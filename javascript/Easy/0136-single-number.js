/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNum = 0
    for (const num of nums) {
        singleNum ^= num
    }
    return singleNum
};