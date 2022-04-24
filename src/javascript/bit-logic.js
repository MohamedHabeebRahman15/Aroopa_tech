function max_xor(i, hi, k)
{
    let xor = 0, maxXor = 0;

    while(i < hi){
        for (let j = i + 1; j <= hi; j++) {
            xor = i ^ j;
            if(k >= xor){
                maxXor = Math.max(maxXor, xor);
            }
        }
        i++;
    }

    return maxXor;
}

let lo = 1, hi = 3, k = 3;

let maxi = max_xor(lo, hi, k);

console.log("Maximum XORed Value : ", maxi)