/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    return usingSet(nums)
};

const usingSet = (nums) => {
    const set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            return num
        }
        set.add(num)
    }
    return -1
}