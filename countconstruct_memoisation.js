const countConstruct = (target,wordBank,memo={})=>{
    if(target in memo) return memo[target];
    if(target==='') return 1;
    let ans = 0;
    for(word of wordBank){
        if(target.indexOf(word)===0){
            const ways = countConstruct(target.slice(word.length),wordBank,memo);
            ans += ways;
        }
    }
    memo[target] = ans;
    return ans;
}

console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",["e","ee","eee","eeee","eeeee","eeeeee"]));