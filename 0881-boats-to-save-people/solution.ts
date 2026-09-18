// Solution: Boats to Save People
// Runtime: 64 ms | Memory: 63.7 MB

function numRescueBoats(people: number[], limit: number): number {
 people = people.sort((a,b) => a-b);

    let boats = 0;
    let left = 0;
    let right = people.length - 1;

    while(left <= right){
    if(left <= right && people[left] + people[right] <= limit){
        left++
    }
    boats++;
    right--;
    }

    return boats
    
  
};