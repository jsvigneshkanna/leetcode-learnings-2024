/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    return usingSet(nums)
};

const usingSet = (nums) => {
    const set = new Set()
    const res = []
    for (const num of nums) {
        if (set.has(num)) {
            res.push(num)
        } else {
            set.add(num)
        }
    }
    return res
}