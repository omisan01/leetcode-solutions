// Solution: Trapping Rain Water
// Runtime: 2 ms | Memory: 57.8 MB

function trap(height: number[]): number {

    if(height.length < 1){
        return 0
    }
    let res = 0;

    let leftMax = height[0]
    let rightMax = height[height.length - 1]

    let l = 0;
    let r =  height.length - 1;

    while(l < r){
        if(leftMax < rightMax){
            l++;
            leftMax = Math.max(leftMax, height[l])
            res += leftMax - height[l]
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r])
            res += rightMax - height[r]
        }
    }

    return res
};