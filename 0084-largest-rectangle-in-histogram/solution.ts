// Solution: Largest Rectangle in Histogram
// Runtime: 11 ms | Memory: 71.4 MB

function largestRectangleArea(heights: number[]): number {
    let stack = [];
    let maxArea = 0;
    heights[heights.length] = 0

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const poppedEle = stack.pop();
            const area = heights[poppedEle] * (i - (stack.length === 0 ? -1 : stack[stack.length - 1]) - 1);
            maxArea = Math.max(area, maxArea)
        }
        stack.push(i)
    }


    return maxArea
};