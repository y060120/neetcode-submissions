class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateDetection = new Set();
        for (let i = 0; i<nums.length; i++) {
            if (duplicateDetection.has(nums[i])) {
                return true;
            } else {
                duplicateDetection.add(nums[i])
            }
        }
        return false;
    }
}
