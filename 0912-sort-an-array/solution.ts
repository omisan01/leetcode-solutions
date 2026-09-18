// Solution: Sort an Array
// Runtime: 46 ms | Memory: 75.3 MB

// Merge Sort
function sortArray(nums: number[]): number[] {
  let temp = new Array(nums.length);
  mergeSort(nums, temp, 0, nums.length - 1);
  return nums;
}

function mergeSort(
  arr: number[],
  temp: number[],
  low: number,
  high: number,
): void {
  if (low >= high) {
    return;
  }
  const mid = Math.floor(low + (high - low) / 2);
  mergeSort(arr, temp, low, mid);
  mergeSort(arr, temp, mid + 1, high);
  merge(arr, temp, low, mid, high);
}

function merge(
  arr: number[],
  temp: number[],
  low: number,
  mid: number,
  high: number,
) {
  let left = low;
  let right = mid + 1;
  let tempIndex: number = left;

  while (left <= mid && right <= high) {
    if (arr[left]! <= arr[right]!) {
      temp[tempIndex] = arr[left];
      tempIndex++;
      left++;
    } else {
      temp[tempIndex] = arr[right];
      tempIndex++;
      right++;
    }
  }

  while (left <= mid) {
    temp[tempIndex] = arr[left];
    tempIndex++;
    left++;
  }

  while (right <= high) {
    temp[tempIndex] = arr[right];
    tempIndex++;
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i];
  }
}