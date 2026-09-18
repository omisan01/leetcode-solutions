// Solution: Median of Two Sorted Arrays
// Runtime: 2 ms | Memory: 58.9 MB

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums2.length > nums1.length){
       return findMedianSortedArrays(nums2, nums1)
    }
    const total = nums1.length + nums2.length;
    const med = Math.floor((total + 1) / 2);

    let left = 0;
    let right = nums2.length

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        let partitionB = mid;
        let partitionA = med - partitionB;
        let fLeft = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
        let fRight = partitionA === nums1.length ? Infinity : nums1[partitionA];
        let sLeft = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
        let sRight = partitionB === nums2.length ? Infinity : nums2[partitionB];
        if(fLeft > sRight){
            left = mid + 1;
        } else if(sLeft > fRight){
            right = mid - 1
        } else {
            if (total % 2 !== 0) {
                    return Math.max(fLeft, sLeft);
                }
                return (Math.max(fLeft, sLeft) + Math.min(fRight, sRight)) / 2;
        }

    }

    return -1
};