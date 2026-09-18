// Solution: Container With Most Water
// Runtime: 1 ms | Memory: 63.4 MB

function maxArea(height: number[]): number {
    let max = 0;

    let left = 0;
    let right = height.length - 1;

    while(left < right){
        const area = Math.min(height[left], height[right]) * (right - left);

        max = Math.max(area, max);

        if(height[left] > height[right]){
            right--;
        } else{
            left++;
        }
    }

    return max;
};