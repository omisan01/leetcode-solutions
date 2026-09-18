// Solution: Find in Mountain Array
// Runtime: 47 ms | Memory: 55.3 MB

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

function findInMountainArray(target: number, mountainArr: MountainArray) {
    let low = 0;
    let high = mountainArr.length();
    let peak = 0;

    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        if (mountainArr.get(i) < mountainArr.get(i + 1)) {
            low = i + 1
        } else {
            high = i - 1
        }
    }

    peak = low;
    low = 0;
    high = peak;

    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        const mid = mountainArr.get(i);
        if (mid === target) {
            return i
        }
        if (mid < target) {
            low = i + 1
        } else {
            high = i - 1
        }
    }

    low = mountainArr.length()
    high = peak

    while (high < low) {
        const i = Math.floor((low + high) / 2);
        const mid = mountainArr.get(i);
        if (mid === target) {
            return i
        }
        if (low < target) {
            low = i - 1
        } else {
            high = i + 1
        }
    }

    return -1
};