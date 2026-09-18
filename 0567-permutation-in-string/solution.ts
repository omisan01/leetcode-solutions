// Solution: Permutation in String
// Runtime: 10 ms | Memory: 56.6 MB

function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length > s2.length) return false;

    const arr1 = new Array(26).fill(0);
    const arr2 = new Array(26).fill(0);

    for(let i = 0;  i < s1.length; i++){
        arr1[s1.charCodeAt(i) - 97]++;
        arr2[s2.charCodeAt(i) - 97]++
    }

    let matches = 0;
    for(let i = 0; i < 26; i++){
        if(arr1[i] === arr2[i]) matches++
    }

    let start = 0;
    for(let end = s1.length; end < s2.length; end++){
        if(matches === 26) return true;

        let index = s2.charCodeAt(end) - 97;
        arr2[index]++;

        if(arr2[index] === arr1[index]){
            matches++
        } else if(arr1[index] + 1 === arr2[index]) {
            matches--
        }

        index = s2.charCodeAt(start) - 97;
        arr2[index]--;

        if(arr2[index] === arr1[index]){
            matches++
        } else if(arr1[index] - 1 === arr2[index]) {
            matches--
        }
        start++
    }
    return matches === 26

   
}

