// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo={}) {
    let key = amount + '' + coins; 
    if (key in memo) return memo[key]; 
    if(amount===0) return 1; 

    let used_coin= coins[coins.length - 1]; 
    total = 0; 
    for(let i=0; used_coin * i <= amount ;i++){ 
        total += change(amount- used_coin*i, coins.slice(0,-1), memo); 
    }
    memo[key]= total; 
    return memo[key]; 
};