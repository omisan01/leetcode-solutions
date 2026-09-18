// Solution: Lemonade Change
// Runtime: 1 ms | Memory: 66.1 MB

function lemonadeChange(bills: number[]): boolean {
    let fiveDollar: number = 0;
    let tenDollar: number = 0;

    for(let bill of bills){
        if(bill === 5){
            fiveDollar += 1;
        } else if (bill === 10){
            tenDollar++;
            if(fiveDollar === 0){
                return false;
            }
            fiveDollar--;
        } else {
            if(fiveDollar === 0 || (tenDollar === 0 && fiveDollar < 3)) {
                return false;
            }
            fiveDollar--;
            if(tenDollar > 0){
                tenDollar--;
            } else {
                fiveDollar-= 2;
            }


        }
    }

    return true;
};